export const Gender = {
  Male: 'Male',
  Female: 'Female',
  Other: 'Other',
} as const

export type GenderType = typeof Gender[keyof typeof Gender]

export const UserStatus = {
  Muted: 'muted',
  Banned: 'banned',
  Suspended: 'suspended',
  Active: 'active',
} as const

export type UserStatusType = typeof UserStatus[keyof typeof UserStatus]

export const PlatformEnum = {
  Mobile: 'mobile',
  Computer: 'computer',
  Xbox: 'xbox',
  Playstation: 'playstation',
  Switch: 'switch',
  Wii: 'wii',
  Tabletop: 'tabletop',
  Web3: 'web3',
} as const

export type PlatformEnumType = typeof PlatformEnum[keyof typeof PlatformEnum]

export const GenreEnum = {
  Sports: 'Sports',
  MusicParty: 'Music & Party',
  Casual: 'Casual',
  Action: 'Action',
  Fighting: 'Fighting',
  Adventure: 'Adventure',
  Strategy: 'Strategy',
  Rpg: 'RPG',
} as const

export type GenreEnumType = typeof GenreEnum[keyof typeof GenreEnum]

export const Languages = {
  German: 'de',
  English: 'en',
  Spanish: 'es',
  French: 'fr',
  Italian: 'it',
  Dutch: 'nl',
  Portuguese: 'pt',
  Russian: 'ru',
  Ukrainian: 'uk',
} as const

export type LanguagesType = typeof Languages[keyof typeof Languages]

export const LastOnlineEnum = {
  Now: 'now',
  FiveDays: '5days',
  TwoWeeks: '2weeks',
  OneYear: '1year',
  AllTime: 'allTime',
} as const

export type LastOnlineType = typeof LastOnlineEnum[keyof typeof LastOnlineEnum]

export interface NotifPreferences {
  chatMessages: boolean
  groupChat: boolean
  feed: boolean
  sessions: boolean
  chatVibration: boolean
  promotions: boolean
}

type Settings = {
  language: LanguagesType
  defaultLanguage: LanguagesType
  ages: number[]
  searchDistance: number
  matchesEnabled: boolean
  gameMatchFilter: string
  gameTitleMatchFilter: string
  lastOnline: LastOnlineType
  notifPreferences: NotifPreferences
  emailPreferences: boolean
  hideLocation: boolean
}

export const MembershipTypeEnum = {
  Gaming: 'Gaming',
} as const

export type MembershipType = typeof MembershipTypeEnum[keyof typeof MembershipTypeEnum]

export type Location = {
  type: string
  coordinates: number[]
  city: string
  country: string
  state: string
  name: string
  code: string
}

type Skipped = {
  gameId: string
  time: Date
}

type Avatar = {
  secure: string
  onlineStatusIcon: string
  crown: string
  gallery: {
    images: string[]
  }
}

type Password = {
  bcrypt: string
}

type SocialMedia = {
  id: string
}

type DeviceInfo = {
  userAgent: string
  carrier: string
  uniqueId: string
  systemName: string
  systemVersion: string
  webAgent: string
}

type Services = {
  password: Password
  ip: string
  facebook: SocialMedia
  google: SocialMedia
  discord: SocialMedia
  apple: SocialMedia
  deviceInfo: DeviceInfo
}

type Device = {
  token: string
  os: string
}

type MembershipRole = {
  startDate: Date
  endDate: Date
  type: MembershipType
  cancelled: boolean
  duration: LastOnlineType
}

export type Profile = {
  age: number
  birthday: Date
  colorName: string
  gender: GenderType
  languages: LanguagesType[]
  aboutMe: string
  emailVerified: boolean
  timezone: string
}


//TODO user in Partial
export type User = {
  _id: string
  username: string
  email: string
  status: UserStatusType
  platforms: PlatformEnumType[]
  genres: GenreEnumType[]
  profile: Profile
  settings: Settings
  location: Location
  removedRecoms: string[]
  skippedRecoms: Skipped[]
  gameIds: string[]
  userIds: string[]
  removedIds: string[]
  blacklist: string[]
  removedBy: string[]
  skippedMatches: string[]
  pendingMatches: string[]
  avatar: Avatar
  createdAt: Date
  services: Services
  devices: Device[]
  banned: boolean
  bannedBy: string
  membershipRole: MembershipRole[]
  coverImg: {
    secure: string
  }
}

export interface UserImage {
  isMain?: boolean
  isPremium?: boolean
  count?: number
  index?: number
  imageUrl?: string
}