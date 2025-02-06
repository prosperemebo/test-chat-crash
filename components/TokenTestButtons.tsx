import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { inject } from 'mobx-react'
import compose from 'lodash/flowRight'
import { Store } from '@/types'


// Nothing from this component should be extracted, 
// as this is a test component that will inevitably be removed. 
// Therefore, everything should be kept in one place.

interface TokenTestButtonsProps {
  isAuthorized?: boolean
  removeAccessToken?: () => void
  removeRefreshToken?: () => void
}

const TokenTestButtons = ({ isAuthorized, removeAccessToken, removeRefreshToken }: TokenTestButtonsProps) => {
  if (!isAuthorized) {
    return null
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={removeAccessToken}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Expire Access Token</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={removeRefreshToken}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Expire Refresh Token</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 8,
  },
  button: {
    backgroundColor: '#2E2E2E',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
})

export default compose(
  inject((store: Store) => ({
    isAuthorized: store.AuthStore.isAuthorized,
    removeAccessToken: store.AuthStore.removeAccessToken,
    removeRefreshToken: store.AuthStore.removeRefreshToken,
  })),
)(TokenTestButtons)