import { Dimensions } from 'react-native'

const { width } = Dimensions.get('window')
export const gameCardWidth = (width / 2) - 30
export const gameCardHeight = (gameCardWidth / 5) * 3