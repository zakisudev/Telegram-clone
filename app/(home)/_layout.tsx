import { View, Text } from 'react-native';
import React, {useEffect} from 'react';
import { Stack, Slot } from 'expo-router';
import { StreamChat } from 'stream-chat';
import { OverlayProvider, Chat } from 'stream-chat-expo';
import ChatProvider from '../../providers/ChatProvider';

const client = StreamChat.getInstance('ts8m6mjqhp4j')

const HomeLayout = () => {

  useEffect(()=> {
    const connect = async () => {
      await client.connectUser(
        {
          id: 'jlahey',
          name: 'Jim Lahey',
          image: 'https://i.imgur.com/fR9Jz14.png',
        },
        client.devToken('jlahey')
      );

      // const channel = client.channel('messaging', 'the_park', {
      //   name: "The Park"
      // })

      // await channel.watch();
    };

    connect()
  }, [])

  return (
    <OverlayProvider>
      <Chat client={client}>
        <ChatProvider>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false}}/>
          </Stack>
        </ChatProvider>
      </Chat>
    </OverlayProvider>
  );
};

export default HomeLayout;
