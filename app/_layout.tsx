import { View, Text, Platform, PermissionsAndroid } from 'react-native';
import { Stack, Slot, Redirect } from 'expo-router';
import React, { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AuthProvider from '../providers/AuthProvider';
import { useAuth } from '../providers/AuthProvider';

const HomeLayout = () => {
  useEffect(() => {
    const run = async () => {
      if (Platform.OS === 'android') {
        await PermissionsAndroid.requestMultiple([
          'android.permission.POST_NOTIFICATION',
          'android.permission.CAMERA',
          'android.permission.BLUETOOTH_CONNECT',
        ]);
      }
    };

    run();
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AuthProvider>
        <Slot />
      </AuthProvider>
    </GestureHandlerRootView>
  );
};

export default HomeLayout;
