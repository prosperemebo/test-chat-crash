import React from 'react'
import { Stack } from 'expo-router'

const GamesRoot = () => {
  return <Stack>
    <Stack.Screen name="rated" options={{ headerShown: false }} />
    <Stack.Screen name="userGames" options={{ headerShown: false }} />
    <Stack.Screen name="gameProfile" options={{ headerShown: false }} />
  </Stack>
}

export default GamesRoot