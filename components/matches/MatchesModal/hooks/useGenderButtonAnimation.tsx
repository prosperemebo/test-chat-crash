import { useRef, useEffect } from 'react'
import { Animated } from 'react-native'

export const useGenderButtonAnimation = (active: boolean) => {
  const scale = useRef(new Animated.Value(1)).current
  const animation = useRef(new Animated.Value(active ? 1 : 0)).current

  useEffect(() => {
    Animated.parallel([
      Animated.sequence([
        Animated.spring(scale, {
          toValue: active ? 0.95 : 1,
          useNativeDriver: true,
          friction: 9,
          tension: 10,
        }),
        Animated.spring(scale, {
          toValue: 1,
          useNativeDriver: true,
          friction: 3,
          tension: 40,
        }),
      ]),
      Animated.timing(animation, {
        toValue: active ? 1 : 0,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start()
  }, [active])

  return {
    scale,
    animation,
  }
}