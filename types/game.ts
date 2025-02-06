export type Banner = {
  _id: string
  title: string
  url: string
}

export type CommonGame = {
  id: string
  title: string
  imageUrl: string
}

export type Game = {
  _id: string
  platforms: string[]
  title: string
  url: string
  weburl: string
}

export type GamesForOnboardingResult = Banner[]

export interface GamesForOnboardingParams {
  skip?: number
  limit?: number
  search?: string
}

export interface SearchGamesParams {
  query: string
  exact?: boolean
  field?: string
}

export type GamesForOnboardingResponse = {
  games: Banner[],
  pageInfo: { hasNextPage: boolean }
}