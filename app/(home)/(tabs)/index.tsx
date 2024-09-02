import { View, Text } from 'react-native';
import React, {useState} from 'react';
import {ChannelList, Channel, MessageList, MessageInput} from 'stream-chat-expo';
import { router, Stack, Link } from 'expo-router';
import { useAuth } from '../../../providers/AuthProvider';
import AntDesign from '@expo/vector-icons/AntDesign';

const MainTabScreen = () => {
  const { user } = useAuth();

  return (
    <>
      <Stack.Screen
        options={{
          headerRight: () => (
            <Link href={'/(home)/users'} asChild>
              <AntDesign
                name="adduser"
                size={22}
                color="ray"
                style={{ marginHorizontal: 15 }}
              />
            </Link>
          ),
        }}
      />
      <ChannelList
        filters={{ members: { $in: [user.id] } }}
        onSelect={(channel) => router.push(`/channel/${channel.cid}`)}
      />
    </>
  );
};

export default MainTabScreen;
