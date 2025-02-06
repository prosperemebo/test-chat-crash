import { Wrapper, PlatformIconWrapper, PlatformButton, Header, ScrollContainer, GridContainer } from './styles'
import { PlatformEnumType } from '@/types'
import { PLATFORMS, PlatformConfig } from '@/constants/profile'
import { DisabledItem, SelectedItem } from '@/components/onboarding'
import i18n from '@/localization/i18n'
import { PlatformsBlockProps } from './types'

const PlatformsBlock = (props: PlatformsBlockProps) => {
  const { platforms, onChange } = props

  const handleGenrePress = (name: PlatformEnumType) => () => {
    onChange(name)
  }

  const renderPlatforms = (item: PlatformConfig) => {
    const isItemSelected = platforms.includes(item.name)

    const icon = isItemSelected ? <SelectedItem
      label={i18n.t(`platforms:${item.name}`)}
      itemIcon={item.source}
      itemIcon2={item.source2}
      itemWidth={item.innerWidth}
      itemHeight={item.innerHeight}
    /> : <DisabledItem
      label={i18n.t(`platforms:${item.name}`)}
      itemIcon={item.source}
      itemIcon2={item.source2}
      itemWidth={item.innerWidth}
      itemHeight={item.innerHeight}
    />

    return <PlatformButton key={item.name} onPress={handleGenrePress(item.name)}>
      <PlatformIconWrapper>
        {icon}
      </PlatformIconWrapper>
    </PlatformButton>
  }

  return <Wrapper>
    <Header>{i18n.t('onb:selectPlatforms')}</Header>
    <ScrollContainer>
      <GridContainer>
        {PLATFORMS.map(renderPlatforms)}
      </GridContainer>
    </ScrollContainer>
  </Wrapper>
}

export default PlatformsBlock