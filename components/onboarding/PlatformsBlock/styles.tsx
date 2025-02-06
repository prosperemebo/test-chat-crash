import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

const { width } = Dimensions.get('window')
const gridItemWidth = (width / 2) - 30
// Height is 62.5 percent of the width, Calulated from the designs
const gridItemHeight = gridItemWidth * (62.5 / 100)

export const Wrapper = styled.View`
    paddingHorizontal: 21px;
    margin-bottom: auto;
`

export const PlatformButton = styled.TouchableOpacity``
export const PlatformIconWrapper = styled.View`
    width: ${gridItemWidth}px;
    height: ${gridItemHeight}px;
    border-radius: 8px;
    background-color: ${props => props.theme.secondaryBgLight};
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
`

export const ScrollContainer = styled.ScrollView``

export const Header = styled.Text`
    color: ${props => props.theme.primaryTextColor};
    text-align: left;
    font-size: 20px;
    font-style: normal;
    font-family: "Poppins-Bold";
    margin-top: 40px;
    margin-bottom: 10px;
`

export const GridContainer = styled.View`
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`