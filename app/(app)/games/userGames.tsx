import React from 'react'
import { useRouter } from 'expo-router'
import { Button, Text, View } from 'react-native'

const UserGames = () => {
  const router = useRouter()

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>User Games</Text>
      <Button onPress={() => router.back()} title="Go Back" />
    </View>
  )
}

export default UserGames
