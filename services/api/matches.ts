import { FiltersDTO, MatchSkipResponse, MatchesDTO, UserMatch } from '@/types'
import { doFetch } from '@/utils/doFetch'

export default class MatchesService {
  static async getMatches(matches: MatchesDTO): Promise<UserMatch[]> {
    const url = '/matching/matches'
    const options = {
      method: 'POST',
      data: matches,
    }

    const { data } = await doFetch<{ data: UserMatch[] }>(url, options)
    if (!data.data) return []

    return data.data
  }

  static async skipMatch(data: { userId: string }): Promise<{ success: boolean }> {
    const url = '/matching/skip-match'
    const options = {
      method: 'POST',
      data: data,
    }

    const result = await doFetch<MatchSkipResponse>(url, options)
    const success = result.status === 200

    return { success }
  }

  static async updateFilters(data: Partial<FiltersDTO>, isReset?: boolean): Promise<{ success: boolean }> {
    const url = `/matching/update-filters${isReset ? '?reset=true' : ''}`
    const options = {
      method: 'POST',
      data: data,
    }

    const result = await doFetch<{ success: boolean }>(url, options)
    const success = result.status === 200

    return { success }
  }
}