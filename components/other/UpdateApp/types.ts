import { AppVersionStatusEnumType } from '@/types'

export interface UpdateAppProps {
    type: AppVersionStatusEnumType
    goBack: () => void
}