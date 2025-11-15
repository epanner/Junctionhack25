# Data Sources

This folder contains all data source files for the ChargeID application. These files serve as a central location for mock data and will be replaced with actual API calls when the backend is integrated.

## Structure

### `userData.ts`
Contains user profile and statistics data:
- `getUserProfile()` - Returns user profile information (name, email, DID status, etc.)
- `getUserStatistics()` - Returns user charging statistics (total sessions, energy charged, spending)

### `vehicleData.ts`
Contains vehicle information and status:
- `getVehicleInfo()` - Returns vehicle specifications (make, model, battery capacity, charging limits)
- `getVehicleBatteryStatus()` - Returns current battery status (SoC, range, health)
- `getVehicleChargingHistory()` - Returns vehicle charging history summary

### `stationsData.ts`
Contains charging station data:
- `getChargingStations(userLat?, userLng?, radius?)` - Returns list of available charging stations
- `getStationById(stationId)` - Returns a single station by ID

### `sessionsData.ts`
Contains charging session data:
- `getChargingSessions(userId?, limit?)` - Returns list of charging sessions
- `getActiveSession(userId?)` - Returns current active/ongoing session
- `getSessionById(sessionId)` - Returns a single session by ID

### `locationData.ts`
Contains location preferences:
- `getDefaultLocation()` - Returns default location (San Francisco)
- `getUserSavedLocations(userId?)` - Returns user's saved locations (Home, Work, etc.)

## Usage

Import data sources in your components:

```typescript
import { 
  getUserProfile, 
  getVehicleInfo, 
  getChargingStations 
} from '../data_sources';

useEffect(() => {
  async function loadData() {
    const [userProfile, vehicle, stations] = await Promise.all([
      getUserProfile(),
      getVehicleInfo(),
      getChargingStations(),
    ]);
    // set state with the results
  }
  loadData();
}, []);
```

Or import everything:

```typescript
import * as DataSources from '../data_sources';
```

## Backend Integration

When integrating with the backend:

1. Replace the mock data functions with actual API calls
2. Add async/await for API requests
3. Add error handling and loading states
4. Keep the same interface/return types for minimal changes to components
5. Consider adding data caching/state management (e.g., React Query, SWR)

Example backend integration:

```typescript
// Before (mock)
export const getUserProfile = (): UserProfile => {
  return { id: 'user_001', name: 'John Driver', ... };
};

// After (API)
export const getUserProfile = async (): Promise<UserProfile> => {
  const response = await fetch('/api/user/profile');
  if (!response.ok) throw new Error('Failed to fetch profile');
  return response.json();
};
```

## Type Safety

All data sources export TypeScript interfaces for type safety. These interfaces should be maintained when connecting to the backend to ensure type consistency across the application.
