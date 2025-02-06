import { render } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'
import { describe, expect, test } from '@jest/globals'
import GenresBlock from '../'
import { dark } from '@/theme'

describe('<GenresBlock />', () => {

  test('GenresBlock renders correctly', () => {
    const tree = render(
      <ThemeProvider theme={dark}>
        <GenresBlock genres={['RPG']} onChange={() => {}}/>
      </ThemeProvider>,
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })
})