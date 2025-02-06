import { render } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'
import { describe, expect, test } from '@jest/globals'
import { Gender } from '@/types'
import GenderPicker from '../'
import { dark } from '@/theme'

describe('<GenderPicker />', () => {

  test('GenderPicker renders correctly', () => {
    const tree = render(
      <ThemeProvider theme={dark}>
        <GenderPicker onChange={() => {}} selectedGender={Gender.Male}/>
        <GenderPicker onChange={() => {}} selectedGender={null}/>
      </ThemeProvider>,
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })
})