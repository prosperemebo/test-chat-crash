import { useState } from 'react'
import { useTheme } from 'styled-components/native'
import i18n from '@/localization/i18n'
import { BirthdayTextInput, ItemLabel, BirthdayButton, DateInputContainer } from './styles'
import { InfoText } from '@/components/common'
import { BIRTHDAY_FORMAT } from '@/constants/general'
import { BirthdayInputProps } from './types'
import { convertToDate, formatBirthday, formatDate } from './helpers'

const BirthdayInput = (props: BirthdayInputProps) => {
  const { value, onChange, error } = props
  const theme = useTheme()

  const [isEditing, setIsEditing] = useState(false)
  const [inputValue, setInputValue] = useState(value ? formatDate(value as Date) : '')

  const handleTextChange = (text: string) => {
    setInputValue(text)
  }

  const handleEndEditing = () => {
    const formattedDate = convertToDate(inputValue as string)
    onChange(formattedDate as any)
    setIsEditing(false)
  }

  const startEditMode = () => {
    setIsEditing(true)
  }

  if (isEditing) {
    return (
      <>
        <DateInputContainer>
          <BirthdayTextInput
            type="datetime"
            placeholder={BIRTHDAY_FORMAT}
            placeholderTextColor={theme.common.inputPlaceholderColor}
            autoFocus={true}
            options={{
              format: 'MM/DD/YYYY',
            }}
            value={inputValue}
            onChangeText={handleTextChange}
            onEndEditing={handleEndEditing}
            keyboardType="numeric"
          />
        </DateInputContainer>
        <InfoText color={theme.common.inputTextError}>{error}</InfoText>
      </>
    )
  }

  const formatedBirthday = value ? formatBirthday(value as string) : ''

  return (
    <BirthdayButton onPress={startEditMode}>
      <ItemLabel>{value ? formatedBirthday : i18n.t('onb:birthday')}</ItemLabel>
    </BirthdayButton>
  )
}

export default BirthdayInput
