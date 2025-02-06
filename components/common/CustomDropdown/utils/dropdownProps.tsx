import { DimensionValue } from 'react-native'
import { DropdownItem as DropdownItemType } from '../CustomDropdown'
import { DropdownItem as DropdownItemComponent } from '../DropdownItem'
import { SelectedLabels } from '../SelectedLabels'
import AnimatedIcon from '../AnimatedIcon'
import { useDropdownStyles } from '../hooks/useDropdownStyles'
import { DropdownPropsParams } from '../types'


export const dropdownProps = ({
  data,
  value,
  placeholder,
  multiSelect,
  selectedLabels,
  handleSelect,
  handleRemoveItem,
  isItemSelected,
  handleDropdownOpen,
  rotate,
  isOpen,
  closeModalWhenSelectedItem
}: DropdownPropsParams) => {
  const styles = useDropdownStyles()

  return {
    data,
    labelField: "label" as keyof DropdownItemType,
    valueField: "value" as keyof DropdownItemType,
    placeholder: multiSelect
      ? ((value || []).length > 0 ? '' : placeholder)
      : (value !== null ? '' : placeholder),
    onChange: handleSelect,
    height: multiSelect
      ? ((value || []).length > 0 ? 0 : 'auto') as DimensionValue
      : (value !== null ? 0 : 'auto') as DimensionValue,
    opacity: multiSelect
      ? ((value || []).length > 0 ? 0 : 1)
      : (value !== null ? 0 : 1),
    placeholderStyle: styles.placeholderStyle,
    selectedTextStyle: styles.selectedTextStyle,
    containerStyle: styles.containerStyle,
    itemContainerStyle: styles.itemContainerStyle,
    dropdownPosition: 'bottom' as const,
    activeColor: '#1F2025',
    selectedStyle: styles.selectedStyle,
    closeModalWhenSelectedItem: closeModalWhenSelectedItem ?? true,
    renderLeftIcon: () => selectedLabels ? (
      <SelectedLabels
        multiSelect={multiSelect}
        data={data}
        value={value}
        selectedLabels={selectedLabels}
        handleRemoveItem={handleRemoveItem}
      />
    ) : null,
    renderItem: (item: DropdownItemType) => (
      <DropdownItemComponent
        item={item}
        isSelected={isItemSelected(item)}
        multiSelect={multiSelect}
        index={data.findIndex(i => i.value === item.value)}
        isOpen={isOpen}
      />
    ),
    renderRightIcon: () => (
      <AnimatedIcon rotate={rotate} />
    ),
    onFocus: () => handleDropdownOpen(true),
    onBlur: () => {
      setTimeout(() => {
        handleDropdownOpen(false)
      }, 100)
    }
  }
} 