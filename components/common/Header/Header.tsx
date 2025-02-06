import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { HeaderContainer, HeaderTitleText, GoBackButton, GoBackIcon } from './styles'
import { capitalizeFirstLetter } from '@/utils'
import { HeaderProps } from './types';

const backIcon = require('@/assets/images/goBack.png');


export const Header = (props: HeaderProps) => {
  const { title, withGoBack, onGoBack } = props

  const { top } = useSafeAreaInsets()

  return <HeaderContainer topInsets={top}>
    {withGoBack && <GoBackButton topInsets={top} onPress={onGoBack}><GoBackIcon source={backIcon} /></GoBackButton>}
    <HeaderTitleText>{capitalizeFirstLetter(title)}</HeaderTitleText>
  </HeaderContainer>
}
