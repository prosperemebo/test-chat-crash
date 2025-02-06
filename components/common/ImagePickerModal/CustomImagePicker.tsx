import * as ImagePicker from 'expo-image-picker'
import * as ImageManipulator from 'expo-image-manipulator'
import { AVATAR_HEIGHT, AVATAR_WIDTH, COVER_HEIGHT, COVER_WIDTH } from './constants'
import { File, Callback } from './types'

const CustomImagePicker = {
  pickSingleWithCamera: async (callback: Callback) => {
    try {
      const permission = await ImagePicker.requestCameraPermissionsAsync()
      if (!permission.granted) {
        console.error('Camera permission not granted')
        return
      }

      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [AVATAR_WIDTH, AVATAR_HEIGHT],
        quality: 1,
      })

      if (!result.canceled) {
        const manipulatedImage = await ImageManipulator.manipulateAsync(
          result.assets[0].uri,
          [{ resize: { width: AVATAR_WIDTH, height: AVATAR_HEIGHT } }],
          { compress: 1, format: ImageManipulator.SaveFormat.JPEG },
        )

        const file: File = {
          uri: manipulatedImage.uri,
          name: 'img.jpg',
          type: 'image/jpeg',
        }
        callback(file)
      }
    } catch (e) {
      console.error('Error picking image with camera:', e)
    }
  },

  pickSingleImage: async (callback: Callback) => {
    try {
      const permission = await ImagePicker.requestMediaLibraryPermissionsAsync()
      if (!permission.granted) {
        console.error('Gallery permission not granted')
        return
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [AVATAR_WIDTH, AVATAR_HEIGHT],
        quality: 1,
      })

      if (!result.canceled) {
        const manipulatedImage = await ImageManipulator.manipulateAsync(
          result.assets[0].uri,
          [{ resize: { width: AVATAR_WIDTH, height: AVATAR_HEIGHT } }],
          { compress: 1, format: ImageManipulator.SaveFormat.JPEG },
        )

        const file: File = {
          uri: manipulatedImage.uri,
          name: 'img.jpg',
          type: 'image/jpeg',
        }
        callback(file)
      }
    } catch (e) {
      console.error('Error picking image from gallery:', e)
    }
  },

  pickCoverImageWithCamera: async (callback: Callback) => {
    try {
      const permission = await ImagePicker.requestCameraPermissionsAsync()
      if (!permission.granted) {
        console.error('Camera permission not granted')
        return
      }

      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [COVER_WIDTH, COVER_HEIGHT],
        quality: 1,
      })

      if (!result.canceled) {
        const manipulatedImage = await ImageManipulator.manipulateAsync(
          result.assets[0].uri,
          [{ resize: { width: COVER_WIDTH, height: COVER_HEIGHT } }],
          { compress: 1, format: ImageManipulator.SaveFormat.JPEG },
        )

        const file: File = {
          uri: manipulatedImage.uri,
          name: 'cover.jpg',
          type: 'image/jpeg',
        }
        callback(file)
      }
    } catch (e) {
      console.error('Error picking cover image with camera:', e)
    }
  },

  pickCoverImage: async (callback: Callback) => {
    try {
      const permission = await ImagePicker.requestMediaLibraryPermissionsAsync()
      if (!permission.granted) {
        console.error('Gallery permission not granted')
        return
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [COVER_WIDTH, COVER_HEIGHT],
        quality: 1,
      })

      if (!result.canceled) {
        const manipulatedImage = await ImageManipulator.manipulateAsync(
          result.assets[0].uri,
          [{ resize: { width: COVER_WIDTH, height: COVER_HEIGHT } }],
          { compress: 1, format: ImageManipulator.SaveFormat.JPEG },
        )

        const file: File = {
          uri: manipulatedImage.uri,
          name: 'cover.jpg',
          type: 'image/jpeg',
        }
        callback(file)
      }
    } catch (e) {
      console.error('Error picking cover image from gallery:', e)
    }
  },
}

export default CustomImagePicker
