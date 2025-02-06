import { PlatformEnumType } from '@/types'

export interface PlatformsBlockProps {
    platforms: PlatformEnumType[]
    onChange: (platform: PlatformEnumType) => void
}