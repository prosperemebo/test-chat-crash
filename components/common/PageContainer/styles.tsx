import styled from 'styled-components/native'
import { Platform, KeyboardAvoidingViewProps } from 'react-native'
import { ContainerProps } from '@/app/(app)/settings/types'

export const Container = styled.View<ContainerProps>`
  flex: 1;
  padding-top: ${props => props.topInset}px;
`

export const KeyboardView = styled.KeyboardAvoidingView.attrs({
  behavior: Platform.select<KeyboardAvoidingViewProps['behavior']>({
    ios: 'height',
    android: 'padding',
  }),
  enabled: Platform.OS === 'ios',
})`
    flex: 1;
`

export const HideKeyboardWrapper = styled.Pressable`
    flex: 1;
`
