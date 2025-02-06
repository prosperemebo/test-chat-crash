import { regex } from '@/utils/validation'
import i18n from '@/localization/i18n'

export const validateField = (fieldName: string, value: string) => {
  const t = i18n.t
  let errorMessage = ''

  switch (fieldName) {
    case 'email':
      if (!value) {
        errorMessage = t('errors:emptyEmailError')
      } else if (!regex.email.test(value)) {
        errorMessage = t('errors:emailInvalid')
      }
      break
    case 'password':
      if (!value) {
        errorMessage = t('errors:emptyPasswordError')
      } else if (value.trim().length < 8) {
        errorMessage = t('errors:passwordMinError')
      } else if (!/[a-zA-Z]/.test(value.trim())) {
        errorMessage = t('errors:passwordLetterError')
      } else if (!/[0-9]/.test(value.trim())) {
        errorMessage = t('errors:passwordDigitError')
      }
      break
    default:
      return ''
  }

  return errorMessage
}