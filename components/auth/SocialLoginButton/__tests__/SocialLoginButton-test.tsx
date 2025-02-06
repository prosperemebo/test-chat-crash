import { render } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'
import { describe, expect, test } from '@jest/globals'
import { SocialLoginButton } from '../'
import { dark } from '@/theme'

describe('<SocialLoginButton />', () => {

  test('SocialLoginButton renders correctly', () => {
    const tree = render(
      <ThemeProvider theme={dark}>
        <SocialLoginButton isNewDesign={false} name={'facebook'} onPress={() => {}}/>
        <SocialLoginButton isNewDesign={true} name={'facebook'} onPress={() => {}}/>
      </ThemeProvider>,
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })
})