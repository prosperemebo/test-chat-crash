import styled from 'styled-components/native'
import { Animated } from 'react-native'

export const LoaderContainer = styled.View`
  justify-content: center;
  align-items: center;
`

export const LoaderCircle = styled(Animated.View)`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border-width: 3px;
`