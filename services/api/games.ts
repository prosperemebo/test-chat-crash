import 'react-native-url-polyfill/auto'
import {
  Banner, Game, GamesForOnboardingParams, GamesForOnboardingResponse,
  GamesForOnboardingResult, SearchGamesParams,
} from '@/types'
import { doFetch } from '@/utils/doFetch'
import AuthStore from '@/store/AuthStore'

export default class GamesService {
  static async getGamesForOnboarding(params?: GamesForOnboardingParams): Promise<GamesForOnboardingResult> {
    try {
      const queryParams = new URLSearchParams()

      if (params?.skip) {
        queryParams.append('skip', params.skip.toString())
      }

      if (params?.limit) {
        queryParams.append('limit', params.limit.toString())
      }

      const url = `/games/onboarding-games${queryParams.toString() ? `?${queryParams.toString()}` : ''}`

      const { data } = await doFetch<GamesForOnboardingResponse>(url, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${AuthStore.accessToken}`,
        },
      })

      return data.games

    } catch (error) {
      console.error(error)
      return []
    }
  }

  static async searchGames(params: SearchGamesParams | string): Promise<Banner[]> {
    try {
      const queryParams = new URLSearchParams()

      if (typeof params === 'string') {
        queryParams.append('q', params)
      } else {
        queryParams.append('q', params.query)
        if (params.exact !== undefined) {
          queryParams.append('exact', params.exact.toString())
        }
        if (params.field) {
          queryParams.append('field', params.field)
        }
      }

      const url = `/games/search?${queryParams.toString()}`

      const { data } = await doFetch<GamesForOnboardingResponse>(url, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${AuthStore.accessToken}`,
        },
      })

      return data.games
    } catch (error) {
      return []
    }
  }

  static async getUserGames(): Promise<Game[]> {
    try {
      const url = '/games/user-games'

      const { data } = await doFetch<Game[]>(url, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${AuthStore.accessToken}`,
        },
      })

      return data
    } catch (error) {
      console.error(error)
      return []
    }
  }
}