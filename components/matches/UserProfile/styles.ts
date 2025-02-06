import styled from 'styled-components/native'
import { TouchableOpacity, ImageBackground, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

export const Container = styled.View`
  flex: 1;
`

export const ScrollContainer = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})``

export const Header = styled(ImageBackground)`
  width: ${width}px;
  height: 200px;
  position: relative;
`

export const Content = styled.View`
  margin-top: -60px;
  background-color: ${({ theme }) => theme.secondaryBg};
  border-radius: 16px 16px 0 0;
  align-items: center;
  padding: 0 16px 32px 16px;
`

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin-top: -50px;
`

export const UserInfo = styled.View`
  align-items: center;
  margin-top: 12px;
`

export const Username = styled.Text`
  color: ${({ theme }) => theme.primaryTextColor};
  font-size: 24px;
  font-weight: bold;
`

export const Location = styled.Text`
  color: ${({ theme }) => theme.common.infoTextColor};
  font-size: 16px;
  opacity: 0.7;
  margin-top: 4px;
`

export const UserDetails = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
  gap: 12px;
  flex-wrap: wrap;
`

export const DetailItem = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => `${theme.secondaryBgLight}B3`};
  padding: 6px 12px;
  border-radius: 20px;
`

export const DetailText = styled.Text`
  color: ${({ theme }) => theme.primaryTextColor};
  font-size: 14px;
  font-weight: 600;
  margin-left: 6px;
  text-transform: uppercase;
`

export const IconContainer = styled.View`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.common.accentColor};
  align-items: center;
  justify-content: center;
`

export const Description = styled.Text`
  color: ${({ theme }) => theme.primaryTextColor};
  font-size: 16px;
  text-align: center;
  margin-top: 8px;
`

export const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin: 20px 0;
`

export const Button = styled(TouchableOpacity) <{ isSkip?: boolean }>`
  background-color: ${({ theme, isSkip }) => {
    if (isSkip) {
      return theme.secondaryBgLight
    }
    return theme.common.buttonGradientOrangeStart
  }};
  padding: 12px;
  border-radius: 24px;
  flex: 1;
  margin: 0 8px;
  align-items: center;
`

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.primaryTextColor};
  font-size: 16px;
  font-weight: bold;
`

export const FlagContainer = styled.View`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  overflow: hidden;
`

export const GamingSection = styled.View`
  width: 100%;
  margin-top: 20px;
`

export const SectionTitle = styled.Text`
  color: ${({ theme }) => theme.primaryTextColor};
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 12px;
  align-self: flex-start;
`

export const GamesRow = styled.View`
  width: calc(100% + 16px);
  margin: 0 -16px;
`

export const GameCard = styled.View`
  width: ${width * 0.7}px;
  margin-right: 16px;
  border-radius: 8px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.common.backgroundSecondary};
`

export const GameImage = styled.Image`
  width: 100%;
  height: 160px;
`

export const GameTitle = styled.Text`
  color: ${({ theme }) => theme.primaryTextColor};
  font-size: 14px;
  font-weight: 600;
  padding: 8px;
`

export const PlatformsContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
`

export const PlatformIcon = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  tint-color: ${({ theme }) => theme.primaryTextColor};
`