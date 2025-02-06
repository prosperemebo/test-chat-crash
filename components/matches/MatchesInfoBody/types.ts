import { User, UserMatch } from '@/types'

export interface MatchesInfoBodyProps {
  handleModalOpen: () => void
  getMatches: () => void
  matches: UserMatch[]
  isRequestRunning: boolean
  user: User
  resetMatchFilters: () => void
  skipMatch: (userId: string) => void
}

export interface GrayButtonProps {
  buttonWidth: number
  height: number
}