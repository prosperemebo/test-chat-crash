import { Background } from '@/components/onboarding'
import { PageContainer, LocationPermission as LocationPermissionBlock } from '@/components/common'
import { useRouter } from 'expo-router'
import { Store } from '@/types'
import compose from 'lodash/flowRight'
import { inject } from 'mobx-react'
import { LocationPermissionProps } from './types'

const LocationPermission = ({ updateLocation, skipPermission }: LocationPermissionProps) => {
  const router = useRouter()
  const goBack = () => {
    if (!router.canGoBack()) return

    router.back()
  }

  const acceptLocationPermission = async () => {
    await updateLocation()
    goBack()
  }

  const skipLocationPermission = async () => {
    await skipPermission()
    goBack()
  }

  return <Background>
    <PageContainer>
      <LocationPermissionBlock onAccept={acceptLocationPermission} onCancel={skipLocationPermission} />
    </PageContainer>
  </Background>
}


export default compose(
  inject((context: Store) => ({
    updateLocation: context.LocationStore.updateLocation,
    skipPermission: context.LocationStore.skipPermission,
  })),
)(LocationPermission)