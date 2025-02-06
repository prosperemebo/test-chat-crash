import styled from 'styled-components/native'
import { Image } from 'expo-image'

type BackdropType = {
  safeareaSize: number
}

export const Background = styled.View`
    flex: 1;
    background-color: ${props => props.theme.profile.backgroundColor};
`

export const BackdropCoverImage = styled(Image)<BackdropType>`
    position: absolute;
    top: 0;
    height: 230px;
    width: 100%;
`

export const UserProfileAppBar = styled.View<BackdropType>`
  width: 100%;
  height: 55px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  paddingHorizontal: 20px;
  margin-top: ${props => props.safeareaSize}px;
`

export const UserProfileAppBarActions = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 48px;
  height: 48px;
`

export const UserProfileActions = styled.View`
  paddingHorizontal: 20px;
`