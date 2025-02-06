import { StyledButton, StyledButtonText, GradientButton, LoadingContainer, LoadingText, Indicator } from './styles'
import i18n from '@/localization/i18n'
import { ButtonProps } from './types'


export const Button = (props: ButtonProps) => {
  const {
    title,
    onPress,
    disabled = false,
    withGradient = false,
    type, //TODO styling + make more clear how to use
    loading = false
  } = props


  const renderContent = () => {
    if (loading) {
      return <LoadingContainer>
        <LoadingText>{i18n.t('login:please_wait')}</LoadingText>
        <Indicator size='small' color='#fff' />
      </LoadingContainer>
    }

    return <StyledButtonText>
      {title}
    </StyledButtonText>
  }

  if (withGradient) {
    return <StyledButton type={'yellow'} onPress={onPress} disabled={disabled}>
      <GradientButton disabled={disabled}>
        {renderContent()}
      </GradientButton>
    </StyledButton>
  }

  return <StyledButton type={type} onPress={onPress} disabled={disabled}>
    {renderContent()}
  </StyledButton>
}