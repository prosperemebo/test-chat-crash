import { FormWrapper, Title, InputsWrapper } from './styles'
import i18n from '@/localization/i18n'
import { Button, Input } from '@/components/common'
import { useState } from 'react'
import AlertService from '@/services/Alert'
import { regex } from '@/utils/validation'
import { RestorePasswordFormProps } from './types'


const RestorePasswordForm = (props: RestorePasswordFormProps) => {
  const { mode, onSetPasswordPress, onResetPasswordPress, loading } = props

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  const buttonTitle = mode === 'reset' ? i18n.t('login:send') : i18n.t('login:restore')

  const isFieldNotValid = (field: string) => {
    let error = null
    switch (field) {
      case 'email':
        if (email.length < 1) error = i18n.t('errors:emptyEmailError')
        else if (!regex.email.test(email)) error = i18n.t('errors:invalidEmailError')
        break
      case 'password':
        if (password.length < 1) error = i18n.t('errors:emptyPasswordError')
        break
      case 'passwordConfirm':
        if (passwordConfirm.length < 1) error = i18n.t('errors:emptyPasswordError')
        if (passwordConfirm !== password) error = i18n.t('errors:passwordsMatchError')
        break
    }
    if (error) AlertService.showInfo(error)
    return error
  }

  const handleButtonPress = () => {
    if (mode === 'reset') {
      if (!!isFieldNotValid('email')) return
      onResetPasswordPress(email)
      return
    }

    if (!!isFieldNotValid('password')) return
    if (!!isFieldNotValid('passwordConfirm')) return

    onSetPasswordPress(password)
  }

  const renderContent = () => {
    if (mode === 'reset') {
      return <InputsWrapper>
        <Input type={'email'} value={email} placeholder={i18n.t('common:email')} onChangeText={setEmail} iconName={'envelope'} />
      </InputsWrapper>
    }

    return <InputsWrapper>
      <Input type={'password'} value={password} placeholder={i18n.t('login:newPassword')} onChangeText={setPassword} iconName={'key'} />
      <Input type={'password'} value={passwordConfirm} placeholder={i18n.t('login:confirmNewPassword')} onChangeText={setPasswordConfirm} iconName={'key'} />
    </InputsWrapper>
  }

  return <FormWrapper>
    <Title>{i18n.t('login:restorePassword')}</Title>
    {renderContent()}
    <Button title={buttonTitle}
      type={'dark'}
      onPress={handleButtonPress}
      loading={loading}
      disabled={loading}
    />
  </FormWrapper>
}

export default RestorePasswordForm