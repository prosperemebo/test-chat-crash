import React, { memo, useCallback, useState, useRef, useEffect } from 'react'
import { Dropdown } from 'react-native-element-dropdown'
import { StyledDropdown } from './styles'
import { dropdownProps } from './utils/dropdownProps'
import { useDropdownAnimation } from './hooks/useDropdownAnimation'
import { CustomDropdownProps, DropdownItem } from './types'

const CustomDropdown = memo(({
  data,
  multiSelect = true,
  value = multiSelect ? [] : null,
  onChange,
  placeholder
}: CustomDropdownProps) => {
  const { rotate, animate } = useDropdownAnimation()
  const [isOpen, setIsOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout>()

  const handleDropdownOpen = useCallback((opened: boolean) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    if (opened) {
      setIsClosing(false)
      setIsOpen(true)
      animate(true)
    } else {
      setIsClosing(true)
      animate(false)
      timeoutRef.current = setTimeout(() => {
        setIsOpen(false)
        setIsClosing(false)
      }, 300)
    }
  }, [animate])

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const handleSelect = useCallback((item: DropdownItem) => {
    if (multiSelect) {
      const currentValue = (value || []) as string[]
      const isSelected = currentValue.includes(item.value!)
      onChange(isSelected
        ? currentValue.filter(v => v !== item.value)
        : [...currentValue, item.value!].filter(Boolean)
      )
    } else {
      onChange(item.value)
    }
  }, [multiSelect, value, onChange])

  const handleRemoveItem = useCallback((itemValue: string) => {
    const currentValue = (value || []) as string[]
    onChange(currentValue.filter(v => v !== itemValue))
  }, [value, onChange])

  const isItemSelected = useCallback((item: DropdownItem) =>
    multiSelect
      ? (value || [])?.includes(item.value!)
      : item.value === value
    , [multiSelect, value])

  const getSelectedLabels = (
    multiSelect: boolean,
    value: string[] | string | null,
    data: DropdownItem[]
  ): string => {
    if (multiSelect) {
      if (!Array.isArray(value) || value.length === 0) {
        return ''
      }
      return data
        .filter(item => value.includes(item.value!))
        .map(item => item.label)
        .join(', ')
    }

    if (value === null) {
      return ''
    }

    return data.find(item => item.value === value)?.label || ''
  }

  const selectedLabels = getSelectedLabels(multiSelect, value, data)

  const dropdownValue = multiSelect
    ? (value || []) as string[]
    : value as string

  const props = dropdownProps({
    data,
    value: dropdownValue,
    placeholder,
    multiSelect,
    selectedLabels,
    handleSelect,
    handleRemoveItem,
    isItemSelected,
    handleDropdownOpen,
    rotate,
    isOpen: isClosing ? false : isOpen,
    closeModalWhenSelectedItem: false
  })

  return (
    <StyledDropdown>
      <Dropdown {...props} />
    </StyledDropdown>
  )
})

export default CustomDropdown