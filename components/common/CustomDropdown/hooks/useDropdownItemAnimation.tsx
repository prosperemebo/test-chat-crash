import { useRef, useEffect } from 'react'
import { Animated } from 'react-native'

export const useDropdownItemAnimation = (index: number, isOpen: boolean) => {
  const translateY = useRef(new Animated.Value(-10)).current
  const translateX = useRef(new Animated.Value(-20)).current
  const opacity = useRef(new Animated.Value(0)).current

  const animate = (show: boolean) => {    
    const config = {
      duration: 300,
      useNativeDriver: true
    }

    if (!isOpen) {
      Animated.parallel([
        Animated.timing(translateX, {
          toValue: 0,
          delay: index * 50,
          ...config
        }),
        Animated.timing(opacity, {
          toValue: 1,
          delay: index * 50,
          ...config
        })
      ]).start()
    } else {
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: show ? 0 : -20,
          delay: show ? index * 50 : 0,
          ...config
        }),
        Animated.timing(opacity, {
          toValue: show ? 1 : 0,
          delay: show ? index * 50 : 0,
          ...config
        })
      ]).start()
    }
  }

  useEffect(() => {
    animate(isOpen)
  }, [isOpen])

  return {
    animatedStyle: {
      opacity,
      transform: isOpen ? [{ translateY }] : [{ translateX }]
    }
  }
}