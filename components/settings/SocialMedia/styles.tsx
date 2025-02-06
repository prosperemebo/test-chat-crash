import styled from 'styled-components/native'
import { Image } from 'expo-image'

export const LinksContainerInner = styled.View`
  height: 80px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top: 30px;
  margin-bottom: 30px;
`

export const SocialMediaButton = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-horizontal: 15px;
  background-color: ${props => props.theme.settings.socialIconBackgroundColor};
  width: 45px;
  height: 45px;
  border-radius: 30px;
`

export const SocialMediaImage = styled(Image)`
  height: ${props => props.height}px;
  width: ${props => props.width}px;
  `