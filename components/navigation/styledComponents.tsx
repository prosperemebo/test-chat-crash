import styled from 'styled-components/native'
import { Image } from 'expo-image'

export const TabBarIconWrapper = styled.View`
    flex: 1;
    flex-direction: row;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.nav.bottomTabLabelBackgroundColor};
`

export const TabBarIcon = styled(Image)`
    width: 18px;
    height: 18px;
`