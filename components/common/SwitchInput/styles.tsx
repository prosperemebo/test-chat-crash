import styled from "styled-components/native";
import { Dimensions, ActivityIndicator as RNActivityIndicator } from 'react-native'
//Container, InnerWrapper, InfoText, ActivityLoader, ActionsContainer

type InfoTextType = {
  type: 'gdpr' | 'settings' | 'friends'
}

const { width } = Dimensions.get('window')

export const Container = styled.View`
    border-radius: 8px;
    width: 100%;
`

export const InnerWrapper = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

export const InfoText = styled.Text<InfoTextType>`
    color: ${props => props.theme.common.switchTextColor};
    font-size: ${props => props.type === 'gdpr' ? '12px' : '14px'};
    font-style: normal;
    font-family: 'Poppins-Regular';
    font-weight: 300;
    line-height: 22px;
    width: ${width - 125}px;
`

export const ActivityLoader = styled(RNActivityIndicator)`
    margin-right: 5px;
`

export const ActionsContainer = styled.View`
    flex-direction: row;
    width: 100px;
`