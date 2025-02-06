import { ListRenderItem } from 'react-native'
import { Wrapper, Header, GamesList, LoaderContainer, LoaderOverlay } from './styles'
import { Banner } from '@/types'
import i18n from '@/localization/i18n'
import GameCard from './GameCard'
import { GamesBlockProps } from './types'
import { CustomLoader } from '@/components/common'

const GamesBlock = (props: GamesBlockProps) => {
  const {
    isLoading,
    onboardingGames = [],
    selectedGames = [],
    onChange,
    searchQuery = '',
    onLoadMore,
  } = props

  const filteredGames = searchQuery ? onboardingGames.filter(game => {
    const matches = game.title.toLowerCase().includes(searchQuery.toLowerCase())
    return matches
  }) : onboardingGames

  if (isLoading && onboardingGames.length === 0) {
    return (
      <LoaderContainer>
        <CustomLoader />
      </LoaderContainer>
    )
  }

  const renderItem: ListRenderItem<Banner> = ({ item }: { item: Banner }) => {
    const isSelected = selectedGames.some(selectedGame => selectedGame._id === item._id)

    return <GameCard
      key={item._id}
      url={item.url}
      title={item.title}
      value={item._id}
      isSelected={isSelected}
      onPress={onChange}
    />
  }

  const keyExtractor = (item: Banner) => item._id

  const handleEndReached = () => {
    if (!isLoading) {
      onLoadMore?.()
    }
  }

  return <Wrapper>
    <Header>{i18n.t('onb:gameListChoose')}</Header>
    {isLoading && onboardingGames.length > 0 && (
      <LoaderOverlay>
        <CustomLoader />
      </LoaderOverlay>
    )}
    <GamesList
      testID="games-list"
      renderItem={renderItem}
      data={filteredGames}
      keyExtractor={keyExtractor}
      numColumns={2}
      windowSize={10}
      refreshing={false}
      onEndReached={handleEndReached}
      onEndReachedThreshold={0.5}
    />
  </Wrapper>
}

export default GamesBlock