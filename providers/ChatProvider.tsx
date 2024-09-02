import { View, Text, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Stack, Slot } from 'expo-router';
import { StreamChat } from 'stream-chat';
import { OverlayProvider, Chat } from 'stream-chat-expo';
import { useAuth } from './AuthProvider';

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
          image: 'https://i.imgur.com/fR9Jz14.png',
        },
        client.devToken(profile.id)
      );

      setIsReady(true);

      // const channel = client.channel('messaging', 'the_park', {
      //   name: "The Park"
      // })

      // await channel.watch();
    };

    connect();

    return () => {
      client.disconnectUser();
      setIsReady();
    };
  }, [profile?.id]);

  if (!isReady) return <ActivityIndicator />;

  return (
    <OverlayProvider>
      <Chat client={client}>{children}</Chat>
    </OverlayProvider>
  );
};

export default ChatProvider;
