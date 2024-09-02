import { View, Text } from 'react-native';
import React, {useState} from 'react';
import {ChannelList, Channel, MessageList, MessageInput} from 'stream-chat-expo';
import { router } from 'expo-router';
import { useAuth } from '../../../providers/AuthProvider';

const MainTabScreen = () => {
  const { user } = useAuth();

  return (
    <ChannelList
      filters={{ members: { $in: [user.id] } }}
      onSelect={(channel) => router.push(`/channel/${channel.cid}`)}
    />
  );
};

export default MainTabScreen;
