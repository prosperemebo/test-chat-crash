import React, { useState, useEffect, useCallback } from 'react'
import { Modal } from 'react-native'
import { inject } from 'mobx-react'
import debounce from 'lodash/debounce'
import GamesBlock from '@/components/onboarding/GamesBlock'
import { SearchInput } from '@/components/onboarding'
import i18n from '@/localization/i18n'
import { Banner, Store } from '@/types'
import {
  GamesSelectorWrapper,
  GamesSelectorHeader,
  GamesSelectorTitle,
  GamesSelectorCloseButton,
  GamesSelectorCloseText,
  GamesSelectorButtonContainer,
  GamesSelectorResetButton,
  GamesSelectorApplyButton,
  GamesSelectorResetText,
  GamesSelectorApplyText,
} from '../styles'
import { GamesSelectorProps } from '../types'

const GamesSelector = ({
  isVisible,
  onClose,
  selectedGames,
  onGamesChange,
  isGamesRequestRunning = false,
  onboardingGames = [],
  getInitialOnboardingGames,
  loadMoreOnboardingGames,
  searchGames,
  setSelectedGames,
}: GamesSelectorProps) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [localSelectedGames, setLocalSelectedGames] = useState<Banner[]>(selectedGames)

  const debouncedSearch = useCallback(
    debounce(async (query: string) => {
      if (searchGames) {
        await searchGames(query)
      }
    }, 1000),
    [searchGames],
  )

  const handleSearch = (text: string) => {
    setSearchQuery(text)
    debouncedSearch(text)
  }

  useEffect(() => {
    if (isVisible && getInitialOnboardingGames) {
      getInitialOnboardingGames()
      if (setSelectedGames && selectedGames.length > 0) {
        setSelectedGames(selectedGames)
      }
    }
  }, [isVisible])

  useEffect(() => {
    setLocalSelectedGames(selectedGames)
  }, [selectedGames])

  const handleGameSelect = async (game: Banner) => {
    setLocalSelectedGames([game])
    if (setSelectedGames) {
      await setSelectedGames([game])
    }
  }

  const handleApply = () => {
    onGamesChange(localSelectedGames)
    onClose()
  }

  const handleReset = () => {
    setLocalSelectedGames([])
    onGamesChange([])
  }

  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <GamesSelectorWrapper>
        <GamesSelectorHeader>
          <GamesSelectorTitle>{i18n.t('matches:selectGame')}</GamesSelectorTitle>
          <GamesSelectorCloseButton onPress={onClose}>
            <GamesSelectorCloseText>{i18n.t('common:close')}</GamesSelectorCloseText>
          </GamesSelectorCloseButton>
        </GamesSelectorHeader>

        <SearchInput
          value={searchQuery}
          onChangeText={handleSearch}
          placeholder={i18n.t('common:search')}
        />

        <GamesBlock
          testID="games-selector"
          isLoading={isGamesRequestRunning}
          onboardingGames={onboardingGames}
          selectedGames={localSelectedGames}
          onChange={handleGameSelect}
          searchQuery={searchQuery}
          onLoadMore={loadMoreOnboardingGames}
        />

        <GamesSelectorButtonContainer>
          <GamesSelectorResetButton onPress={handleReset}>
            <GamesSelectorResetText>{i18n.t('common:reset')}</GamesSelectorResetText>
          </GamesSelectorResetButton>
          <GamesSelectorApplyButton onPress={handleApply}>
            <GamesSelectorApplyText>{i18n.t('matches:apply')}</GamesSelectorApplyText>
          </GamesSelectorApplyButton>
        </GamesSelectorButtonContainer>
      </GamesSelectorWrapper>
    </Modal>
  )
}

export default inject((store: Store) => ({
  isGamesRequestRunning: store.GamesStore.isRequestRunning,
  onboardingGames: store.GamesStore.onboardingGames,
  getInitialOnboardingGames: store.GamesStore.getInitialOnboardingGames,
  loadMoreOnboardingGames: store.GamesStore.loadMoreOnboardingGames,
  searchGames: store.GamesStore.searchGames,
  setSelectedGames: store.GamesStore.setSelectedGames,
}))(GamesSelector)