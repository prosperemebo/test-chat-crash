
import { User } from '@/types'
import {
  aboutMeCondition,
  avatarCondition,
  isUserGalleryValid,
  coverCondition,
} from './conditions'

export const getProfileCompletionScore = (user: User) => {
  const conditions = {
    userBio: aboutMeCondition(user),
    userAvatar: avatarCondition(user),
    userGallery: isUserGalleryValid(user),
    userCover: coverCondition(user),
    userPlatforms: user?.platforms?.length > 0,
    userGenres: user?.genres?.length > 0,
  }
  const conditionValues = Object.values(conditions)

  const passedConditons = conditionValues.filter(condition => condition === true)

  const score = (passedConditons.length / conditionValues.length) * 100

  return Math.round(score / 10) * 10
}