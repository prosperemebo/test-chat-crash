import { defaultAvatar } from '@/components/profile/UserInfoBody/components/UserImageAvatar/constants'
import { User, UserImage } from '@/types'
import { SourceProps } from './types'

export const getAvatarSource = ({ specificUser, isOutOfConnections }: SourceProps) => {
  const { avatar } = specificUser
  if (isOutOfConnections) return defaultAvatar
  if (avatar && avatar.secure) return avatar.secure
  return defaultAvatar
}

export const getGallerySource = ({ specificUser, isOutOfConnections }: SourceProps) => {
  const { avatar } = specificUser

  if (!specificUser || !avatar || isOutOfConnections) return []

  if (avatar.gallery && avatar.gallery.images) return avatar.gallery.images.slice()

  return []
}

const rgbToHex = (rgb: number[]): string => {
  return (
    '#' +
    rgb
      .map((x) => {
        const hex = x.toString(16)
        return hex.length === 1 ? '0' + hex : hex
      })
      .join('')
  )
}

const hsvToRgb = (h: number, s: number, v: number): string => {
  let r = 0, g = 0, b = 0

  const i = Math.floor(h * 6)
  const f = (h * 6) - i
  const p = v * (1 - s)
  const q = v * (1 - (f * s))
  const t = v * (1 - ((1 - f) * s))

  switch (i % 6) {
    case 0:
      r = v
      g = t
      b = p
      break
    case 1:
      r = q
      g = v
      b = p
      break
    case 2:
      r = p
      g = v
      b = t
      break
    case 3:
      r = p
      g = q
      b = v
      break
    case 4:
      r = t
      g = p
      b = v
      break
    case 5:
      r = v
      g = p
      b = q
      break
  }

  const toRgbValue = (color: number) => Math.floor(color * 255)
  const rgb = [toRgbValue(r), toRgbValue(g), toRgbValue(b)]

  return rgbToHex(rgb)
}

export const hsvToHex = (h: number, s: number, v: number): string => hsvToRgb(h / 360, s, v)

export const extractUserImages = (user: User): UserImage[] => {
  const MAX_IMAGE_COUNT = 3
  const freeGalleryOptions = 2

  const galleryImages = getGallerySource({ specificUser: user })
  const avatarImage = getAvatarSource({ specificUser: user })

  const userImagesOld = [avatarImage, ...galleryImages]

  if (userImagesOld.length < MAX_IMAGE_COUNT) {
    const remainingSlots = MAX_IMAGE_COUNT - userImagesOld.length
    userImagesOld.push(...Array(remainingSlots).fill(null))
  }

  const userImages: UserImage[] = userImagesOld.map((imageUrl, index) => {
    return {
      isMain: index === 0,
      isPremium: index > freeGalleryOptions,
      count: MAX_IMAGE_COUNT,
      index: index + 1,
      imageUrl,
    }
  })

  return userImages
}