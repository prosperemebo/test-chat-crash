import {
  LevelProgressPrefixValueIconImage,
  LevelProgressPrefixValueText,
  LevelProgressPrefixValueWrapper,
  LevelProgressSliderSuffixIcon,
  LevelProgressSliderValue,
  LevelProgressSliderWrapper,
  LevelProgressWrapper,
} from './styles'
import compose from 'lodash/flowRight'
import { inject } from 'mobx-react'
import { Store } from '@/types'
import { numberWithCommas } from '../../../../../common/commonLib/utils'
import { experienceBrackets } from './constants'
import { useTheme } from 'styled-components/native'

const hexagonActive = require('@/assets/icons/gameProfile/polygon1.png')
const hexagonPassive = require('@/assets/icons/gameProfile/polygon2.png')

const UserLevelProgress = () => {
  const theme = useTheme()
  const level = 10
  const points = 0

  const currentExperiencePointBracket = experienceBrackets[level === 10 ? level - 1 : level]
  const nextLevel = level === 10 ? level : level + 1

  return (
    <LevelProgressWrapper>
      <LevelProgressPrefixValueWrapper>
        <LevelProgressPrefixValueIconImage source={hexagonActive} />
        <LevelProgressPrefixValueText color={theme.tint}>{level} LVL</LevelProgressPrefixValueText>
      </LevelProgressPrefixValueWrapper>
      <LevelProgressSliderWrapper
      >
        <LevelProgressSliderValue>
          <LevelProgressSliderValue color={theme.tint}>{numberWithCommas(points)}</LevelProgressSliderValue>/
          {numberWithCommas(currentExperiencePointBracket)}xp
          <LevelProgressSliderSuffixIcon name='chevron-right' />
        </LevelProgressSliderValue>
      </LevelProgressSliderWrapper>
      <LevelProgressPrefixValueWrapper>
        <LevelProgressPrefixValueIconImage source={hexagonPassive} />
        <LevelProgressPrefixValueText>{nextLevel} LVL</LevelProgressPrefixValueText>
      </LevelProgressPrefixValueWrapper>

    </LevelProgressWrapper>
  )
}

export default compose(
  inject((context: Store) => ({
    user: context.UserStore.user,
  })),
)(UserLevelProgress)