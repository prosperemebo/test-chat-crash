import { render } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'
import { describe, expect, test } from '@jest/globals'
import CheckBox from '../'
import { dark } from '@/theme'

describe('<CheckBox />', () => {

  test('CheckBox renders correctly', () => {
    const tree = render(
      <ThemeProvider theme={dark}>
        <CheckBox value={true} title={'nice'} onChange={() => {}}/>
        <CheckBox value={false} title={'nice2'} onChange={() => {}}/>
      </ThemeProvider>,
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })
})