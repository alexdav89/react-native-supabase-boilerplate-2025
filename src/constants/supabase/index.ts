import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL!;
export const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY!;

// We add the third argument (the options object) below:
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  realtime: {
    // We pass the global WebSocket variable provided by React Native
    websocket: WebSocket,
  },
});
