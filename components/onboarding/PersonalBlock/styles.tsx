import styled from 'styled-components/native'
import { StyleSheet } from 'react-native'
import FontAwesomeIcon from '@expo/vector-icons/FontAwesome5'

export const Wrapper = styled.View``

export const ScrollContainer = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    flexGrow: 1,
  },
}))`
  padding: 30px 20px 0;
`

export const Content = styled.View`
    margin: 10px 0;
`

export const FormWrapper = styled.View`
  flex: 1;
`

export const HeaderIcon = styled(FontAwesomeIcon)`
  font-size: 20px;
  color: ${props => props.theme.common.inputIconColor};
  margin-right: 10px;
`

export const InputWrapper = styled.View`
    flex-direction: row;
    align-items: center;
    border-radius: 8px;
    border-width: ${StyleSheet.hairlineWidth}px;
    border-color: ${props => props.theme.common.inputBorderColor};
    background-color: ${props => props.theme.secondaryBg};
    width: 100%;
    margin: 10px 0;
    padding: 15px;
`
