import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://ywponercrgofsjzlshzk.supabase.co';
export const supabaseAnonKey = 'sb_publishable_kp73MvR_3xS_53V5pAmCAQ_0qiWk6Xh';

// We add the third argument (the options object) below:
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  realtime: {
    // We pass the global WebSocket variable provided by React Native
    websocket: WebSocket,
  },
});
