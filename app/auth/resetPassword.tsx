import React from 'react'
import { useRouter } from 'expo-router'
import { Button, Text, View } from 'react-native'

const ResetPassword = () => {
  const router = useRouter()

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Reset Password</Text>
      <Button onPress={() => router.back()} title="Go Back" />
    </View>
  )
}

export default ResetPassword
