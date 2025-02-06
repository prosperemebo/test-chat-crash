import { render } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'
import { Provider } from 'mobx-react'
import { describe, expect, test, jest } from '@jest/globals'
import MatchesModal from '../'
import { dark } from '@/theme'

const mockStore = {
  GamesStore: {
    isRequestRunning: false,
    onboardingGames: [],
    getInitialOnboardingGames: jest.fn(),
    loadMoreOnboardingGames: jest.fn(),
    searchGames: jest.fn(),
    setSelectedGames: jest.fn(),
  },
  MatchesStore: {
    matches: [],
    matchFilters: {
      ageRange: [13, 90],
      games: [],
      gender: 'Male',
      languages: [],
    },
    setGenderFilter: jest.fn(),
    setAgeRangeFilter: jest.fn(),
    setLanguageFilter: jest.fn(),
    setGamesFilter: jest.fn(),
    resetStore: jest.fn(),
  },
  UserStore: {
    user: {
      profile: {
        gender: 'Female',
      },
    },
  },
}

describe('<MatchesModal />', () => {
  test('MatchesModal renders correctly', () => {
    const tree = render(
      <Provider {...mockStore}>
        <ThemeProvider theme={dark}>
          <MatchesModal onClose={() => { }} />
        </ThemeProvider>
      </Provider>,
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })
})