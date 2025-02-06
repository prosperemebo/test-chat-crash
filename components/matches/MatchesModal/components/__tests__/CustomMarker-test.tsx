import { render } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'
import { describe, expect, test } from '@jest/globals'
import { CustomMarker } from '../CustomMarker'
import { dark } from '@/theme'
import { Animated } from 'react-native'

describe('<CustomMarker />', () => {
  test('CustomMarker renders correctly', () => {
    const markerScale = new Animated.Value(1)
    
    const tree = render(
      <ThemeProvider theme={dark}>
        <CustomMarker markerScale={markerScale} isDragging={false} />
        <CustomMarker markerScale={markerScale} isDragging={true} />
      </ThemeProvider>,
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })
})