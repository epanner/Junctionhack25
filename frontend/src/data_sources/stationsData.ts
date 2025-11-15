/**
 * Charging Stations Data Source
 * Contains all charging station related data
 * TODO: Replace with API calls when backend is ready
 */

import { apiGet } from './apiClient';

export interface Station {
  id: string;
  name: string;
  lat: number;
  lng: number;
  available: number;
  total: number;
  power: string;
  price: string;
  distance?: string;
  address?: string;
}

export const getChargingStations = async (
  userLat?: number,
  userLng?: number,
  radius?: number
): Promise<Station[]> => {
  const params = new URLSearchParams();
  if (typeof userLat === 'number') params.set('userLat', userLat.toString());
  if (typeof userLng === 'number') params.set('userLng', userLng.toString());
  if (typeof radius === 'number') params.set('radius', radius.toString());

  const query = params.toString() ? `?${params.toString()}` : '';
  let stations = await apiGet<Station[]>(`/api/stations/cards${query}`);
  if (stations.length === 0 && typeof radius === 'number' && radius < 500) {
    const widerParams = new URLSearchParams(params);
    widerParams.set('radius', '1000');
    const widerQuery = widerParams.toString() ? `?${widerParams.toString()}` : '';
    stations = await apiGet<Station[]>(`/api/stations/cards${widerQuery}`);
  }
  return stations;
};

export const getStationById = async (stationId: string): Promise<Station | null> => {
  try {
    return await apiGet<Station>(`/api/stations/cards/${stationId}`);
  } catch (error) {
    console.error('Failed to fetch station', error);
    return null;
  }
};
