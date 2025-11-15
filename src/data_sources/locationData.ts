/**
 * Location Data Source
 * Contains default location settings and user location preferences
 * TODO: Replace with API calls when backend is ready
 */

export interface UserLocation {
  lat: number;
  lng: number;
  name: string;
}

// Default location (San Francisco)
export const getDefaultLocation = (): UserLocation => {
  return {
    lat: 37.7749,
    lng: -122.4194,
    name: 'San Francisco',
  };
};

// Get user's saved locations - replace with API call
export const getUserSavedLocations = (userId?: string): UserLocation[] => {
  // TODO: Replace with actual API call
  return [
    {
      lat: 37.7749,
      lng: -122.4194,
      name: 'Home',
    },
    {
      lat: 37.7849,
      lng: -122.4094,
      name: 'Work',
    },
  ];
};
