import { GenderType } from '@/types'

export interface PersonalBlockProps {
    ageVerified: boolean
    usernameValue: string
    birthdayValue: string
    genderValue: GenderType | null
    onUsernameChange: (username: string) => void
    onBirthdayChange: (birthday: string) => void
    onGenderChange: (gender: GenderType) => void
    onAgeVerifiedChange: (value: boolean) => void
    birthdayValidationError?: string
}