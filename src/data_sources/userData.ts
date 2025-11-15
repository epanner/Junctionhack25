/**
 * User Data Source
 * Contains all user profile and account related data
 * TODO: Replace with API calls when backend is ready
 */

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  memberSince: string;
  totalSessions: number;
  totalEnergyCharged: number; // in kWh
  didVerified: boolean;
  walletConnected: boolean;
}

export interface UserStatistics {
  totalSessions: number;
  totalEnergyCharged: number; // in kWh
  totalSpent: number; // in dollars
  averageMonthlyUsage: number; // in kWh
}

// Mock user data - replace with API call
export const getUserProfile = (): UserProfile => {
  return {
    id: 'user_001',
    name: 'John Driver',
    email: 'john.driver@email.com',
    memberSince: 'Jan 2024',
    totalSessions: 47,
    totalEnergyCharged: 1240,
    didVerified: true,
    walletConnected: true,
  };
};

// Mock user statistics - replace with API call
export const getUserStatistics = (): UserStatistics => {
  return {
    totalSessions: 47,
    totalEnergyCharged: 1240,
    totalSpent: 218,
    averageMonthlyUsage: 155,
  };
};
