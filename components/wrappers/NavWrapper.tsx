import { Slot } from 'expo-router'
import { Toast } from '@/components/common'

const Root = () => {
  return <>
    <Slot/>
    <Toast/>
  </>
}

export default Root