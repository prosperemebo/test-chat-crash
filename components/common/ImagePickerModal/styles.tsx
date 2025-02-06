import styled from 'styled-components/native'
import IconFoundation from 'react-native-vector-icons/Foundation'
import Modal from 'react-native-modal'
import { SafeAreaView } from 'react-native'

export const StyledModal = styled(Modal) <any>`
  flex: 1;
  justify-content: flex-end;
  margin: 0;
`

export const ModalContainer = styled(SafeAreaView)`
  height: auto;
  background-color: ${props => props.theme.secondaryBg};
`

export const ModalDialogueLabel = styled.Text`
  margin-vertical: 10px;
  margin-horizontal: 20px;
  color: ${props => props.theme.common.serviceTextColor};
  font-size: 18px;
  font-weight: bold;
`

export const ModalOptionsContainer = styled.View`
  margin-horizontal: 20px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: center;
`

export const ModalElementContainer = styled.View`
  margin-horizontal: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ModalButton = styled.TouchableOpacity`
  background-color: ${props => props.theme.common.serviceTextColor};
  height: 60px;
  width: 60px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`

export const ModalButtonLabel = styled.Text`
  color: ${props => props.theme.primaryTextColor};
  font-size: 14px;
  margin-vertical: 10px;
`

export const ModalButtonIcon = styled(IconFoundation)`
  color: ${props => props.theme.exitButtonsBg};
`
