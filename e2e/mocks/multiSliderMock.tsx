import React from 'react'
import { View } from 'react-native'
import { MockMultiSliderProps } from './types'

const MockMultiSlider: React.FC<MockMultiSliderProps> = ({
  customMarker,
  containerStyle,
}) => {
  const Marker = customMarker?.()
  return (
    <View testID="mock-multi-slider" style={containerStyle}>
      {Marker}
    </View>
  )
}

export default MockMultiSlider