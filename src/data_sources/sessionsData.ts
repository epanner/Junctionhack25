/**
 * Charging Sessions Data Source
 * Contains all charging session history and active session data
 * TODO: Replace with API calls when backend is ready
 */

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

// Mock sessions data - replace with API call
export const getChargingSessions = (
  userId?: string,
  limit?: number
): ChargingSession[] => {
  // TODO: Replace with actual API call
  const allSessions: ChargingSession[] = [
    {
      id: '1',
      date: 'Today, 10:30 AM',
      station: 'Station #42',
      stationId: '1',
      location: '123 Market St',
      energy: '24.5 kWh',
      cost: '$4.32',
      duration: '45 min',
      status: 'ongoing',
      startTime: '10:30 AM',
      startSoC: 45,
    },
    {
      id: '2',
      date: 'Nov 14, 2025',
      station: 'Station #28',
      stationId: '2',
      location: '456 Main Ave',
      energy: '32.1 kWh',
      cost: '$5.87',
      duration: '1h 15m',
      status: 'completed',
      startTime: '2:15 PM',
      endTime: '3:30 PM',
      startSoC: 35,
      endSoC: 88,
    },
    {
      id: '3',
      date: 'Nov 12, 2025',
      station: 'Station #15',
      stationId: '3',
      location: '789 Oak Blvd',
      energy: '28.3 kWh',
      cost: '$4.95',
      duration: '52 min',
      status: 'completed',
      startTime: '9:00 AM',
      endTime: '9:52 AM',
      startSoC: 40,
      endSoC: 87,
    },
    {
      id: '4',
      date: 'Nov 10, 2025',
      station: 'Station #42',
      stationId: '1',
      location: '123 Market St',
      energy: '26.7 kWh',
      cost: '$4.68',
      duration: '48 min',
      status: 'completed',
      startTime: '4:30 PM',
      endTime: '5:18 PM',
      startSoC: 42,
      endSoC: 86,
    },
    {
      id: '5',
      date: 'Nov 8, 2025',
      station: 'Station #33',
      stationId: '4',
      location: '321 Pine St',
      energy: '30.2 kWh',
      cost: '$5.21',
      duration: '58 min',
      status: 'completed',
      startTime: '11:15 AM',
      endTime: '12:13 PM',
      startSoC: 38,
      endSoC: 88,
    }
  ];

  if (limit) {
    return allSessions.slice(0, limit);
  }

  return allSessions;
};

// Get active/ongoing session - replace with API call
export const getActiveSession = (userId?: string): ChargingSession | null => {
  // TODO: Replace with actual API call
  const sessions = getChargingSessions(userId);
  return sessions.find(s => s.status === 'ongoing') || null;
};

// Get session by ID - replace with API call
export const getSessionById = (sessionId: string): ChargingSession | null => {
  // TODO: Replace with actual API call
  const sessions = getChargingSessions();
  return sessions.find(s => s.id === sessionId) || null;
};
