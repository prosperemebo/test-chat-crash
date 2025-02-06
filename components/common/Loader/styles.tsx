import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
import { Image } from 'expo-image'

const { width } = Dimensions.get('screen')

type ImageContainer = {
  safeAreaBottom: number
}

export const ImageContainer = styled.View<ImageContainer>`
  flex: 1;
  background-color: ${(props) => props.theme.primaryBg};
  padding-bottom: ${(props) => props.safeAreaBottom}px;
  justify-content: center;
  align-items: center;
`

export const DruidImage = styled(Image)`
  width: ${width - 50}px;
  height: ${width - 50}px;
`