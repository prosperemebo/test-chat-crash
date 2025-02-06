export interface ButtonProps {
    title: string
    onPress?: () => void
    disabled?: boolean
    withGradient?: boolean
    type: 'primary' | 'login' | 'dark' | 'yellow' | 'cancel' | 'empty'
    loading?: boolean
}