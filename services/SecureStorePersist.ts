import * as SecureStore from 'expo-secure-store'

// Don't forget to reset values in config store on first app launch
export default {
  getItem: async (key: string) => {
    return SecureStore.getItemAsync(key)
  },
  removeItem: async (key: string) => {
    return SecureStore.deleteItemAsync(key)
  },
  setItem: async (key: string, value: string) => {
    return SecureStore.setItemAsync(key, value)
  },
}