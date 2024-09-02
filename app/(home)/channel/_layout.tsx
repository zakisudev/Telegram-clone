import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router';

const ChannelLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="[cid]" options={{headerShown:false}} />
    </Stack>
  )
}

export default ChannelLayout