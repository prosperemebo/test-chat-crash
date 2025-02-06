import { useState } from 'react'
import { useRouter } from 'expo-router'
import { Container, InputWrapper, ButtonWrapper } from './styles'
import { Input, Button } from '@/components/common'
import { ForgotPasswordButton, ForgotPasswordLabel } from '@/components/auth'
import i18n from '@/localization/i18n'
import { validateField } from './utils'
import { LoginEmailFormProps } from './types'


const LoginEmailForm = (props: LoginEmailFormProps) => {
  const { onLoginPress, loading = false } = props
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const goToResetPassword = () => {
    router.navigate('/auth/resetPassword')
  }

  const handleLoginPress = () => {
    onLoginPress(email, password)
  }

  return <Container>
    <InputWrapper>
      <Input type="email" value={email} placeholder={'email@gmail.com'} onChangeText={setEmail} error={emailError} iconName="envelope" />
    </InputWrapper>
    <Input type="password" value={password} placeholder={i18n.t('login:Password')} onChangeText={setPassword} error={passwordError} iconName="unlocked" />
    <ForgotPasswordButton onPress={goToResetPassword}>
      <ForgotPasswordLabel>{i18n.t('login:forgot_password')}</ForgotPasswordLabel>
    </ForgotPasswordButton>
    <ButtonWrapper>
      <Button type="login" withGradient title={i18n.t('common:continue')} loading={loading} onPress={handleLoginPress} disabled={loading} />
    </ButtonWrapper>
  </Container>
}

export default LoginEmailForm