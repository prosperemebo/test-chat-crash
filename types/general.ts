import StoreObj from '@/store'

export type Store = typeof StoreObj

export type ValuesAsKeys<T extends Record<any, PropertyKey>, NewValue> = Record<T[keyof T], NewValue>

export type StoreResponse = {
  success: boolean
  status: string
  message?: string
}

export const AppVersionStatusEnum = {
  FORCE: 2,
  OPTIONAL: 1,
  UP_TO_DATE: 0,
} as const

export type AppVersionStatusEnumType = typeof AppVersionStatusEnum[keyof typeof AppVersionStatusEnum]