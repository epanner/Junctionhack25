/**
 * Charging Sessions Data Source
 * Contains all charging session history and active session data
 * TODO: Replace with API calls when backend is ready
 */

import { apiGet } from './apiClient';

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
