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

// Mock vehicle info - replace with API call
export const getVehicleInfo = (): VehicleInfo => {
  return {
    id: 'vehicle_001',
    make: 'Tesla',
    model: 'Model 3',
    variant: 'Long Range AWD',
    batteryCapacity: 60,
    maxACCharging: 11,
    maxDCCharging: 170,
    efficiency: 16.5,
    did: 'did:ev:0x742d35Cc6634C0532925a3b8...',
    didVerified: true,
  };
};

// Mock battery status - replace with API call
export const getVehicleBatteryStatus = (): VehicleBatteryStatus => {
  return {
    currentSoC: 68,
    currentEnergy: 41,
    estimatedRange: 250,
    batteryHealth: 98,
  };
};

// Mock charging history - replace with API call
export const getVehicleChargingHistory = (): ChargingHistory => {
  return {
    totalSessions: 47,
    totalEnergy: 1240,
    averagePerMonth: 155,
  };
};
