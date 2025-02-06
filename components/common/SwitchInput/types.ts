export interface SwitchInputProps {
    label: string
    value: boolean
    onValueChange: (value: boolean) => void
    disabled?: boolean
    isLoading?: boolean,
    type: 'gdpr' | 'settings' | 'friends'
}