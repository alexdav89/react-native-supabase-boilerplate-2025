import { Platform } from 'react-native';

/**
 * Displays an error message on web platforms
 * @param message The error message to display
 */
export const webAlert = (message: string) => {
  if (Platform.OS === 'web') {
    // Use browser's native alert for web
    alert(message);
  }
};
