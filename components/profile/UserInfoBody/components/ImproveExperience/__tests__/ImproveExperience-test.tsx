import { render } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'
import { describe, expect, test } from '@jest/globals'
import ImproveExperience from '../'
import { dark } from '@/theme'

describe('<ImproveExperience />', () => {

  test('ImproveExperience renders correctly', () => {
    const tree = render(
      <ThemeProvider theme={dark}>
        <ImproveExperience />
      </ThemeProvider>,
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })
})