import { View, Text } from 'react-native';
import { Stack, Slot } from 'expo-router';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


const _layout = () => {
  return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Slot />
      </GestureHandlerRootView>
  );
};

export default _layout;
