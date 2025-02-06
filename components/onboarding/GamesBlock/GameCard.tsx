import { getImageSource } from '@/utils/gameImage'
import {
  GameCardButton, CardContainer, Image,
  BottomGradient, GameLabel, SelectionOverlay,
  SelectedIconContainer, SelectedIcon, BlackView,
  NoSelectedIcon,
} from './styles'
import { GameCardProps } from './types'

export const defaultBanner = require('@/assets/images/games/game_banner_placeholder.png')

const GameCard = (props: GameCardProps) => {
  const { isSelected, url, value, title, onPress } = props

  const handlePress = () => {
    onPress({ _id: value, url: url as string, title })
  }

  const renderOverlay = () => {
    if (isSelected) return <SelectionOverlay selected={true}>
      <SelectedIconContainer>
        <SelectedIcon name='checkmark-outline' />
      </SelectedIconContainer>
    </SelectionOverlay>

    return <SelectionOverlay selected={false}>
      <BlackView />
      <NoSelectedIcon />
    </SelectionOverlay>
  }

  return <GameCardButton onPress={handlePress}>
    <CardContainer>
      {renderOverlay()}
      <Image source={getImageSource(url as string)} />
      <BottomGradient colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.8)']}>
        <GameLabel numberOfLines={1} ellipsizeMode='tail'>
          {title}
        </GameLabel>
      </BottomGradient>
    </CardContainer>
  </GameCardButton>
}

export default GameCard