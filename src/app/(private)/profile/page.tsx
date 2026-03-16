import { Link, router } from 'expo-router';
import { Alert, Platform, StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import AuthContext from '@/contexts/auth';
import { supabase } from '@/lib/supabase';
import { webAlert } from '@/lib/utils/webAlert';
import { ActionButton } from '@/components/buttons';
import colors from '@/constants/theme/colors';

export default function Profile() {
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

  return (
    <View style={styles.container}>
      <Text>Profile page</Text>
      <Text>
        Hello, {user?.user_metadata?.name} {user?.user_metadata?.last_name}
      </Text>
      <Text>email: {user?.email}</Text>

      <Link href="/(public)/(auth)/signin/page" style={styles.link}>
        <Text style={styles.linkText}>Login</Text>
      </Link>

      <ActionButton onPress={handleSignout} text={t('buttons.signOut')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.palette.primary.softWhite,
    flex: 1,
    gap: 8,
    justifyContent: 'center',
  },
  link: {
    textDecorationLine: 'underline',
  },
  linkText: {
    alignItems: 'center',
    color: colors.palette.primary.serenityBlue,
    fontSize: 16,
    fontWeight: 'bold',
    justifyContent: 'center',
    textAlign: 'center',
  },
});
