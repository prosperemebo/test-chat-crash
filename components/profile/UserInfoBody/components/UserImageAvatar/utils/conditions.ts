import { User } from '@/types'
import { defaultAvatar, defaultCoverLink } from '../constants'

export const avatarCondition = (props: User) => props.avatar.secure !== defaultAvatar

export const isUserGalleryValid = (props: User) => props.avatar?.gallery?.['images']?.length > 0 ?? 0

export const coverCondition = (props: User) => props.avatar.secure !== defaultCoverLink

export const aboutMeCondition = (props: User) => !!props.profile.aboutMe