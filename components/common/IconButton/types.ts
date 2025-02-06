import { ImageSourcePropType } from 'react-native'

export interface IconButtonProps {
  color?: string
  iconColor?: string
  onPress?: () => void
  disabled?: boolean
  blur?: boolean
  name?: string
  type?: 'material' | 'image'
  size?: number
  padding?: number
  source?: ImageSourcePropType
  actionNeeded?: boolean
}