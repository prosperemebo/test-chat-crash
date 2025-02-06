import styled from 'styled-components/native'

export const FormWrapper = styled.View`
    width: 100%;
    margin-top: 40px;
`

export const InputsWrapper = styled.View`
    margin-bottom: 20px;
`

export const Title = styled.Text`
    color: ${props => props.theme.auth.forgotPasswordLabel};
    font-weight: 400;
    font-size: 13px;
    text-align: center;
    font-family: 'Poppins-Regular';
    margin-bottom: 10px;
`