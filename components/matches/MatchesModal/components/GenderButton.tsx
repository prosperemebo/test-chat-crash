import React from 'react'
import i18n from '@/localization/i18n'
import { useGenderButtonAnimation } from '../hooks/useGenderButtonAnimation'
import { ButtonContainer, AnimatedButtonView, AnimatedBackground, ButtonText } from '../styles'
import { GenderButtonProps } from './types'


const GenderButtonComponent = ({ option, active, onPress }: GenderButtonProps) => {
  const { scale, animation } = useGenderButtonAnimation(active)

  return (
    <ButtonContainer onPress={onPress}>
      <AnimatedButtonView style={{ transform: [{ scale }] }} active={active}>
        <AnimatedBackground style={{ opacity: animation }} />
        <ButtonText active={active}>
          {i18n.t(`'onb:${option}`)}
        </ButtonText>
      </AnimatedButtonView>
    </ButtonContainer>
  )
}

GenderButtonComponent.displayName = 'GenderButton'

export const GenderButton = React.memo(GenderButtonComponent)