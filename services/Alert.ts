import { Alert } from 'react-native'
import i18n from '@/localization/i18n'

type ButtonConfig = {
  text: string,
  onPress: () => void,
  style?: 'cancel'
}

type OptionsConfig = {
  cancelable?: boolean
}

export default class AlertService {
  static showInfo = (title: string, description?: string) => {
    Alert.alert(title, description)
  }


  static showInfoWithClose = (title: string, description?: string) => {
    Alert.alert(title, description,[
      {
        text: i18n.t('common:close'),
        onPress: () => {},
        style: 'cancel',
      },
    ],
    { cancelable: false })
  }
  
  static showInfoWithCustomButtons =
    (title: string, description: string, buttonsConfig: ButtonConfig[], options: OptionsConfig) => {
      Alert.alert(title, description, buttonsConfig, options)
    }
}