import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
import { Image } from 'expo-image'

const { width } = Dimensions.get('window')

type BarProps = {
  progress: number
}

export const Container = styled.View`
    margin-horizontal: 15px;
    margin-vertical: 5px;
    padding-horizontal: 5px;
`

export const Progress = styled.View`
  width: ${width * 0.9}px;
  height: 40px;
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`

export const IconContainer = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`

export const Icon = styled(Image)`
    height: 20px;
    width: 20px;
    resize-mode: contain;
`

export const ProgressLabel = styled.Text`
  font-family: 'Poppins-Bold';
  font-size: 17px;
  padding-left: 30px;
  color: ${(props) => props.theme.onboarding.headerTextColor};
`

export const LabelContainer = styled.View``

export const Label = styled.Text`
  font-style: normal;
  font-family: 'Poppins-Regular';
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: ${props => props.theme.onboarding.headerStepsTextColor};
`

export const Bar = styled.View`
  width: 100%;
  height: 5px;
  border-radius: 5px;
  background-color: ${props => props.theme.onboarding.progressBarBackgroundColor};
`
export const BarInner = styled.View<BarProps>`
  height: 100%;
  border-radius: 5px;
  width: ${(props) => (props.progress ? width * (props.progress / 100) * 0.9 : width * 0.9)}px;
  background-color: ${props => props.theme.onboarding.progressBarColor};
`