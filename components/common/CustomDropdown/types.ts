import { Animated } from 'react-native'
import { DropdownItem as DropdownItemType } from './CustomDropdown'

export interface AnimatedIconProps {
  rotate: Animated.AnimatedInterpolation<string>
}

export interface DropdownItem {
  label: string
  value: string | null
}

export interface CustomDropdownProps {
  data: DropdownItem[]
  value?: string[] | string | null
  onChange: (value: string[] | string | null) => void
  placeholder: string
  multiSelect?: boolean
}

export interface DropdownItemProps {
  item: DropdownItemType
  isSelected: boolean
  index: number
  multiSelect?: boolean
  isOpen: boolean
}

export interface AnimatedTagRef {
  value: string
  animation: {
    translateX: Animated.Value
    opacity: Animated.Value
  }
}

export interface SelectedLabelProps {
  multiSelect: boolean
  data: DropdownItem[]
  value: string[] | string | null
  selectedLabels: string
  handleRemoveItem: (itemValue: string) => void
}

export type SelectedLabelsRef = {
  removeTagWithAnimation: (tagValue: string) => void
}

export interface DropdownPropsParams {
  data: DropdownItemType[]
  value: string[] | string | null
  placeholder: string
  multiSelect: boolean
  selectedLabels: string
  handleSelect: (item: DropdownItemType) => void
  handleRemoveItem: (itemValue: string) => void
  isItemSelected: (item: DropdownItemType) => boolean
  handleDropdownOpen: (opened: boolean) => void
  rotate: Animated.AnimatedInterpolation<string>
  isOpen: boolean
  closeModalWhenSelectedItem?: boolean
}