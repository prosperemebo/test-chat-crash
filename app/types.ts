export interface DeepLink {
    path: string
    initial: boolean
}

export interface NotFoundProps {
    logout: () => void
}