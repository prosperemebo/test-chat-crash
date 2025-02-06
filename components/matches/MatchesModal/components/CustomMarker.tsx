import { MarkerView } from '@/components/matches/MatchesModal/styles'
import { CustomMarkerProps } from './types'


export const CustomMarker = ({ markerScale, isDragging }: CustomMarkerProps) => {
  return (
    <MarkerView
      isDragging={isDragging}
      style={{
        transform: [{ scale: markerScale }],
      }}
    />
  )
}