import { Wrapper, GenreIconWrapper, GenreButton, Header, ScrollContainer, GridContainer } from './styles'
import { GenreEnumType } from '@/types'
import i18n from '@/localization/i18n'
import { GENRES, GenreConfig } from '@/constants/profile'
import { DisabledItem, SelectedItem } from '@/components/onboarding'
import { GenresBlockProps } from './types'


const GenresBlock = (props: GenresBlockProps) => {
  const { genres, onChange } = props

  const handleGenrePress = (name: GenreEnumType) => () => {
    onChange(name)
  }

  const renderGenres = (item: GenreConfig) => {
    const isItemSelected = genres.includes(item.name)

    //TODO fix translations
    const icon = isItemSelected ? <SelectedItem
      label={item.name}
      itemIcon={item.source}
      itemIcon2={item.source2}
      itemWidth={item.innerWidth}
      itemHeight={item.innerHeight}
    /> : <DisabledItem
      label={item.name}
      itemIcon={item.source}
      itemIcon2={item.source2}
      itemWidth={item.innerWidth}
      itemHeight={item.innerHeight}
    />

    return <GenreButton key={item.name} onPress={handleGenrePress(item.name)}>
      <GenreIconWrapper>
        {icon}
      </GenreIconWrapper>
    </GenreButton>
  }

  return <Wrapper>
    <Header>{i18n.t('profile:favoriteGenres')}</Header>
    <ScrollContainer>
      <GridContainer>
        {GENRES.map(renderGenres)}
      </GridContainer>
    </ScrollContainer>
  </Wrapper>
}

export default GenresBlock