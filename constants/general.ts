import config from '@/config'

export const TERMS_AND_CONDITIONS_LINK = `${config.SERVER_URL}/terms_and_conditions/`
export const PRIVACY_POLICY_LINK = `${config.SERVER_URL}/privacy_policy/`

//S3 static files
export const DYNAMIC_HOST = 'https://dxscfd0n17jvm.cloudfront.net'
export const BANNER_BASE_URL = `${DYNAMIC_HOST}/gamesb/`

export enum LOGIN_METHODS {
  EMAIL = 'email',
  FACEBOOK = 'fb',
  GOOGLE = 'google',
  APPLE = 'apple',
  DISCORD = 'discord',
}

export enum MembershipType {
  'Gaming' = 'Gaming',
  'Gaming & Dating' = 'Gaming & Dating',
  'Combo' = 'Gaming & Dating',
  'Premium' = 'Gaming',
}

export const STORE_URL_IOS = 'https://apps.apple.com/us/app/gametree-meet-new-friends/id1181404496'

export const STORE_URL_ANDROID = 'https://play.google.com/store/apps/details?id=com.gametreeapp'

export const companyFacebookMediaLink = 'https://www.facebook.com/gametreetribe/'
export const companyTiktokMediaLink = 'https://www.tiktok.com/@gametreeofficial?_t=8i13iXV08lp&_r=1'
export const companyInstagramMediaLink = 'https://www.instagram.com/gametreeapp/'
export const companyDiscordMediaLink = 'https://discord.gg/hvNCARtX'

export const BIRTHDAY_FORMAT = 'MM/DD/YYYY'
export const BIRTHDAY_PARSE_FORMAT = 'MM/dd/yyyy'