export const defaultBanner = require('@/assets/images/games/game_banner_placeholder.png')

export const getImageSource = (url: string) => {
  if (!url) return defaultBanner
  // We are checking if the URL is absolute
  if (url.startsWith('http://') || url.startsWith('https://')) return url

  // If the URL is not absolute, we are using the CDN
  return `${process.env.EXPO_PUBLIC_GAMES_STATIC_HOST_CDN}${url}`
}