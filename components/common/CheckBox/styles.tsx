import styled from 'styled-components/native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export const CheckBoxWrapper = styled.View`
    margin-right: 10px;
`

export const CheckBoxBlock = styled.View`
    width: 20px;
    height: 20px;
`

export const Label = styled.Text`
    color: ${props => props.theme.common.checkboxTextColor};
`

export const CheckBoxPressable = styled.Pressable`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    font-family: 'Poppins-Regular';
    padding: 20px;
`

export const Icon = styled(MaterialCommunityIcons)`
    color: ${props => props.theme.common.checkboxIconColor};
    font-size: 20px;
`