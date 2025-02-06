import { GenreEnum, PlatformEnum, PlatformEnumType, GenreEnumType } from '@/types'
import { ImageSourcePropType } from 'react-native'

export type PlatformConfig = {
  source: ImageSourcePropType
  source2: ImageSourcePropType
  name: PlatformEnumType
  innerWidth: number
  innerHeight: number
  icon: string
  iconLibrary: string
}

export type GenreConfig = {
  source: ImageSourcePropType
  source2: ImageSourcePropType
  name: GenreEnumType
  localeName: string
  innerWidth: number
  innerHeight: number
}

export const PLATFORMS: PlatformConfig[] = [
  {
    source: require('@/assets/images/platforms/mobile.png'),
    source2: require('@/assets/images/platforms/mobileWhite.png'),
    name: PlatformEnum.Mobile,
    innerWidth: 20,
    innerHeight: 30,
    icon: 'mobile-alt',
    iconLibrary: 'FA5',
  },
  {
    source: require('@/assets/images/platforms/PC.png'),
    source2: require('@/assets/images/platforms/PCWhite.png'),
    name: PlatformEnum.Computer,
    innerWidth: 30,
    innerHeight: 24,
    icon: 'desktop',
    iconLibrary: 'FA5',
  },
  {
    source: require('@/assets/images/platforms/xbox.png'),
    source2: require('@/assets/images/platforms/xboxWhite.png'),
    name: PlatformEnum.Xbox,
    innerWidth: 31,
    innerHeight: 31,
    icon: 'xbox',
    iconLibrary: 'FA5',
  },
  {
    source: require('@/assets/images/platforms/playStation.png'),
    source2: require('@/assets/images/platforms/playStationWhite.png'),
    name: PlatformEnum.Playstation,
    innerWidth: 39,
    innerHeight: 27,
    icon: 'playstation',
    iconLibrary: 'FA5',
  },
  {
    source: require('@/assets/images/platforms/switch.png'),
    source2: require('@/assets/images/platforms/switchWhite.png'),
    name: PlatformEnum.Switch,
    innerWidth: 30,
    innerHeight: 30,
    icon: 'nintendo-switch',
    iconLibrary: 'MCI',
  },
  {
    source: require('@/assets/images/platforms/wii.png'),
    source2: require('@/assets/images/platforms/wiiWhite.png'),
    name: PlatformEnum.Wii,
    innerWidth: 45,
    innerHeight: 25,
    icon: 'nintendo-wii',
    iconLibrary: 'MCI',
  },
  {
    source: require('@/assets/images/platforms/web3.png'),
    source2: require('@/assets/images/platforms/web3White.png'),
    name: PlatformEnum.Web3,
    innerWidth: 31,
    innerHeight: 32,
    icon: 'webhook',
    iconLibrary: 'MCI',
  },
  {
    source: require('@/assets/images/platforms/tabletop.png'),
    source2: require('@/assets/images/platforms/tabletopWhite.png'),
    name: PlatformEnum.Tabletop,
    innerWidth: 30,
    innerHeight: 30,
    icon: 'dice-d20',
    iconLibrary: 'FA5',
  },
]

export const GENRES: GenreConfig[] = [
  {
    source: require('@/assets/images/genres/action.png'),
    source2: require('@/assets/images/genres/actionWhite.png'),
    name: GenreEnum.Action,
    localeName: 'action',
    innerWidth: 30,
    innerHeight: 35,
  },
  {
    source: require('@/assets/images/genres/adventure.png'),
    source2: require('@/assets/images/genres/adventureWhite.png'),
    name: GenreEnum.Adventure,
    localeName: 'adventure',
    innerWidth: 32,
    innerHeight: 30,
  },
  {
    source: require('@/assets/images/genres/casual.png'),
    source2: require('@/assets/images/genres/casualWhite.png'),
    name: GenreEnum.Casual,
    localeName: 'casual',
    innerWidth: 29,
    innerHeight: 30,
  },
  {
    source: require('@/assets/images/genres/fighting.png'),
    source2: require('@/assets/images/genres/fightingWhite.png'),
    name: GenreEnum.Fighting,
    localeName: 'fighting',
    innerWidth: 10,
    innerHeight: 31,
  },
  {
    source: require('@/assets/images/genres/music.png'),
    source2: require('@/assets/images/genres/musicWhite.png'),
    name: GenreEnum.MusicParty,
    localeName: 'party',
    innerWidth: 22,
    innerHeight: 42,
  },
  {
    source: require('@/assets/images/genres/rpg.png'),
    source2: require('@/assets/images/genres/rpgWhite.png'),
    name: GenreEnum.Rpg,
    localeName: 'rpg',
    innerWidth: 40,
    innerHeight: 41,
  },
  {
    source: require('@/assets/images/genres/sports.png'),
    source2: require('@/assets/images/genres/sportsWhite.png'),
    name: GenreEnum.Sports,
    localeName: 'sports',
    innerWidth: 30,
    innerHeight: 30,
  },
  {
    source: require('@/assets/images/genres/strategy.png'),
    source2: require('@/assets/images/genres/strategyWhite.png'),
    name: GenreEnum.Strategy,
    localeName: 'strategy',
    innerWidth: 40,
    innerHeight: 38,
  },
]

export const EXPERIENCE_POINTS = {
  profilePicture: 100,
  userTests: 150,
  coverPicture: 50,
  followGameTreeSocial: 50,
  rated15: 250,
  ratedDislike: 100,
  avatar: 100,
  cover: 50,
  aboutMe: 50,
  dnaTest: 150,
  personalityTest: 150,
  valuesTest: 150,
  verifyEmail: 200,
  fbSync: 100,
  steamSync: 100,
}