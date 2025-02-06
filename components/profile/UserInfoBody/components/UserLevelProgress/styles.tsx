import { MaterialCommunityIcons } from '@expo/vector-icons'
import styled from 'styled-components/native'
import { InfoText, SecondaryHeading } from '@/components/common'

export const LevelProgressWrapper = styled.TouchableOpacity`
  padding: 14px 18px;
  background-color: ${props => props.theme.backgroundColor2};
  flex-direction: row;
  align-self: flex-start;
  border-radius: 10px;
  border-width: 1px;
  border-color: ${props => props.theme.primaryTextColor};
`

export const LevelProgressPrefixValueWrapper = styled.View`
  align-items: center;
  justify-content: space-between;
`

export const LevelProgressPrefixValueIconImage = styled.Image`
  height: 20px;
  width: 20px;
  resize-mode: contain;
`

export const LevelProgressPrefixValueText = styled(SecondaryHeading)` 
  color: ${props => props.color || props.theme.primaryTextColor};
  text-transform: uppercase;
`

export const LevelProgressSliderWrapper = styled.View`
  flex: 1;
  margin: 0 -3px;
  align-items: center;
`

export const LevelProgressSliderContainer = styled.View`
  margin-top: -5px;
`

export const LevelProgressSliderValue = styled(InfoText)`
  text-transform: lowercase;
  text-decoration: underline;
  text-decoration-color: ${props => props.color || props.theme.common.infoTextColor};
  color: ${props => props.color || props.theme.common.infoTextColor};
  font-weight: 400;
`

export const LevelProgressSliderSuffixIcon = styled(MaterialCommunityIcons)`
  text-decoration: none;
  text-decoration-color: transparent;
`
