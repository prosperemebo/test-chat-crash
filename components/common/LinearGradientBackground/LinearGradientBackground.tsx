import React from 'react'
import { StyledLinearGradientBackground } from './styles'
import { LinearGradientBackgroundProps } from './types';

const LinearGradientBackground = (props: LinearGradientBackgroundProps) => {
  return <StyledLinearGradientBackground colors={props.colors} start={props.start} locations={props.locations}>
    {props.children}
  </StyledLinearGradientBackground>
}

export default LinearGradientBackground;