import ChatProvider from '../../providers/ChatProvider';
import { Stack, Redirect } from 'expo-router';
import React from 'react';
import { useAuth } from '../../providers/AuthProvider';

const HomeLayout = () => {
  const { user } = useAuth();

  if (!user) return <Redirect href={'/(auth)/Auth'} />;

  return (
    <ChatProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </ChatProvider>
  );
};

export default HomeLayout;
