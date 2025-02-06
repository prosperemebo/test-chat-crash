import { Platform } from 'react-native'
import * as Application from 'expo-application'

export const getUniqueId = async () => (Platform.OS === 'ios' ? await Application.getIosIdForVendorAsync() : Application.getAndroidId())