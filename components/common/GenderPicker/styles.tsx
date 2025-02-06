import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'
import Icon from '@expo/vector-icons/Ionicons'

type ButtonType = {
  isSelected: boolean
}

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
  border: 1px solid ${props => props.theme.common.genderPickerBorderColor};
  margin-right: 5px;
`

export const SelectedButton = styled(LinearGradient).attrs((props) => {
  return {
    colors: [props.theme.common.buttonGradientOrangeStart, props.theme.common.buttonGradientOrangeEnd],
    start: { x: 0, y: 1 },
    end: { x: 1, y: 0 },
  }
})`
  height: 115px;
  flex: 1;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`

export const DisabledButton = styled.View`
  background-color: ${props => props.theme.secondaryBgLight};
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`

export const ButtonIcon = styled(Icon)<ButtonType>`
  color: ${(props) => props.isSelected ? props.theme.common.genderPickerActiveTextColor : props.theme.common.genderPickerTextColor};
  font-size: 38px;
`
export const ButtonLabel = styled.Text<ButtonType>`
  font-weight: 400;
  font-family: 'Poppins-Regular';
  font-size: 14px;
  color: ${(props) => props.isSelected ? props.theme.common.genderPickerActiveTextColor : props.theme.common.genderPickerTextColor};
  padding-top: 10px;
`