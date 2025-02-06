import { render } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'
import { describe, expect, test } from '@jest/globals'
import AuthLogoBlock from '../'
import { dark } from '@/theme'

describe('<AuthLogoBlock />', () => {

  test('AuthLogoBlock renders correctly', () => {
    const tree = render(
      <ThemeProvider theme={dark}>
        <AuthLogoBlock showHero={false} caption={'Make lifelong friends'} />
      </ThemeProvider>,
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('AuthLogoBlock renders hero correctly', () => {
    const tree = render(
      <ThemeProvider theme={dark}>
        <AuthLogoBlock showHero={true} caption={'Make lifelong friends'} />
      </ThemeProvider>,
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })
})