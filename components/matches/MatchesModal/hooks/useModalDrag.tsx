import { useRef } from 'react'
import { PanResponder, Animated } from 'react-native'

export const useModalDrag = (onClose: () => void, DRAG_THRESHOLD: number) => {
  const pan = useRef(new Animated.ValueXY()).current

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: (_, gestureState) => gestureState.y0 < 100,
    onMoveShouldSetPanResponder: (_, gestureState) => 
      gestureState.dy > 0 && gestureState.y0 < 100,
    onPanResponderMove: (_, gestureState) => {
      if (gestureState.dy > 0) {
        pan.y.setValue(gestureState.dy)
      }
    },
    onPanResponderRelease: (_, gestureState) => {
      if (gestureState.dy > DRAG_THRESHOLD) {
        Animated.timing(pan.y, {
          toValue: 600,
          duration: 200,
          useNativeDriver: true,
        }).start(onClose)
      } else {
        Animated.spring(pan.y, {
          toValue: 0,
          useNativeDriver: true,
        }).start()
      }
    },
  })

  return { pan, panResponder }
}