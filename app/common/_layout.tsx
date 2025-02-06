import React from 'react'
import { Stack } from 'expo-router'

const CommonRoot = () => {
  return <Stack screenOptions={{ headerShown: false }}>
    <Stack.Screen name="updateApp" options={{ headerShown: false }} />
    <Stack.Screen name="verifyEmail" options={{ headerShown: false }} />
    <Stack.Screen name="locationPermission" options={{ headerShown: false }} />
  </Stack>
}

export default CommonRoot