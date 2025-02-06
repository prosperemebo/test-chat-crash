import styled from 'styled-components/native'

type ContainerProps = {
  center: boolean
}

export const Container = styled.View<ContainerProps>`
    flex-direction: row;
    justify-content: ${props => (props.center ? 'center' : 'space-evenly')};
    height: 66px;
    padding-top: 20px;
    width: 100%;
`

export const LoadingIndicator = styled.ActivityIndicator`
  align-self: center;
`