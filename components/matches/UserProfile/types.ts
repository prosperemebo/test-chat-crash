import { UserMatch } from '@/types'

export interface Game {
  id: string
  title: string
  imageUrl: string
}

export interface Platform {
  id: string
  name: 'PC' | 'PlayStation' | 'Xbox' | 'Nintendo' | 'Mobile'
}

export interface UserProfileProps extends UserMatch {
  onSkip: (userId: string) => void
  onConnect: (userId: string) => void
}