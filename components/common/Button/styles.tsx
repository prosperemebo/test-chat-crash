import styled, { css } from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'

type GradientButtonType = {
  disabled?: boolean
  colors?: string[]
}

type ButtonType = {
  type: 'primary' | 'login' | 'dark' | 'yellow' | 'cancel' | 'empty'
}

//TODO style by type
export const StyledButton = styled.TouchableOpacity<ButtonType>`
    overflow: hidden;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    margin-bottom: 15px;
    height: 50px;
    
    ${props => props.type === 'dark' && css`
        background-color: ${props => props.theme.common.buttonGradientGrayStart};
    `}
    
    ${props => props.type === 'empty' && css`
        border-color: ${props => props.theme.common.inputBorderColor};
        border-width: 1px;
    `}
`

export const StyledButtonText = styled.Text`
  font-size: 14px;
  color: ${props => props.theme.common.inputTextColor};
  text-align: center;
  font-family: 'Poppins-Bold';
`

export const GradientButton = styled(LinearGradient).attrs((props) => {
  // @ts-ignore
  if (props.disabled) {
    return {
      colors: [props.theme.common.buttonGradientGrayStart, props.theme.common.buttonGradientGrayEnd],
      start: { x: 0, y: 1 },
      end: { x: 1, y: 0 },
    }
  } else
    return {
      colors: [props.theme.common.buttonGradientOrangeStart, props.theme.common.buttonGradientOrangeEnd],
      start: { x: 0, y: 1 },
      end: { x: 1, y: 0 },
    }
})<GradientButtonType>`
  height: 100%;
  width: 100%;
  align-content: center;
  justify-content: center;
`

export const LoadingContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const LoadingText = styled.Text`
  font-family: 'Poppins-Bold';
  font-size: 13px;
  margin-right: 5px;
  color: ${props => props.theme.common.inputTextColor};
`

export const Indicator = styled.ActivityIndicator`
  align-self: center;
`