import { LinearGradient } from 'expo-linear-gradient'
import Ionicons from '@expo/vector-icons/Ionicons';
import styled from 'styled-components/native'
import { ButtonIconProps } from './types'

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const ItemButton = styled.TouchableOpacity`
  height: 115px;
  flex: 1;
  border-radius: 8px;
  text-align: center;
  justify-content: center;
  border: 1px solid #54575e;
  margin-right: 5px;
`

export const DisabledButton = styled.View`
  background-color: ${props => props.theme.secondaryBgLight};
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`

export const SelectedButton = styled(LinearGradient).attrs(props => {
  return {
    colors: [`${props.theme.common.gradientButtonColorEnd}`, `${props.theme.common.gradientButtonColorStart}`],
    start: { x: 0, y: 1 },
    end: { x: 1, y: 0 },
  }
})`
  height: 115px;
  width: 115px;
  flex: 1;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`

export const ButtonIcon = styled(Ionicons) <ButtonIconProps>`
  color: ${(props) => (props.isSelected ? props.theme.primaryTextColor : props.theme.common.genderPickerTextColor)};
  font-size: 38px;
`

export const ButtonLabel = styled.Text<ButtonIconProps>`
  font-weight: 400;
  font-family: 'Poppins-Regular';
  font-size: 14px;
  color: ${(props) => (props.isSelected ? props.theme.primaryTextColor : props.theme.common.genderPickerTextColor)};
  padding-top: 10px;
`
