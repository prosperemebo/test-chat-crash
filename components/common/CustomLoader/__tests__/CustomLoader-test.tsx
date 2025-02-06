import { render } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'
import { describe, expect, test, jest } from '@jest/globals'
import Loader from '../'
import { dark } from '@/theme'

describe('<Loader />', () => {

  jest.mock('react-native-safe-area-context')
  test('Loader renders correctly', () => {
    const tree = render(
      <ThemeProvider theme={dark}>
        <Loader/>
      </ThemeProvider>,
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })
})