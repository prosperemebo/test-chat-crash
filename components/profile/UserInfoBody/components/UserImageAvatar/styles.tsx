import styled from 'styled-components/native'
import { Image } from 'expo-image'
import { nORANGE10, nORANGE40 } from '@/theme/color'
import { LinearGradient } from 'expo-linear-gradient'
import { TooltipText } from '@/styles/typography'

interface ShowProgressProps {
  showProgress: boolean
}

export const UserProfileHeaderAvatarProgress = styled.TouchableOpacity<ShowProgressProps>`
  background-color: ${props => (props.showProgress ? props.theme.primaryBg : props.theme.common.buttonGradientGrayStart)};
  border-radius: 125px;
  width: 130px;
  height: 130px;
  margin-top: 40px;
`

export const UserProfileHeaderAvatarImageWrapper = styled.View<ShowProgressProps>`
  position: absolute;
  border-radius: 125px;
  width: 100%;
  height: 100%;
  padding: ${({ showProgress }) => (showProgress ? '6px' : '1px')};
  overflow: hidden;
`

export const UserProfileHeaderAvatarImage = styled(Image)`
  width: 100%;
  height: 100%;
  margin-bottom: 15px;
  border-radius: 125px;
`

export const ProfileProgressWrapper = styled.View`
  position: absolute;
  bottom: -5%;
  left: 0;
  right: 0;
  align-items: center;
  justify-content: center;
`

export const ProfileProgress = styled(LinearGradient).attrs({
  colors: [nORANGE10, nORANGE40],
  start: { x: 0, y: 0.5 },
  end: { x: 1, y: 0.5 },
})`
  padding: 3px 10px;
  border-radius: 10px;
  align-items: center;
`

export const ProfileProgressText = styled(TooltipText)`
  font-weight: 600;
  color: ${props => props.theme.primaryTextColor};
  text-transform: uppercase;
`

export const ProfileEditButtonWrapper = styled.View`
  position: absolute;
  right: -5%;
  background-color: ${props => props.theme.primaryBg};
  border-radius: 30px;
  width: 35px;
  height: 35px;
`

export const ProfileBadgeWrapper = styled.View`
  position: absolute;
  bottom: 0;
  right: -5%;
  background-color: ${props => props.theme.common.buttonGradientGrayStart};
  border-radius: 30px;
  border-color: ${props => props.theme.primaryBg};
  border-width: 1px;
`
