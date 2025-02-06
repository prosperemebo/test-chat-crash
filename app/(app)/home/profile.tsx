import React from 'react'
import { useRouter } from 'expo-router'
import { Button, Text, View } from 'react-native'

const Profile = () => {
  const router = useRouter()

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>User Profile</Text>
      <Button onPress={() => router.push('/settings')} title='Go to Settings' />
    </View>
  )
}

export default Profile
