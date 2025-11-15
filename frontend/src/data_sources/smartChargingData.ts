/**
 * Smart Charging Data Source
 * Contains AI recommendation and negotiation results
 * TODO: Replace with API calls when backend is ready
 */

export type OptimizationMode = 'cost' | 'speed' | 'balanced';

export interface ChargingPreferences {
  currentSoC: number; // Current State of Charge (percentage)
  targetSoC: number; // Target State of Charge (percentage)
  departureTime: string; // Time format: "HH:MM"
  optimizationMode: OptimizationMode;
  userLocation: {
    lat: number;
    lng: number;
  };
}

export interface SmartChargingRecommendation {
  recommendedStationId: string;
  stationName: string;
  distance: string;
  maxPower: string;
  originalPrice: string; // Original price per kWh
  negotiatedPrice: string; // AI-negotiated price per kWh
  estimatedTotalCost: number; // Total cost in dollars
  estimatedDuration: number; // Duration in minutes
  energyNeeded: number; // Energy needed in kWh
  savings: number; // Money saved in dollars
  startTime: string; // Recommended start time
  endTime: string; // Estimated end time
  availability: {
    available: number;
    total: number;
  };
  confidenceScore: number; // 0-100, how confident the AI is in this recommendation
  reasonCode: string; // Why this station was recommended
}

/**
 * Simulate AI negotiation and return smart charging recommendation
 * This would call the backend AI service in production
 */
export const getSmartChargingRecommendation = async (
  preferences: ChargingPreferences
): Promise<SmartChargingRecommendation> => {
  // Simulate API delay (3 seconds for the handshake animation)
  await new Promise(resolve => setTimeout(resolve, 3000));

  // TODO: Replace with actual API call to backend AI service
  // Example: const response = await fetch('/api/smart-charging/recommend', { body: JSON.stringify(preferences) });
  
  // Mock calculation based on preferences
  const energyNeeded = Math.round((preferences.targetSoC - preferences.currentSoC) * 0.75);
  
  // Different recommendations based on optimization mode
  let recommendedStationId: string;
  let negotiatedPricePerKwh: number;
  let estimatedDuration: number;
  let originalPricePerKwh: number;
  let reasonCode: string;
  
  switch (preferences.optimizationMode) {
    case 'cost':
      recommendedStationId = '2'; // Station #28 - slower but cheaper
      originalPricePerKwh = 0.15;
      negotiatedPricePerKwh = 0.13;
      estimatedDuration = 52;
      reasonCode = 'Lowest cost option with successful price negotiation';
      break;
    case 'speed':
      recommendedStationId = '3'; // Station #15 - fastest but more expensive
      originalPricePerKwh = 0.22;
      negotiatedPricePerKwh = 0.19;
      estimatedDuration = 25;
      reasonCode = 'Fastest charging with 250kW power delivery';
      break;
    case 'balanced':
    default:
      recommendedStationId = '1'; // Station #42 - balanced option
      originalPricePerKwh = 0.18;
      negotiatedPricePerKwh = 0.15;
      estimatedDuration = 38;
      reasonCode = 'Optimal balance of cost, speed, and location';
  }
  
  const originalTotalCost = energyNeeded * originalPricePerKwh;
  const negotiatedTotalCost = energyNeeded * negotiatedPricePerKwh;
  const savings = originalTotalCost - negotiatedTotalCost;
  
  // Calculate start/end times based on departure time
  const [hours, minutes] = preferences.departureTime.split(':').map(Number);
  const departureMinutes = hours * 60 + minutes;
  const startMinutes = departureMinutes - estimatedDuration - 10; // 10 min buffer
  const endMinutes = startMinutes + estimatedDuration;
  
  const formatTime = (totalMinutes: number): string => {
    const h = Math.floor(totalMinutes / 60) % 24;
    const m = totalMinutes % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
  };
  
  // Map station IDs to names and details
  const stationDetails: Record<string, { name: string; power: string; distance: string; available: number; total: number }> = {
    '1': { name: 'Station #42', power: '150 kW', distance: '2.3 km', available: 3, total: 4 },
    '2': { name: 'Station #28', power: '50 kW', distance: '3.1 km', available: 2, total: 6 },
    '3': { name: 'Station #15', power: '250 kW', distance: '1.8 km', available: 4, total: 4 },
  };
  
  const station = stationDetails[recommendedStationId];
  
  return {
    recommendedStationId,
    stationName: station.name,
    distance: station.distance,
    maxPower: station.power,
    originalPrice: `$${originalPricePerKwh.toFixed(2)}/kWh`,
    negotiatedPrice: `$${negotiatedPricePerKwh.toFixed(2)}/kWh`,
    estimatedTotalCost: Number(negotiatedTotalCost.toFixed(2)),
    estimatedDuration,
    energyNeeded,
    savings: Number(savings.toFixed(2)),
    startTime: formatTime(startMinutes),
    endTime: formatTime(endMinutes),
    availability: {
      available: station.available,
      total: station.total,
    },
    confidenceScore: 92, // AI confidence in recommendation
    reasonCode,
  };
};
