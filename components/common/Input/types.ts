import { TextInputProps } from 'react-native'

interface Props {
    error?: string
    iconName?: 'envelope' | 'unlocked' | 'key'
    type: 'email' | 'password' | 'general' | 'username'
    value: string,
    placeholder: string,
}

export type InputProps = Props & TextInputProps