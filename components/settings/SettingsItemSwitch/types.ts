import { ImageSourcePropType } from 'react-native'

export interface SettingsItemSwitchProps {
    title: string
    value: boolean
    canChange: boolean
    onChange: (value: boolean) => void
    icon: ImageSourcePropType
}