/**
 * Vehicle Data Source
 * Contains all vehicle related data including specifications and current status
 * TODO: Replace with API calls when backend is ready
 */

export interface VehicleInfo {
  id: string;
  make: string;
  model: string;
  variant: string;
  batteryCapacity: number; // in kWh
  maxACCharging: number; // in kW
  maxDCCharging: number; // in kW
  efficiency: number; // in kWh/100km
  did: string; // Vehicle DID
  didVerified: boolean;
}

export interface VehicleBatteryStatus {
  currentSoC: number; // State of Charge in percentage
  currentEnergy: number; // Current energy in kWh
  estimatedRange: number; // in km
  batteryHealth: number; // in percentage
}

export interface ChargingHistory {
  totalSessions: number;
  totalEnergy: number; // in kWh
  averagePerMonth: number; // in kWh
}

import { apiGet } from './apiClient';

export const getVehicleInfo = async (): Promise<VehicleInfo> => {
  return apiGet<VehicleInfo>('/api/vehicles/info');
};

export const getVehicleBatteryStatus = async (): Promise<VehicleBatteryStatus> => {
  return apiGet<VehicleBatteryStatus>('/api/vehicles/battery-status');
};

export const getVehicleChargingHistory = async (): Promise<ChargingHistory> => {
  return apiGet<ChargingHistory>('/api/vehicles/charging-history');
};
