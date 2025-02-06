import { Banner, MatchFilters } from '@/types'

export interface MatchesModalProps {
  onClose: () => void
  setAgeRangeFilter: (value: [number, number]) => void
  setLanguagesFilter: (value: string[]) => void
  setGamesFilter: (value: Banner[]) => void
  setGenderFilter: (value: string) => void
  matchFilters: MatchFilters
  userGender: string | undefined
  updateFilters: () => void
  resetFilters: () => void
}

export interface GamesSelectorProps {
  isVisible: boolean
  onClose: () => void
  selectedGames: Banner[]
  onGamesChange: (game: Banner[]) => void
  isGamesRequestRunning?: boolean
  onboardingGames?: any[]
  getInitialOnboardingGames?: () => Promise<void>
  loadMoreOnboardingGames?: () => void
  searchGames?: (query: string) => Promise<void>
  setSelectedGames?: (games: Banner[]) => Promise<void>
}