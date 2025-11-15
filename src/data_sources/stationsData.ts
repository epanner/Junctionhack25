/**
 * Charging Stations Data Source
 * Contains all charging station related data
 * TODO: Replace with API calls when backend is ready
 */

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

// Mock stations around San Francisco - replace with API call
export const getChargingStations = (
  userLat?: number,
  userLng?: number,
  radius?: number // in km
): Station[] => {
  // TODO: Replace with actual API call that filters by location and radius
  return [
    {
      id: '1',
      name: 'Station #42',
      lat: 37.7849,
      lng: -122.4094,
      available: 3,
      total: 4,
      power: '150 kW',
      price: '$0.18/kWh',
      distance: '2.3 km',
      address: '123 Market St'
    },
    {
      id: '2',
      name: 'Station #28',
      lat: 37.7699,
      lng: -122.4294,
      available: 2,
      total: 6,
      power: '50 kW',
      price: '$0.15/kWh',
      distance: '3.1 km',
      address: '456 Main Ave'
    },
    {
      id: '3',
      name: 'Station #15',
      lat: 37.7899,
      lng: -122.4194,
      available: 4,
      total: 4,
      power: '250 kW',
      price: '$0.22/kWh',
      distance: '1.8 km',
      address: '789 Oak Blvd'
    },
    {
      id: '4',
      name: 'Station #33',
      lat: 37.7649,
      lng: -122.4394,
      available: 1,
      total: 3,
      power: '75 kW',
      price: '$0.16/kWh',
      distance: '4.5 km',
      address: '321 Pine St'
    },
    {
      id: '5',
      name: 'Station #19',
      lat: 37.7799,
      lng: -122.3994,
      available: 0,
      total: 2,
      power: '120 kW',
      price: '$0.19/kWh',
      distance: '2.9 km',
      address: '555 Elm Dr'
    }
  ];
};

// Get single station by ID - replace with API call
export const getStationById = (stationId: string): Station | null => {
  const stations = getChargingStations();
  return stations.find(s => s.id === stationId) || null;
};
