import { doFetch } from '@/utils/doFetch'
import AuthStore from '@/store/AuthStore'
import * as FileSystem from 'expo-file-system'

interface GetPresignedURLResponse {
  preSignedUrl: string
}

interface UploadImageResponse {
  status: number
  url: string
}

export default class UtilsService {
  static async getPresignedURL(filename: string): Promise<GetPresignedURLResponse> {
    const url = '/user/generate-presigned-url'
    try {
      const { data } = await doFetch<GetPresignedURLResponse>(url, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${AuthStore.accessToken}`,
        },
        data: {
          fileName: filename,
        },
      })
      return data
    } catch (error) {
      console.error('UtilsService getPresignedURL:', error)
      return { preSignedUrl: '' }
    }
  }

  static async uploadImage(uploadUrl: string, localImagePath: string): Promise<UploadImageResponse> {
    try {
      const fileContent = await FileSystem.readAsStringAsync(localImagePath, {
        encoding: FileSystem.EncodingType.Base64,
      })

      const binaryData = Uint8Array.from(atob(fileContent), char => char.charCodeAt(0))

      const response = await fetch(uploadUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'image/jpeg',
        },
        body: binaryData,
      })

      if (response.status === 200) {
        return {
          status: response.status,
          url: uploadUrl,
        }
      } else {
        const errorBody = await response.text()
        console.error('Error Response:', errorBody)
        throw new Error(`Failed to upload image, status code: ${response.status}`)
      }
    } catch (error) {
      console.error('Error:', error)
      throw error
    }
  }
}