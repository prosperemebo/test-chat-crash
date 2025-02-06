import { OnboardingStore, ToastStore } from '@/store'
import analytics from '@/services/analytics'
import { useRouter, Href } from 'expo-router'
import { OnboardingDTO } from '@/services/api'
import i18n from '@/localization/i18n'
import { ONBOARDING_STEPS } from '@/constants/nav'
import { StoreResponse } from '@/types'

export const useOnboarding = () => {
  const {
    finishOnboardingProcess, getOnboardingProgress, submitOnboardingDataStep,
    increaseCurrentStepIndex, decreasecreaseCurrentStepIndex,
  } = OnboardingStore
  const { showToast } = ToastStore

  const router = useRouter()

  const { currentStep, steps, completeSteps, progress, nextStep } = getOnboardingProgress()

  const finishOnboarding = async () => {
    try {
      await finishOnboardingProcess()
      analytics.onboarding.logOBComplete()

      router.replace('/(app)')
    } catch (error) {
      console.error('useOnboarding: ', error)
      handleError(i18n.t('errors:errorOccurs'))
    }
  }

  const handleError = (error: string) => {
    showToast(error)
  }

  const submitOnboardingData = async (step: ONBOARDING_STEPS, data: Partial<OnboardingDTO>): Promise<StoreResponse> => {
    try {
      const result = await submitOnboardingDataStep(step, data)
      //todo check error
      return result
    } catch (error) {
      console.error('useOnboarding: ', error)
      handleError(i18n.t('errors:errorOccurs'))

      return {
        success: false,
        status: '',
        message: 'errorOccurs',
      }
    }
  }

  const goBack = () => {
    if (!router.canGoBack()) return

    decreasecreaseCurrentStepIndex()
    router.back()
  }

  const goNext = () => {
    if (nextStep) {
      increaseCurrentStepIndex()
      router.push(`/auth/onboarding/${nextStep.name}` as Href)
      return
    }
    finishOnboarding()
  }


  const currentStepName = currentStep.name

  return {
    goBack,
    goNext,
    currentStep: currentStepName,
    submitOnboardingData,
    steps,
    completeSteps,
    progress,
  }
}