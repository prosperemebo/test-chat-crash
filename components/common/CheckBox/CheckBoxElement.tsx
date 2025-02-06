import { CheckBoxBlock, Icon } from './styles'
import { CheckBoxElementProps } from './types'

const CheckBoxElement = (props: CheckBoxElementProps) => {
  const { value } = props

  const renderIcon = () => {
    if (value) return <Icon name='checkbox-marked' />

    return <Icon name='checkbox-blank-outline' />
  }

  return <CheckBoxBlock>{renderIcon()}</CheckBoxBlock>
}

export default CheckBoxElement