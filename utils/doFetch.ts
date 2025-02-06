import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import config from '@/config'
import { AuthService } from '@/services/api'
import { PUBLIC_ENDPOINTS } from '@/utils/constants'

const axiosInstance = axios.create({
  baseURL: config.SERVER_API_URL,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
})


let isRefreshing = false
let failedQueue: any[] = []

const processQueue = (error: any = null) => {
  failedQueue.forEach(prom => {
    if (error) {
      prom.reject(error)
    } else {
      prom.resolve()
    }
  })
  failedQueue = []
}

// Функция для обновления токенов
const refreshTokens = async () => {

}

export const doFetch = async <Type>(
  url: string, 
  options: AxiosRequestConfig,
): Promise<AxiosResponse<Type>> => {
  const optionsWithAuth = {
    headers: {
      ...options.headers,
    },
    ...options,
  }

  const isPublicEndpoint = PUBLIC_ENDPOINTS.some(endpoint => url.includes(endpoint))

  if (!isPublicEndpoint) {
    if (!AuthStore.accessToken) {
      
      if (!isRefreshing) {
        isRefreshing = true
        try {
          const newAccessToken = await refreshTokens()
          optionsWithAuth.headers.authorization = `Bearer ${newAccessToken}`
          isRefreshing = false
          processQueue()
        } catch (error) {
          isRefreshing = false
          processQueue(error)
          throw error
        }
      } else {
        
        await new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject })
        })
      }
    } else {
      optionsWithAuth.headers.authorization = `Bearer ${AuthStore.accessToken}`
    }
  }

  try {
    return await axiosInstance<Type>(url, optionsWithAuth)
  } catch (error: any) {
    if (error.response?.status === 401 && !isPublicEndpoint) {
      AuthStore.removeAccessToken() 
      return doFetch<Type>(url, options)
    }

    if (error.response?.data?.message === 'noValidToken') {
      await AuthStore.logout()
    }

    throw error
  }
}

export const doCustomFetch = async (uri: string, options: AxiosRequestConfig) => {
  try {
    const response = await axios(uri, options)
    if (response.status === 200 || response.status === 201) {
      return response.data
    }

    const error = {
      message: response.statusText,
      response: response,
    }

    return Promise.reject(error)
  } catch (error) {
    return Promise.reject(error)
  }
}