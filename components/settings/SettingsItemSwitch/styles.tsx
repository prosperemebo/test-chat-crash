import styled from 'styled-components/native'
import { Image } from 'expo-image'

export const Container = styled.View`
  border-radius: 8px;
`

export const InnerWrapper = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  height: 50px;
  justify-content: space-between;
  width: 100%;
  background-color: ${props => props.theme.primaryBg};
`

export const InnerTextWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`

export const Label = styled.Text`
  color: ${props => props.theme.primaryTextColor};
  font-family: 'Poppins-Bold';
  font-size: 15px;
  margin-left: 20px;
  text-align: left;
`

export const Icon = styled(Image)`
  left: 25%;
`

export const OnlyForPremiumView = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.settings.premiumFeatureTextColor};
  border-radius: 8px;
  padding: 3px;
  padding-left: 8px;
  padding-right: 8px;
  margin-left: 2%;
`

export const OnlyForPremiumText = styled.Text`
  color: ${props => props.theme.primaryTextColor};
  font-family: 'Poppins-Bold';
  font-size: 9px;
  margin-left: 5px;
`

export const OnlyForPremiumImage = styled(Image)`
`