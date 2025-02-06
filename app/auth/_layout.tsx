import React from 'react'
import { Stack } from 'expo-router'

const AuthRoot = () => {
  return <Stack screenOptions={{ headerShown: false }}>
    <Stack.Screen name="signIn" options={{ headerShown: false }}/>
    <Stack.Screen name="resetPassword" options={{ headerShown: false }}/>
  </Stack>
}

export default AuthRoot