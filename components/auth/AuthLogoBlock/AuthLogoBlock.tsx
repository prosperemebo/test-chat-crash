import React from 'react'
import i18n from '@/localization/i18n'
import {
  StyledWrapper,
  StyledHeroImage,
  StyledImage,
  StyledHeroWrapper,
} from './styles'
import { PrimaryHeadingLarge } from '@/components/common'

const AppBlockLogo = require('@/assets/images/in_app_logo_block.png')
const AppHeroLogo = require('@/assets/images/landing_hero.png')

interface AuthLogoBlockProps {
  showHero: boolean;
  caption: string;
}

const AuthLogoBlock = (props: AuthLogoBlockProps) => {
  return props.showHero ? (
    <StyledHeroWrapper>
      <StyledHeroImage source={AppHeroLogo} />
      <PrimaryHeadingLarge>
        {i18n.t(`login:${props.caption}`)}
      </PrimaryHeadingLarge>
    </StyledHeroWrapper>
  ) : (
    <StyledWrapper>
      <StyledImage source={AppBlockLogo} />
    </StyledWrapper>
  )
}

export default AuthLogoBlock
