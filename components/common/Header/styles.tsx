import styled from 'styled-components/native'
import { Image } from 'expo-image'
import { Dimensions, StyleSheet } from 'react-native'
const { width } = Dimensions.get('screen')

const headerHeight = width * (90 / 615)

type HeaderContainer = {
  topInsets: number
}

export const HeaderContainer = styled.View<HeaderContainer>`
  width: 100%;
  height: ${props => headerHeight + props.topInsets}px;
  background-color: ${props => props.theme.headerBg};
  padding-horizontal: 60px;
  padding-top: ${props => props.topInsets}px;
  align-items: stretch;
  justify-content: center;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: ${props => props.theme.headerBorderColor};
`
export const HeaderTitleText = styled.Text`
    font-family: 'Poppins-Bold';
    font-size: 17px;
    line-height: 25.5px;
    color: ${props => props.theme.common.serviceTextColor};
    text-align: center;
`

export const GoBackButton = styled.TouchableOpacity<HeaderContainer>`
    width: 60px;
    height: ${headerHeight}px;
    position: absolute;
    top: ${props => props.topInsets}px;
    justify-content: center;
    align-items: center;
`

export const GoBackIcon = styled(Image)`
    width: 20px;
    height: 17px;
    color: ${props => props.theme.common.serviceTextColor};
`