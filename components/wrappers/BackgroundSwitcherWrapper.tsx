import React from 'react'
import { ImageSourcePropType } from 'react-native'
import { LinearGradientBackgroundProps } from '../common/LinearGradientBackground/types'
import { BackgroundImage, LinearGradientBackground } from '@/components/common'

interface BackgroundSwitcherWrapperProps extends LinearGradientBackgroundProps {
  useImage: boolean;
  imageSource: ImageSourcePropType;
}

const BackgroundSwitcherWrapper = (props: BackgroundSwitcherWrapperProps) => {
  return props.useImage ? (
    <BackgroundImage source={props.imageSource} contentFit='cover'>
      {props.children}
    </BackgroundImage>
  ) : (
    <LinearGradientBackground
      colors={props.colors}
      start={props.start}
      locations={props.locations}
    >
      {props.children}
    </LinearGradientBackground>
  )
}

export default BackgroundSwitcherWrapper
