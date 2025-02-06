import { AppVersionStatusEnum } from '@/types'

//TODO implement
export const useCheckAppVersion = () => {
  const type = AppVersionStatusEnum.UP_TO_DATE
  return {
    shouldShowAppUpdate: type !== AppVersionStatusEnum.UP_TO_DATE,
    type,
  }
}