import { render } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'
import { describe, expect, test } from '@jest/globals'
import PlatformsBlock from '../'
import { dark } from '@/theme'

describe('<PlatformsBlock />', () => {

  test('PlatformsBlock renders correctly', () => {
    const tree = render(
      <ThemeProvider theme={dark}>
        <PlatformsBlock platforms={['mobile']} onChange={() => {}}/>
      </ThemeProvider>,
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })
})