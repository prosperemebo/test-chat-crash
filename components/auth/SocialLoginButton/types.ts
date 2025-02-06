export interface SocialLoginButtonProps {
    name: 'facebook' | 'google' | 'discord' | 'apple'
    disabled?: boolean
    isNewDesign?: boolean
    onPress: () => void
}