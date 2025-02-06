import styled from 'styled-components/native'
import { Image } from 'expo-image'

export const ServiceItemContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`

export const ServiceItemInnerWrapper = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  height: 50px;
  justify-content: center;
  background-color: ${props => props.theme.settings.serviceItemBgColor};
  border-radius: 68px;
  margin: 5px;
  border: 1px;
  border-color: rgba(255, 255, 255, 0.2);
  width: 100%;
`

export const View = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const ServiceImage = styled(Image)`
  height: ${props => props.innerHeight}px;
  width: 18.3px;
`

export const ServiceItemLabel = styled.Text`
  text-align: center;
  color: ${props => props.theme.primaryTextColor};
  font-family: 'Poppins-Bold';
  font-size: 15px;
  margin-left: 4%;
`