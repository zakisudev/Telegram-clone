import { View, Text, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Stack, Slot } from 'expo-router';
import { StreamChat } from 'stream-chat';
import { OverlayProvider, Chat } from 'stream-chat-expo';

const client = StreamChat.getInstance(process.env.EXPO_PUBLIC_STREAM_API_KEY);

const ChatProvider = ({ children }) => {
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    const connect = async () => {
      await client.connectUser(
        {
          id: 'jlahey',
          name: 'Jim Lahey',
          image: 'https://i.imgur.com/fR9Jz14.png',
        },
        client.devToken('jlahey')
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
  }, []);

  if (!isReady) return <ActivityIndicator />;

  return (
    <OverlayProvider>
      <Chat client={client}>{children}</Chat>
    </OverlayProvider>
  );
};

export default ChatProvider;
