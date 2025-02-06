import styled from 'styled-components/native'
import HyperLink from 'react-native-hyperlink'

type WrapperType = {
  withOpacity: boolean
}

export const Wrapper = styled.View<WrapperType>`
    width: 100%;
    padding-horizontal: 20px;
    justify-content: center;
    align-items: center;
    ${props => (props.withOpacity ? 'opacity: 0.5;' : '')}
`

export const Links = styled(HyperLink)`
    width: 100%;
    align-items: center;
`