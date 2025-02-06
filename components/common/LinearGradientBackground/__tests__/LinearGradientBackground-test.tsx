import { render } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'
import { View } from 'react-native'
import { describe, expect, test } from '@jest/globals'
import LinearGradientBackground from '../'
import { dark } from '@/theme'

describe('<LinearGradientBackground />', () => {

  test('LinearGradientBackground renders correctly', () => {
    const tree = render(
      <ThemeProvider theme={dark}>
        <LinearGradientBackground colors={['#1F2025', '#643795', '#CA7AF5']} start={{ x: 0.65, y: 0.65 }}>
          <View/>
        </LinearGradientBackground>
      </ThemeProvider>,
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })
})