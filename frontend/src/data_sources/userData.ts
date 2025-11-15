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

import { apiGet } from './apiClient';

const PROFILE_ENDPOINT = '/api/users/profile';
const STATISTICS_ENDPOINT = '/api/users/statistics';

export const getUserProfile = async (): Promise<UserProfile> => {
  return apiGet<UserProfile>(PROFILE_ENDPOINT);
};

export const getUserStatistics = async (): Promise<UserStatistics> => {
  return apiGet<UserStatistics>(STATISTICS_ENDPOINT);
};
