import { StyleSheet } from 'react-native'
import styled from 'styled-components/native'

type StyledButtonType = {
    isNewDesign: boolean;
}

export const StyledButton = styled.TouchableOpacity<StyledButtonType>`
    width: ${props => (props.isNewDesign ? '60px' : '55px')};
    height: ${props => (props.isNewDesign ? '60px' : '55px')};
    justify-content: center;
    align-items: center;
    background-color: ${(props) => (props.isNewDesign ? props.theme.secondaryBg : props.theme.auth.socialLoginButton)};
    border-radius: 28px;
    border-width: ${props => (props.isNewDesign ? `${StyleSheet.hairlineWidth}px` : '0px')};
    border-color: ${(props) => props.theme.common.inputBorderColor};
`