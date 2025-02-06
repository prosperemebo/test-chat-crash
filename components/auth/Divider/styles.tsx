import styled from 'styled-components/native'

export const StyleDivider = styled.View`
    flex-direction: row;
    margin-top: 35px;
    margin-bottom: 35px;
    width: 100%;
`

export const DividerItem = styled.View`
    flex: 1;
    align-items: center;
    border-bottom-color: ${(props) => props.theme.auth.dividerColor};
    border-bottom-width: 0.5px;
    margin-vertical: 5px;
    margin-horizontal: 5px;
`

export const DividerText = styled.Text`
    color: ${(props) => props.theme.auth.dividerColor};
    font-size: 12px;
    font-family: 'Poppins-Regular';
`