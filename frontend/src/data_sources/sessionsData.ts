/**
 * Charging Sessions Data Source
 * Contains all charging session history and active session data
 * TODO: Replace with API calls when backend is ready
 */

import { apiGet, apiPost } from './apiClient';
import type { Station } from './stationsData';
import type { SmartChargingRecommendation } from './smartChargingData';

export interface ChargingSession {
  id: string;
  date: string;
  station: string;
  stationId: string;
  location: string;
  energy: string;
  cost: string;
  duration: string;
  status: 'completed' | 'ongoing' | 'scheduled';
  startTime?: string;
  endTime?: string;
  startSoC?: number; // State of Charge at start (percentage)
  endSoC?: number; // State of Charge at end (percentage)
}

export const getChargingSessions = async (
  _userId?: string,
  limit?: number
): Promise<ChargingSession[]> => {
  const params = new URLSearchParams();
  if (typeof limit === 'number') params.set('limit', limit.toString());
  const query = params.toString() ? `?${params.toString()}` : '';
  return apiGet<ChargingSession[]>(`/api/charging-sessions${query}`);
};

export const getActiveSession = async (_userId?: string): Promise<ChargingSession | null> => {
  return apiGet<ChargingSession | null>('/api/charging-sessions/active');
};

export const getSessionById = async (sessionId: string): Promise<ChargingSession | null> => {
  try {
    return await apiGet<ChargingSession>(`/api/charging-sessions/${sessionId}`);
  } catch (error) {
    console.error('Failed to fetch session', error);
    return null;
  }
};

const DEFAULT_USER_ID = 'user_001';
const DEFAULT_VEHICLE_VIN = 'W1KAH5EB2PF093797';
const DEFAULT_BATTERY_ID = 'did:itn:NiHW21TcdTkW8zk6ruhpfv';

interface SessionAuthResponse {
  status: string;
  user_id: string;
  vehicle_vin: string;
  battery_id: string;
  charger: {
    station_id: string;
    name: string;
    operator: string;
    location: {
      city: string;
      address: string;
      latitude: number;
      longitude: number;
    };
    connectors: Array<{ connector_id: string; type: string; power_kw: number; status: string }>;
  };
  pricing: {
    total_eur: number;
    energy_kwh: number;
    power_kw: number;
    pricing_tier: string;
  };
}

interface AnchorRecord {
  session_id: string;
  plan_hash: string;
  solana_tx: string;
  anchored_at: string;
}

interface AnchorResponse {
  status: 'anchored' | 'already_anchored';
  anchor: AnchorRecord;
}

interface BookSessionParams {
  station: Station;
  currentSoC: number;
  targetSoC: number;
  departureTime: string;
  recommendation?: SmartChargingRecommendation | null;
}

export const bookChargingSession = async ({
  station,
  currentSoC,
  targetSoC,
  departureTime,
  recommendation,
}: BookSessionParams) => {
  if (!station) {
    throw new Error('Select a charging station to continue.');
  }

  const sessionId = `sess_${Date.now()}`;

  const authPayload = {
    user_id: DEFAULT_USER_ID,
    vehicle_vin: DEFAULT_VEHICLE_VIN,
    battery_id: DEFAULT_BATTERY_ID,
    charger_id: station.id,
    reserve_connector: true,
  };

  const authResponse = await apiPost<SessionAuthResponse>('/api/sessions/authenticate', authPayload);

  const planRecord = {
    session_id: sessionId,
    created_at: new Date().toISOString(),
    station: {
      id: station.id,
      name: station.name,
      address: station.address,
      coordinates: {
        lat: station.lat,
        lng: station.lng,
      },
    },
    preferences: {
      current_soc: currentSoC,
      target_soc: targetSoC,
      departure_time: departureTime,
    },
    pricing: authResponse.pricing,
    recommendation: recommendation
      ? {
          station_id: recommendation.recommendedStationId,
          savings: recommendation.savings,
          estimated_duration: recommendation.estimatedDuration,
        }
      : null,
  };

  const anchorResponse = await apiPost<AnchorResponse>(
    `/api/trust-anchor/${sessionId}`,
    {
      plan_record: planRecord,
      force_reanchor: false,
    }
  );

  const now = new Date();
  const formattedTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const energyKwh = authResponse.pricing.energy_kwh;
  const costEur = authResponse.pricing.total_eur;

  const sessionRecord: ChargingSession = {
    id: sessionId,
    date: now.toLocaleString(),
    station: station.name,
    stationId: station.id,
    location: station.address || authResponse.charger.location.address,
    energy: `${energyKwh.toFixed(1)} kWh`,
    cost: `€${costEur.toFixed(2)}`,
    duration: recommendation ? `${recommendation.estimatedDuration} min` : '45 min',
    status: 'scheduled',
    startTime: formattedTime,
    startSoC: currentSoC,
    endSoC: targetSoC,
  };

  await apiPost<ChargingSession>('/api/charging-sessions', sessionRecord);

  return {
    authResponse,
    anchorResponse,
    session: sessionRecord,
  };
};
