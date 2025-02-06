import { User } from '@/types'
import { onlineStatusIcons } from './constants'

export interface UserImageAvatarProps {
  user: User
  disabled: boolean
  showProgress: boolean
  showBadge: boolean
  showEdit: boolean
}

export type OnlineStatusIconKey = keyof typeof onlineStatusIcons;