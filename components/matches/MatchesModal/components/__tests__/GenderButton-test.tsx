import { render } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'
import { describe, expect, test } from '@jest/globals'
import { GenderButton } from '../GenderButton'
import { dark } from '@/theme'

describe('<GenderButton />', () => {
  test('GenderButton renders correctly', () => {
    const tree = render(
      <ThemeProvider theme={dark}>
        <GenderButton option="Any" active={true} onPress={() => {}} />
        <GenderButton option="Female" active={false} onPress={() => {}} />
      </ThemeProvider>,
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })
})