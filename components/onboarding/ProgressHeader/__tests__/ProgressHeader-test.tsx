import { render } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'
import { describe, expect, test } from '@jest/globals'
import ProgressHeader from '../'
import { dark } from '@/theme'

describe('<ProgressHeader />', () => {

  test('ProgressHeader renders correctly', () => {
    const tree = render(
      <ThemeProvider theme={dark}>
        <ProgressHeader goBack={() => {}} progress={3} steps={5} completeSteps={2}/>
      </ThemeProvider>,
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })
})