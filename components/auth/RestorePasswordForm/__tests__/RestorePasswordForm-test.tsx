import { render } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'
import { describe, expect, test } from '@jest/globals'
import RestorePasswordForm from '../'
import { dark } from '@/theme'

describe('<RestorePasswordForm />', () => {

  test('RestorePasswordForm renders correctly', () => {
    const tree = render(
      <ThemeProvider theme={dark}>
        <RestorePasswordForm loading={true} mode={'reset'} onResetPasswordPress={() => {}} onSetPasswordPress={() => {}} />
        <RestorePasswordForm loading={false} mode={'reset'} onResetPasswordPress={() => {}} onSetPasswordPress={() => {}} />
        <RestorePasswordForm loading={false} mode={'set'} onSetPasswordPress={() => {}} onResetPasswordPress={() => {}} />
      </ThemeProvider>,
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })
})