import { render } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'
import { describe, expect, test } from '@jest/globals'
import SocialMedia from '../'
import { dark } from '@/theme'

describe('<SocialMedia />', () => {

  test('SocialMedia renders correctly', () => {
    const tree = render(
      <ThemeProvider theme={dark}>
        <SocialMedia/>
      </ThemeProvider>,
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })
})