import { CheckBoxWrapper, Label, CheckBoxPressable } from './styles'
import CheckBoxElement from './CheckBoxElement'
import { CheckBoxProps } from './types'

//TODO improve UI and styling
const CheckBox = (props: CheckBoxProps) => {
  const { title, value, onChange } = props

  const handleChange = () => {
    onChange(!value)
  }

  return <CheckBoxPressable onPress={handleChange}>
    <CheckBoxWrapper>
      <CheckBoxElement value={value} />
    </CheckBoxWrapper>
    <Label>{title}</Label>
  </CheckBoxPressable>
}

export default CheckBox