import * as Linking from 'expo-linking'
import { DeepLink } from './types'

// implemented without queue, so we support only last deep link
// 2 deep links supported confirm email and change password
// more complex cases will require auth + redirect implementation
//TODO params validations

export function redirectSystemPath(data: DeepLink) {

}