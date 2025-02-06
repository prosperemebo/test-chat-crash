import { SocialLoginIcon } from './SocialLoginIcon'
import { StyledButton } from './styles'
import { SocialLoginButtonProps } from './types'

export const SocialLoginButton = (props: SocialLoginButtonProps) => {
  const { disabled = false, onPress, name, isNewDesign = false } = props

  return <StyledButton isNewDesign={isNewDesign} onPress={onPress} disabled={disabled}>
    <SocialLoginIcon name={name} />
  </StyledButton>
}