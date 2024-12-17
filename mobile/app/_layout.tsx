import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AppLayout() {
  return (
    <SafeAreaView style={styles.layout}>
      <Slot />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1
  }
});
