import { View, Text } from 'react-native';
import { Stack, Slot, Redirect } from 'expo-router';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AuthProvider from '../providers/AuthProvider';
import { useAuth } from '../providers/AuthProvider';

const HomeLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AuthProvider>
        <Slot />
      </AuthProvider>
    </GestureHandlerRootView>
  );
};

export default HomeLayout;
