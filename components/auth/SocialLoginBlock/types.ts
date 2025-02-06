export interface SocialLoginBlockProps {
    onFacebookPress: () => void
    onGooglePress: () => void
    onDiscordPress: () => void
    onApplePress: () => void
    isLoading: boolean,
    isNewDesign?: boolean
}