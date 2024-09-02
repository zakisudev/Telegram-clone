import { View, Text } from 'react-native';
import React, {useState} from 'react';
import {ChannelList, Channel, MessageList, MessageInput} from 'stream-chat-expo';
import { router } from 'expo-router';

const MainTabScreen = () => {
  return (
      <ChannelList onSelect={(channel)=> router.push(`/channel/${channel.cid}`)}/>
  );
};

export default MainTabScreen;
