import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Redirect } from 'expo-router';

export default function App() {
  return <Redirect href={"/(home)/(tabs)"} />;
}
