export interface InlineOptionPickerProps {
  options: OptionProps[]
  onOptionPress: (value: OptionProps) => void
}

interface OptionProps {
  icon: string
  selected?: boolean
  disabled?: boolean
  label: string
  key: string
}

export interface ButtonIconProps {
  isSelected?: boolean
}

export interface ItemProps {
  itemIcon: string
  itemName: string
}