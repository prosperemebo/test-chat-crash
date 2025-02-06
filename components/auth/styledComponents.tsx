import styled from 'styled-components/native'
import FontAwesome from '@expo/vector-icons/FontAwesome5'

export const ForgotPasswordButton = styled.TouchableOpacity`
  align-self: flex-end;
  margin-top: 10px;
`
export const ForgotPasswordLabel = styled.Text`
  color: ${(props) => props.theme.auth.forgotPasswordLabel};
  text-align: right;
  font-size: 12px;
  font-family: 'Poppins-Regular';
`

export const BackButton = styled.TouchableOpacity``

export const BackButtonIcon = styled(FontAwesome)`
    font-size: 20px;
    color: ${props => props.theme.common.backButtonColor};
    margin-right: 10px;
`

export const BackButtonWrapper = styled.View`
    margin-top: 10px;
    width: 100%;
`