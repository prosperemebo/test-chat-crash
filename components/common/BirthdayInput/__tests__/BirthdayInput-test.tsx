import { render } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'
import { describe, expect, test } from '@jest/globals'
import BirthdayInput from '../'
import { dark } from '@/theme'

describe('<BirthdayInput />', () => {

  test('BirthdayInput renders correctly', () => {
    const tree = render(
      <ThemeProvider theme={dark}>
        <BirthdayInput onChange={() => { }} value={new Date('2000-10-01')} />
        <BirthdayInput onChange={() => { }} value={new Date('2000-10-01')} error={'dsfs 34234'} />
      </ThemeProvider>,
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })
})