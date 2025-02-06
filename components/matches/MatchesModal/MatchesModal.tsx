import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import MultiSlider from '@ptomasroos/react-native-multi-slider'
import * as Haptics from 'expo-haptics'
import {
  ModalContainer,
  Container,
  Header,
  CancelButton,
  Title,
  Label,
  GenderContainer,
  ButtonMatchesContainer,
  ResetButton,
  ResetText,
  ApplyButton,
  ApplyText,
  DragIndicator,
  FilterContainer,
  DragArea,
  ContentContainer,
  AgeHeaderContainer,
  AgeText,
  DragAreaContainer,
  SelectedGamesButton,
  SelectedGamesText,
} from './styles'
import CustomDropdown from '@/components/common/CustomDropdown/CustomDropdown'
import { useMarkerAnimation } from './hooks/useMarkerAnimation'
import { useModalDrag } from './hooks/useModalDrag'
import { CustomMarker } from './components/CustomMarker'
import { GenderButton } from './components/GenderButton'
import i18n from '@/localization/i18n'
import { useTheme } from 'styled-components/native'
import { locales } from '@/constants/locales'
import { MatchesModalProps } from './types'
import { DRAG_THRESHOLD, GENDER_OPTIONS, SCREEN_WIDTH } from './constants'
import GamesSelector from './components/GamesSelector'
import Icon from '@expo/vector-icons/Ionicons'
import compose from 'lodash/flowRight'
import { inject } from 'mobx-react'
import { Banner, Store } from '@/types'
import analytics from '@/services/analytics'

const MatchesModal = ({
  onClose, setAgeRangeFilter, setLanguagesFilter,
  setGamesFilter, setGenderFilter, matchFilters,
  updateFilters, resetFilters,
}: MatchesModalProps) => {
  const theme = useTheme()
  const [isGamesSelectorVisible, setGamesSelectorVisible] = useState(false)

  const { isDragging, markerScale, handleMarkerPress, handleMarkerRelease } = useMarkerAnimation()
  const { pan, panResponder } = useModalDrag(onClose, DRAG_THRESHOLD)

  const handleValuesChange = (values: number[]) => {
    setAgeRangeFilter([values[0], values[1]])

    if (values[0] % 5 === 0 || values[1] % 5 === 0) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
    }
  }

  const handleApply = () => {
    analytics.matches.matchesFilterApplied(matchFilters)
    updateFilters()
    onClose()
  }

  const handleReset = () => {
    analytics.matches.matchesFilterReset()
    resetFilters()
  }

  const languageOptions = locales.map(locale => ({
    label: locale.toUpperCase(),
    value: locale,
  }))

  const handleGamesChange = (games: Banner[]) => {
    setGamesFilter(games)
  }

  return (
    <ModalContainer>
      <Container style={{ transform: [{ translateY: pan.y }] }}>
        <DragAreaContainer>
          <DragArea {...panResponder.panHandlers}>
            <DragIndicator />
          </DragArea>
        </DragAreaContainer>
        <ContentContainer>
          <Header>
            <Title>{i18n.t('matches:filterMatches')}</Title>
            <TouchableOpacity onPress={onClose}>
              <CancelButton>{i18n.t('common:cancel')}</CancelButton>
            </TouchableOpacity>
          </Header>
          <FilterContainer>
            <>
              <Label>{i18n.t('onb:gender')}</Label>
              <GenderContainer>
                {GENDER_OPTIONS.map(option => (
                  <GenderButton
                    key={option}
                    option={option}
                    active={matchFilters.gender === option}
                    onPress={() => setGenderFilter(option)}
                  />
                ))}
              </GenderContainer>
            </>

            <AgeHeaderContainer>
              <Label>{i18n.t('common:ageRange')}</Label>
              <AgeText>{`${matchFilters.ageRange[0]} ~ ${matchFilters.ageRange[1]}`}</AgeText>
            </AgeHeaderContainer>

            <MultiSlider
              values={matchFilters.ageRange}
              min={13}
              max={90}
              containerStyle={{
                width: '100%',
                paddingHorizontal: 10,
                alignSelf: 'center',
              }}
              onValuesChange={handleValuesChange}
              step={1}
              selectedStyle={{
                backgroundColor: theme.common.gradientButtonColorStart,
                opacity: isDragging ? 0.8 : 1,
                height: 4,
              }}
              unselectedStyle={{
                backgroundColor: theme.common.buttonDartBackgroundColor,
                opacity: isDragging ? 0.6 : 1,
                height: 4,
              }}
              customMarker={() => <CustomMarker markerScale={markerScale} isDragging={isDragging} />}
              onValuesChangeStart={handleMarkerPress}
              onValuesChangeFinish={handleMarkerRelease}
              sliderLength={SCREEN_WIDTH - 55}
              trackStyle={{
                height: 4,
                borderRadius: 2,
              }}
            />

            <Label>{i18n.t('matches:selectGame')}</Label>
            <SelectedGamesButton onPress={() => setGamesSelectorVisible(true)}>
              <SelectedGamesText>
                {matchFilters.games.length > 0 ? matchFilters.games[0].title : i18n.t('matches:anyGame')}
              </SelectedGamesText>
              <Icon
                name="chevron-down"
                size={24}
                color={theme.common.inputTextColor}
              />
            </SelectedGamesButton>

            <GamesSelector
              isVisible={isGamesSelectorVisible}
              onClose={() => setGamesSelectorVisible(false)}
              selectedGames={matchFilters.games}
              onGamesChange={handleGamesChange}
            />

            <Label>{i18n.t('matches:selectLanguage')}</Label>
            <CustomDropdown
              data={languageOptions}
              value={matchFilters.languages}
              onChange={values => setLanguagesFilter(values as never[])}
              placeholder={i18n.t('matches:selectLanguage')}
            />

          </FilterContainer>
          <ButtonMatchesContainer>
            <ResetButton onPress={handleReset}>
              <ResetText>{i18n.t('common:reset')}</ResetText>
            </ResetButton>
            <ApplyButton onPress={handleApply}>
              <ApplyText>{i18n.t('matches:apply')}</ApplyText>
            </ApplyButton>
          </ButtonMatchesContainer>
        </ContentContainer>
      </Container>
    </ModalContainer>
  )
}

export default compose(
  inject((context: Store) => ({
    setAgeRangeFilter: context.MatchesStore.setAgeRangeFilter,
    setLanguagesFilter: context.MatchesStore.setLanguagesFilter,
    setGamesFilter: context.MatchesStore.setGamesFilter,
    setGenderFilter: context.MatchesStore.setGenderFilter,
    matchFilters: context.MatchesStore.matchFilters,
    userGender: context.UserStore.user?.profile.gender,
    updateFilters: context.MatchesStore.updateFilters,
    resetFilters: context.MatchesStore.resetFilters,
  })),
)(MatchesModal)