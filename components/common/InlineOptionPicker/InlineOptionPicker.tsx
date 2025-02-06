import { ButtonIcon, ButtonLabel, Container, DisabledButton, ItemButton, SelectedButton } from './styles'
import { InlineOptionPickerProps, ItemProps } from './types'

const InlineOptionPicker = ({ options, onOptionPress }: InlineOptionPickerProps) => {
  const SelectedItem = ({ itemIcon, itemName }: ItemProps) => (
    // @ts-ignore
    <SelectedButton>
      <ButtonIcon isSelected={true} name={itemIcon as 'text'} />
      <ButtonLabel isSelected={true}>{itemName}</ButtonLabel>
    </SelectedButton>
  )
  const DisabledItem = ({ itemIcon, itemName }: ItemProps) => (
    <DisabledButton>
      <ButtonIcon name={itemIcon as 'text'} />
      <ButtonLabel>{itemName}</ButtonLabel>
    </DisabledButton>
  )
  return (
    <Container>
      {options.map((option) => (
        <ItemButton key={option.key || option.label} onPress={() => onOptionPress(option)} disabled={option.disabled}>
          {(option.selected && <SelectedItem itemIcon={option.icon} itemName={option.label} />) || (
            <DisabledItem itemIcon={option.icon} itemName={option.label} />
          )}
        </ItemButton>
      ))}
    </Container>
  )
}

export default InlineOptionPicker