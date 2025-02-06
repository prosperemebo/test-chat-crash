import i18n from '@/localization/i18n'
import { Gender, GenderType } from '@/types'
import { Container, ItemButton, SelectedButton, DisabledButton, ButtonLabel, ButtonIcon } from './styles'
import { GenderPickerProps, OptionProps } from './types'


const GenderPicker = (props: GenderPickerProps) => {
  const { selectedGender, onChange } = props

  const OPTIONS: OptionProps[] = [
    { key: Gender.Male, label: i18n.t('onb:male'), icon: 'male' },
    { key: Gender.Female, label: i18n.t('onb:female'), icon: 'female' },
    { key: Gender.Other, label: i18n.t('onb:other'), icon: 'male-female' },
  ]

  const isSelected = (value: GenderType) => {
    return selectedGender === value
  }

  const renderItem = (option: OptionProps) => {
    if (isSelected(option.key)) {
      // @ts-ignore
      return <SelectedButton>
        <ButtonIcon isSelected={true} name={option.icon} />
        <ButtonLabel isSelected={true}>{option.label}</ButtonLabel>
      </SelectedButton>
    }

    return <DisabledButton>
      <ButtonIcon name={option.icon} isSelected={false} />
      <ButtonLabel isSelected={false}>{option.label}</ButtonLabel>
    </DisabledButton>
  }

  const handleChange = (value: GenderType) => () => {
    onChange(value)
  }

  return <Container>
    {OPTIONS.map((option) => (
      <ItemButton onPress={handleChange(option.key)} key={option.key}>
        {renderItem(option)}
      </ItemButton>
    ))}
  </Container>
}

export default GenderPicker