import { render } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'
import { describe, expect, test } from '@jest/globals'
import LoginPageTermsAndConditions from '../'
import { dark } from '@/theme'

describe('<LoginPageTermsAndConditions />', () => {

  test('LoginPageTermsAndConditions renders correctly', () => {
    const tree = render(
      <ThemeProvider theme={dark}>
        <LoginPageTermsAndConditions/>
      </ThemeProvider>,
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })
})