import { ImageSourcePropType } from 'react-native'

export interface SettingsItemButtonProps {
    onPress: () => void
    icon?: ImageSourcePropType
    value?: string
    title: string
}