import { router } from 'expo-router';
import { Alert, Platform } from 'react-native';
import { useTranslation } from 'react-i18next';

import AuthContext from '@/contexts/auth';
import { supabase } from '@/lib/supabase';
import { webAlert } from '@/lib/utils/webAlert';
import { ActionButton } from '@/components/buttons';

export default function SignOutButton() {
  const { t } = useTranslation();
  const { user, setAuth } = AuthContext.useAuth();

  async function handleSignout() {
    const { error } = await supabase.auth.signOut();

    if (error) {
      if (Platform.OS === 'web') {
        webAlert(`Error logging out: ${error.message}`);
      } else {
        Alert.alert('Error logging out:', error.message);
      }
      return;
    }

    setAuth(null);
    router.replace('/(public)/(auth)/signin/page');
  }

  return <ActionButton onPress={handleSignout} text={t('buttons.signOut')} />;
}
