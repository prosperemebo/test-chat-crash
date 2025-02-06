import { Animated } from 'react-native'

export interface CustomMarkerProps {
    markerScale: Animated.Value
    isDragging: boolean
}

export interface GenderButtonProps {
    option: string
    active: boolean
    onPress: () => void
} 