import { ActivityIndicator, SafeAreaView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Stack, Slot } from 'expo-router';
import { StreamChat } from 'stream-chat';
import { OverlayProvider, Chat } from 'stream-chat-expo';
import { useAuth } from './AuthProvider';
import { supabase } from '../lib/supabase';
import tokenProvider from '../utils/tokenProvider';

const client = StreamChat.getInstance(process.env.EXPO_PUBLIC_STREAM_API_KEY);

const ChatProvider = ({ children }) => {
  const [isReady, setIsReady] = useState(false);
  const { profile } = useAuth();

  useEffect(() => {
    if (!profile) return;

    const connect = async () => {
      await client.connectUser(
        {
          id: profile.id,
          name: profile.full_name,
          image: supabase.storage
            .from('avatars')
            .getPublicUrl(profile.avatar_url)?.data.publicUrl,
        },
        tokenProvider
      );

      setIsReady(true);
    };

    connect();

    return () => {
      if (isReady) {
        client.disconnectUser();
      }
      setIsReady(false);
    };
  }, [profile?.id]);

  if (!isReady) {
    return (
      <SafeAreaView
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      >
        <ActivityIndicator style={{ width: 100, height: 100 }} />
      </SafeAreaView>
    );
  }

  return (
    <OverlayProvider>
      <Chat client={client}>{children}</Chat>
    </OverlayProvider>
  );
};

export default ChatProvider;
