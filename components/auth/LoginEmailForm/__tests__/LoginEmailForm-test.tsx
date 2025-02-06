import { render } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'
import { describe, expect, test } from '@jest/globals'
import LoginEmailForm from '../'
import { dark } from '@/theme'

describe('<LoginEmailForm />', () => {

  test('LoginEmailForm renders correctly', () => {
    const tree = render(
      <ThemeProvider theme={dark}>
        <LoginEmailForm onLoginPress={() => {}} loading={false}/>
      </ThemeProvider>,
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })
})