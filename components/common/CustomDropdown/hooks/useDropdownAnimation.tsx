import { useRef } from 'react'
import { Animated } from 'react-native'

export const useDropdownAnimation = () => {
  const rotateAnim = useRef(new Animated.Value(0)).current

  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg']
  })

  const animate = (opened: boolean) => {
    Animated.spring(rotateAnim, {
      toValue: opened ? 1 : 0,
      useNativeDriver: true,
      friction: 8,
      tension: 40
    }).start()
  }

  return { rotate, animate }
} 