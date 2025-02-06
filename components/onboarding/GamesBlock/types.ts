import { Banner } from '@/types'

export interface GameCardProps {
  isSelected: boolean
  url?: string
  title: string
  value: string
  onPress: (value: Banner) => void
}

export interface GamesBlockProps {
  isLoading: boolean
  onboardingGames: Banner[]
  selectedGames: Banner[]
  onChange: (value: Banner) => void
  searchQuery: string
  onLoadMore?: () => void
  testID: string
}

export type SelectionOverlayType = {
  selected: boolean
}