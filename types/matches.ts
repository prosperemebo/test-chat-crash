import { Banner, CommonGame } from './game'
import { GenderType, LanguagesType, Location, PlatformEnumType } from './user'

export interface MatchFilters {
  ageRange: number[]
  languages: string[]
  games: Banner[]
  gender: string
}

export interface UserMatch {
  username: string
  avatar: string
  age: number
  birthday: string
  userId: string
  favoriteGames: CommonGame[]
  platforms: PlatformEnumType[]
  gender: GenderType
  languages: LanguagesType[]
  coverImg: string
  location: Location
  commonPlatforms?: PlatformEnumType[]
  aboutMe?: string
  commonGames?: CommonGame[]
  currentTime?: string
}

export interface MatchesDTO {
  isUwU: boolean
  number: number
  pageSize: number
}

export interface MatchSkipResponse {
  message: string,
  data: {
    success: true
  }
}

export interface FiltersDTO {
  matchAges: number[]
  languages: string[]
  gameMatchFilter: string
  gameTitleMatchFilter: string
  genderMatchFilter: string
}