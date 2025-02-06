import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'
import { ActivityIndicator, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

type GradientButtonType = {
  disabled: boolean
  colors?: string[]
}

export const ButtonWrapper = styled.TouchableOpacity`
    alignItems: 'center';
    marginTop: 0;
`

export const GradientButton = styled(LinearGradient).attrs((props) => {
  // @ts-ignore
  if (props.disabled) {
    return {
      colors: [props.theme.common.buttonGradientGrayStart, props.theme.common.buttonGradientGrayEnd],
      start: { x: 0, y: 1 },
      end: { x: 1, y: 0 },
    }
  } else {
    return {
      colors: [props.theme.common.buttonGradientOrangeStart, props.theme.common.buttonGradientOrangeEnd],
      start: { x: 0, y: 1 },
      end: { x: 1, y: 0 },
    }
  }
})<GradientButtonType>`
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  margin-top: 10px;
  margin-bottom: 10px;
  flex-direction: row;
  height: 50px;
  width: ${width - 50}px;
`

export const Label = styled.Text`
    font-size: 14px;
    color: ${props => props.theme.common.labelColor};
    text-align: center;
    margin-right: 8px;
    font-family: 'Poppins-Bold';
`

export const Indicator = styled(ActivityIndicator).attrs((props) => {
  return {
    color: props.theme.postOnboarding.loadingIndicatorColor,
  }
})``