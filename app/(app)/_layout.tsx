import React from 'react'
import { Stack } from 'expo-router'

const AppLayout = () => {

  return <Stack screenOptions={{ headerShown: false }}>
    <Stack.Screen name="home" options={{ headerShown: false }} />
    <Stack.Screen name="settings" options={{ headerShown: false }} />
    <Stack.Screen name="games" options={{ headerShown: false }} />
  </Stack>
}

export default AppLayout