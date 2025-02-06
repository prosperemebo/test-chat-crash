import styled, { css } from 'styled-components/native'
import { FlatList } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Image as ExpoImage } from 'expo-image'
import Icon from '@expo/vector-icons/Ionicons'
import { Banner } from '@/types'
import { gameCardHeight, gameCardWidth } from './constants'
import { SelectionOverlayType } from './types'

export const Wrapper = styled.View`
  paddingHorizontal: 21px;
  margin-bottom: auto;
  flex: 1;
`

export const GameCardButton = styled.TouchableOpacity`
  margin-bottom: 15px;
`

export const CardContainer = styled.View`
  width: ${gameCardWidth}px;
  height: ${gameCardHeight}px;
  border-color: ${(props) => props.theme.common.borderColor};
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`

export const Header = styled.Text`
  color: ${props => props.theme.primaryTextColor};
  text-align: 'left';
  font-size: 20px;
  font-style: normal;
  font-family: "Poppins-Bold";
  margin-top: 40px;
  margin-bottom: 10px;
`

export const GamesList = styled(FlatList<Banner>).attrs(() => ({
  columnWrapperStyle: {
    justifyContent: 'space-between',
  },
  contentContainerStyle: {
    paddingBottom: 20,
  },
  showsVerticalScrollIndicator: true,
  bounces: true,
  flex: 1,
}))``

export const Image = styled(ExpoImage)`
  width: ${gameCardWidth}px;
  height: ${gameCardHeight}px;
  border-radius: 5px;
`

export const BottomGradient = styled(LinearGradient)`
  width: ${gameCardWidth}px;
  height: ${gameCardHeight / 3}px;
  position: absolute;
  bottom: 0;
  left: 0;
  justify-content: center;
  overflow: hidden;
`

export const GameLabel = styled.Text`
  z-index: 5;
  text-align: left;
  text-align-vertical: center;
  color: ${(props) => props.theme.onboarding.headerTextColor};
  font-size: 14px;
  padding-horizontal: 10px;
  font-family: 'Poppins-Bold';
`

export const SelectionOverlay = styled.View<SelectionOverlayType>`
  width: ${gameCardWidth}px;
  height: ${gameCardHeight}px;
  z-index: 1;
  position: absolute;
  top: 0;
  right: 0;
  ${props => (props.selected ? css`
    border: 1px solid;
    border-color: ${props => props.theme.onboarding.gameSectionOverlayColor};
    border-radius: 5px;
    ` : css``)}
`

export const SelectedIconContainer = styled.View`
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 5px;
  right: 5px;
  height: 18px;
  width: 18px;
  borderRadius: 30px;
  background-color: ${props => props.theme.onboarding.gameSectionOverlayColor};
`

export const SelectedIcon = styled(Icon)`
  font-size: 16px;
  color: ${props => props.theme.onboarding.selectedItemTextColor};
`

export const BlackView = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.onboarding.gameEmptySectionColor};
  opacity: 0.6;
`

export const NoSelectedIcon = styled.View`
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 5px;
  right: 5px;
  height: 18px;
  width: 18px;
  border: 1.5px;
  border-color: grey;
  border-radius: 30px;
  background-color: ${props => props.theme.onboarding.gameEmptyIconColor};
  opacity: 0.8;
`

export const LoaderContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
`

export const LoaderOverlay = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${props => `${props.theme.secondaryBg}CC`};
  justify-content: center;
  align-items: center;
  z-index: 1;
`