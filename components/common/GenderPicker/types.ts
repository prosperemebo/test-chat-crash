import { GenderType } from '@/types'

export interface GenderPickerProps {
    selectedGender: GenderType | null
    onChange: (selectedGender: GenderType) => void
}

export type IconName = 'male' | 'female' | 'male-female'

export interface OptionProps {
    key: GenderType
    label: string
    icon: IconName
}