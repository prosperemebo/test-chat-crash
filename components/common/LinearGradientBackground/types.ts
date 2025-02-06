
export interface LinearGradientBackgroundProps {
    colors: string[]
    start?: {
        x: number
        y: number
    }
    locations?: [number, number]
    children?: React.ReactNode
}