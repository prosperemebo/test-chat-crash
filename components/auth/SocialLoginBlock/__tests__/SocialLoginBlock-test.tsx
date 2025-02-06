import { render } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'
import { describe, expect, test } from '@jest/globals'
import SocialLoginBlock from '../'
import { dark } from '@/theme'

describe('<SocialLoginBlock />', () => {

  test('SocialLoginBlock renders correctly', () => {
    const tree = render(
      <ThemeProvider theme={dark}>
        <SocialLoginBlock
          isLoading={false}
          onFacebookPress={() => {}}
          onGooglePress={() => {}}
          onDiscordPress={() => {}}
          onApplePress={() => {}}
        />
        <SocialLoginBlock
          isLoading={true}
          onFacebookPress={() => {}}
          onGooglePress={() => {}}
          onDiscordPress={() => {}}
          onApplePress={() => {}}
        />
      </ThemeProvider>,
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('SocialLoginBlock renders new design correctly', () => {
    const tree = render(
      <ThemeProvider theme={dark}>
        <SocialLoginBlock
          isLoading={false}
          isNewDesign={true}
          onFacebookPress={() => {}}
          onGooglePress={() => {}}
          onDiscordPress={() => {}}
          onApplePress={() => {}}
        />
        <SocialLoginBlock
          isLoading={true}
          isNewDesign={true}
          onFacebookPress={() => {}}
          onGooglePress={() => {}}
          onDiscordPress={() => {}}
          onApplePress={() => {}}
        />
      </ThemeProvider>,
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })
})