import React from 'react'
import { AnimatedItemContainer, ItemLabel, CheckIcon } from './styles'
import { useDropdownItemAnimation } from './hooks/useDropdownItemAnimation'
import { DropdownItemProps } from './types'

export const DropdownItem = ({ item, isSelected, index, multiSelect, isOpen }: DropdownItemProps) => {
  const { animatedStyle } = useDropdownItemAnimation(index, isOpen)

  return (
    <AnimatedItemContainer style={animatedStyle}>
      <ItemLabel isSelected={isSelected}>
        {item.label}
      </ItemLabel>
      {isSelected && <CheckIcon name="checkmark" />}
    </AnimatedItemContainer>
  )
}