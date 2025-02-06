import styled, { css } from 'styled-components/native'
import { Dimensions } from 'react-native'
import AntIcon from '@expo/vector-icons/AntDesign'

const { width } = Dimensions.get('window')

type IconContainerType = {
  positionLeft: boolean
}

type InputIconNType = {
  isError?: boolean
}

export const ScreenContainer = styled.SafeAreaView`
  flex: 1;
  width: ${width}px;
  background-color: ${props => props.theme.postOnboarding.backgroundColor};
  align-items: center;
`

export const IconContainer = styled.TouchableOpacity<IconContainerType>`
  position: absolute;
  right: 10px;
  top: 15px;
  z-index: 10;

  ${props => {
    if (props.positionLeft) {
      return css`
        right: 0px;
        left: 5px;
        top: 40px;
        padding: 20px;
      `
    }
  }}
`

export const InputIconN = styled(AntIcon)<InputIconNType>`
  font-size: 25px;
  color: ${props => (props.isError ? props.theme.postOnboarding.inputIconErrorColor : props.theme.postOnboarding.inputIconColor)};
  margin-right: 10px;
`

export const ScrollContainer = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    flexGrow: 1,
    alignItems: 'center',
  },
}))`
  width: ${width}px;
  padding-horizontal: 10px;
  flex: 1;
`

export const PerksHeaderContainer = styled.View`
  margin-top: 60px;
  width: 85%;
`

export const ModalHeader = styled.Text`
  font-size: 22px;
  font-family: 'Poppins-Regular';
  font-weight: 400;
  color: ${props => props.theme.common.inputTextColor};
  text-align: center;
`