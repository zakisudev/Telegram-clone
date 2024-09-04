import { supabase } from '../lib/supabase';

const tokenProvider = async () => {
  const { data } = await supabase.functions.invoke('stream-token-new');

  if (data?.error) {
    throw new Error(data.error);
  }

  return data.token;
};

export default tokenProvider;