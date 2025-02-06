import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'

type ButtonBackgroundType = {
  colors?: [string, string]
}

export const SubscriptionDetailContainer = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-horizontal: 15px;
  flex-direction: column;
`

export const LabelText = styled.Text`
  text-align: center;
  color: ${props => props.theme.primaryTextColor};
  line-height: 27px;
  font-size: 18px;
  font-family: 'Poppins-Bold';
`

export const LabelSecondText = styled.Text`
  font-family: 'Poppins-Light';
  text-align: center;
  margin-left: 4px;
  color: ${props => props.theme.primaryTextColor};
  line-height: 17px;
  font-size: 12px;
  opacity: 0.8;
  letter-spacing: 0;
`

export const UnlockBenefitsContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 250px;
`

export const UnlockBenefitsButton = styled.TouchableOpacity`
  border-radius: 50px;
  border: 1px;
  border-color: ${props => props.theme.secondaryBgLight};
  background-color: ${props => props.theme.secondaryBgLight};
  gap: 1px;
  width: 130px;
  height: 40px;
  margin: 10px;
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 10px;
  padding-left: 20px;
`

export const UnlockBenefitsButtonText = styled.Text`
  color: ${props => props.theme.primaryTextColor};
  font-family: 'Poppins-Bold';
  font-size: 12px;
  line-height: 18px;
  text-align: center;
`

export const ButtonBackground = styled(LinearGradient).attrs((props) => ({
  colors: [props.theme.common.gradientButtonColorStart, props.theme.common.gradientButtonColorEnd],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 0 },
}))<ButtonBackgroundType>`
  border-radius: 8px;
  background-color: transparent;
  width: 350px;
  overflow: hidden;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`

export const StateLayer = styled.View`
  flex-direction: row;
  padding-top: 10px;
  padding-bottom: 10px;
`