import { ImageSourcePropType } from 'react-native'

export interface ServiceItemProps {
    title: string
    onPress: () => void
    icon: ImageSourcePropType
    innerHeight: number
}