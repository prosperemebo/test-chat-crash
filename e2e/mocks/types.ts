import React from 'react'

export interface MockMultiSliderProps {
    customMarker?: () => React.ReactNode
    containerStyle?: any
    values: number[]
    min: number
    max: number
    onValuesChange?: (values: number[]) => void
    step?: number
    selectedStyle?: any
    unselectedStyle?: any
    onValuesChangeStart?: () => void
    onValuesChangeFinish?: () => void
}