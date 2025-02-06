import { ButtonWrapper, GradientButton, Label, Indicator } from './styles'
import { SubscribeButtonProps } from './types'

const SubscribeButton = ({ onPress, disabled, label, loading }: SubscribeButtonProps) => {
  const isDisabled = disabled || loading

  return <ButtonWrapper onPress={onPress} disabled={isDisabled}>
    <GradientButton disabled={isDisabled}>
      <Label>{label}</Label>
      {loading && <Indicator />}
    </GradientButton>
  </ButtonWrapper>
}

export default SubscribeButton