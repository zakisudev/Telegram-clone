import { View, Text, ActivityIndicator } from 'react-native'
import React, {useState, useEffect} from 'react'
import { Channel, MessageList, MessageInput, useChatContext, ChannelList } from 'stream-chat-expo';
import {useLocalSearchParams} from 'expo-router';

const ChannelScreen = () => {
  const [channel, setChannel] = useState(null);
  const {cid} = useLocalSearchParams();
  const {client} = useChatContext();

  useEffect(()=> {
    const fetchChannel = async () => {
      const channels = await client.queryChannels({cid});

      setChannel(channels[0]);
    }

    fetchChannel();
  },[cid]);

  if (!channel) {
    <ActivityIndicator />
  };

  return (
    channel ? (
      <Channel channel={channel}>
        <MessageList />
        <MessageInput />
      </Channel>
    ) : <ChannelList onSelect={setChannel} />
  )
}

export default ChannelScreen