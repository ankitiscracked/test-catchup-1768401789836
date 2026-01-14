// User preferences module
export interface UserPreferences {
  theme: 'light' | 'dark' | 'system';
  notifications: boolean;
  emailDigest: 'daily' | 'weekly' | 'never';
}

export const defaultPreferences: UserPreferences = {
  theme: 'system',
  notifications: true,
  emailDigest: 'weekly',
};
