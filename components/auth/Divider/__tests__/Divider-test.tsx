import { render } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'
import { describe, expect, test } from '@jest/globals'
import Divider from '../'
import { dark } from '@/theme'

describe('<Divider />', () => {

  test('Divider renders correctly', () => {
    const tree = render(
      <ThemeProvider theme={dark}>
        <Divider/>
      </ThemeProvider>,
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })
})