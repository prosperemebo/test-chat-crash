import { Icon } from './styled'
import { SocialNameProps } from './types'

const iconMap = {
  facebook: <Icon name={'facebook-f'} />,
  google: <Icon name={'google'} />,
  discord: <Icon name={'discord'} />,
  apple: <Icon name={'apple'} />,
}

export const SocialLoginIcon = (props: SocialNameProps) => {
  const { name } = props

  return iconMap[name]
}