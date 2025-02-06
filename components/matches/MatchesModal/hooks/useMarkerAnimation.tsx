import { useRef, useState } from 'react'
import { Animated } from 'react-native'
import * as Haptics from 'expo-haptics'

export const useMarkerAnimation = () => {
  const [isDragging, setIsDragging] = useState(false)
  const markerScale = useRef(new Animated.Value(1)).current

  const handleMarkerPress = () => {
    setIsDragging(true)
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
    
    Animated.spring(markerScale, {
      toValue: 2.5,
      useNativeDriver: true,
      friction: 7,
    }).start()
  }

  const handleMarkerRelease = () => {
    setIsDragging(false)
    
    Animated.spring(markerScale, {
      toValue: 1,
      useNativeDriver: true,
      friction: 7,
    }).start()
  }

  return {
    isDragging,
    markerScale,
    handleMarkerPress,
    handleMarkerRelease,
  }
}