import { Switch } from 'react-native'
import { Container, InnerWrapper, InfoText, ActivityLoader, ActionsContainer } from './styles'
import { SwitchInputProps } from './types'

const SwitchInput = (props: SwitchInputProps) => {
  const {
    label,
    value,
    onValueChange,
    disabled = false,
    isLoading = false,
    type
  } = props

  const handleChange = () => {
    onValueChange(!value)
  }

  return <Container>
    <InnerWrapper onPress={handleChange} disabled={disabled}>
      <InfoText type={type}>
        {label}
      </InfoText>
      <ActionsContainer>
        {isLoading && <ActivityLoader />}
        <Switch onValueChange={onValueChange} value={value} disabled={disabled} />
      </ActionsContainer>
    </InnerWrapper>
  </Container>
}

export default SwitchInput