import React from 'react'
import { render } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'
import { Provider } from 'mobx-react'
import { describe, expect, it, jest, beforeEach } from '@jest/globals'
import Games from '@/app/auth/onboarding/games'
import { dark } from '@/theme'

jest.mock('@/components/common/styledComponents', () => ({
  BackgroundImage: 'View',
  Container: 'View',
  ScrollView: 'ScrollView',
  Text: 'Text',
}))

jest.mock('@/components/common/Header', () => 'Header')

const mockStore = {
  GamesStore: {
    isRequestRunning: false,
    onboardingGames: [
      { _id: '1', title: 'Game 1', url: 'url1' },
      { _id: '2', title: 'Game 2', url: 'url2' },
      { _id: '3', title: 'Game 3', url: 'url3' },
    ],
    getInitialOnboardingGames: jest.fn(),
    loadMoreOnboardingGames: jest.fn(),
    searchGames: jest.fn(),
    setSelectedGames: jest.fn(),
  },
  ToastStore: {
    showToast: jest.fn(),
  },
}

jest.mock('@/services/analytics', () => ({
  onboarding: {
    logOBGamesView: jest.fn(),
  },
}))

jest.mock('@/hooks/useOnboarding', () => ({
  useOnboarding: () => ({
    getInitialOnboardingGames: jest.fn(),
    setSelectedGames: jest.fn(),
  }),
}))

jest.mock('@/services/Adapty', () => ({
  AdaptyService: {
    logOnboarding: jest.fn(),
  },
}))

jest.mock('expo-image', () => ({
  Image: require('react-native').Image,
}))

const renderComponent = (props = {}) => {
  return render(
    <Provider {...mockStore}>
      <ThemeProvider theme={dark}>
        <Games {...props} />
      </ThemeProvider>
    </Provider>,
  )
}

describe('Games Component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders games list correctly', () => {
    const { getByText } = renderComponent()
    
    expect(getByText('Game 1')).toBeTruthy()
    expect(getByText('Game 2')).toBeTruthy()
    expect(getByText('Game 3')).toBeTruthy()
  })
})