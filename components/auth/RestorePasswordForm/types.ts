export interface RestorePasswordFormProps {
    mode: 'reset' | 'set'
    onResetPasswordPress: (email: string) => void
    onSetPasswordPress: (password: string) => void
    loading: boolean
}