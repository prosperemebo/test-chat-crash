import styled from 'styled-components/native'
import IOIcon from '@expo/vector-icons/Ionicons'
import { Image } from 'expo-image'

export const Container = styled.View`
  border-radius: 8px;
`

export const InnerWrapper = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  height: 50px;
  justify-content: space-between;
  width: 100%;
  background-color: ${props => props.theme.primaryBg};
`

export const View = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const StyledIcon = styled(IOIcon)`
  top: 1.7%;
  height: 30px;
  width: 30px;
  color: ${props => props.theme.settings.buttonIconColor};
`

export const Value = styled.Text`
  right: 40%;
  color: ${props => props.theme.settings.buttonIconColor};
  margin-left: auto;
`

export const Label = styled.Text`
  color: ${props => props.theme.primaryTextColor};
  font-family: 'Poppins-Bold';
  font-size: 15px;
  margin-left: 20px;
  text-align: left;
`

export const Icon = styled(Image)`
  left: 25%;
`