import { Stack, Redirect } from 'expo-router';
import { useAuth } from '../../providers/AuthProvider';

const AuthLayout = () => {
  const { user } = useAuth();

  if (user) return <Redirect href={'/(home)/(tabs)'} />;

  return <Stack />;
};

export default AuthLayout;
