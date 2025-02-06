import {
  Wrapper, ScrollContainer, Content,
  FormWrapper, HeaderIcon, InputWrapper,
} from './styles'
import {
  GenderPicker, BirthdayInput, CheckBox, SectionWrapper,
  SectionHeader, HeaderPrefix, InfoText, HeaderHeading, Input,
} from '@/components/common'
import i18n from '@/localization/i18n'
import { PersonalBlockProps } from './types'


const PersonalBlock = (props: PersonalBlockProps) => {
  const {
    genderValue, onGenderChange,
    birthdayValue, onBirthdayChange, birthdayValidationError,
    ageVerified, onAgeVerifiedChange,
    usernameValue, onUsernameChange,
  } = props

  const hasEnteredBirthday = !!birthdayValue

  const is13YearsOld = (date: string): boolean => {
    const birthDate = new Date(date)
    const currentDate = new Date()

    const age = currentDate.getFullYear() - birthDate.getFullYear()

    const isBeforeBirthdayThisYear =
      currentDate.getMonth() < birthDate.getMonth() ||
      (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())

    const adjustedAge = isBeforeBirthdayThisYear ? age - 1 : age
    return adjustedAge >= 13
  }

  const handleUsernameChange = (text: string) => {
    onUsernameChange(text)
  }

  const handleUsernameChangeEnd = () => {
    onUsernameChange(usernameValue.trim().replace(/\s\s+/g, ' '))
  }

  return <Wrapper>
    <ScrollContainer>
      <FormWrapper>
        <SectionWrapper>
          <SectionHeader>
            <HeaderPrefix>
              <HeaderIcon name='user' />
              <HeaderHeading>{i18n.t('onb:username')}</HeaderHeading>
            </HeaderPrefix>
          </SectionHeader>
          <InputWrapper>
            <Input
              type='username'
              value={usernameValue}
              placeholder={i18n.t('onb:username')}
              onChangeText={handleUsernameChange}
              onEndEditing={handleUsernameChangeEnd}
            />
          </InputWrapper>
          <InfoText>{i18n.t('onb:usernameExplanation')}</InfoText>
        </SectionWrapper>
        <SectionWrapper>
          <SectionHeader>
            <HeaderPrefix>
              <HeaderIcon name='child' />
              <HeaderHeading>{i18n.t('onb:gender')}</HeaderHeading>
            </HeaderPrefix>
          </SectionHeader>
          <Content>
            <GenderPicker onChange={onGenderChange} selectedGender={genderValue} />
          </Content>
        </SectionWrapper>
        <SectionWrapper marginBottom={birthdayValue ? '10px' : '30px'}>
          <SectionHeader>
            <HeaderPrefix>
              <HeaderIcon name='calendar-check' />
              <HeaderHeading>{i18n.t('profile:dateOfBirth')}</HeaderHeading>
            </HeaderPrefix>
          </SectionHeader>
          <Content>
            <BirthdayInput value={birthdayValue} onChange={onBirthdayChange} error={birthdayValidationError} />
          </Content>
        </SectionWrapper>
        <SectionWrapper>
          <InfoText>{i18n.t('onb:ageInfo')}</InfoText>
        </SectionWrapper>
      </FormWrapper>
      {
        hasEnteredBirthday && is13YearsOld(birthdayValue) && (
          <CheckBox
            value={ageVerified}
            onChange={onAgeVerifiedChange}
            title={i18n.t('onb:ageConfirmation13')}
          />
        )
      }
    </ScrollContainer>
  </Wrapper>
}

export default PersonalBlock