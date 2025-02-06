import React, { useEffect } from 'react'
import { Animated, Easing } from 'react-native'
import { LoaderContainer, LoaderCircle } from './styles'
import { useTheme } from 'styled-components/native'

const CustomLoader = () => {
  const theme = useTheme()
  const rotateAnimation = new Animated.Value(0)

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateAnimation, {
        toValue: 1,
        duration: 1500,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start()
  }, [])

  const spin = rotateAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  })

  return (
    <LoaderContainer>
      <LoaderCircle
        style={{
          transform: [{ rotate: spin }],
          borderColor: `${theme.common.gradientButtonColorStart}33`,
          borderTopColor: theme.common.gradientButtonColorStart
        }}
      />
    </LoaderContainer>
  )
}

export default CustomLoader