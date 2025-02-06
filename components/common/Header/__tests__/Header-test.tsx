import { render } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'
import { describe, expect, test, jest } from '@jest/globals'
import Header from '../'
import { dark } from '@/theme'

describe('<Header />', () => {

  jest.mock('react-native-safe-area-context')

  test('Header renders correctly', () => {
    const tree = render(
      <ThemeProvider theme={dark}>
        <Header title={'test title'}/>
      </ThemeProvider>,
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })
})