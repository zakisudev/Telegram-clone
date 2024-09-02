import { createContext, useEffect, useState, useContext } from 'react';
import { Session } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';

type AuthProps = {
  session: Session | null;
  user: Session['user'] | null;
  profile: any;
};

const AuthContext = createContext<AuthProps>({
  session: null,
  user: null,
  profile: null,
});

const AuthProvider = ({ children }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  useEffect(() => {
    if (!session?.user) {
      setProfile(null);
      return;
    }

    const fetchProfile = async () => {
      let { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', session.user.id)
        .single()
        .then(({ data }) => {
          setProfile(data);
        });

      if (error) {
        console.error('Error fetching profile:', error.message);
      }

      setProfile(data);
    };

    fetchProfile();
  }, [session?.user]);

  return (
    <AuthContext.Provider value={{ session, user: session?.user, profile }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
