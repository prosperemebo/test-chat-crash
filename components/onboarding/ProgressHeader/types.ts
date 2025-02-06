export interface ProgressHeaderProps {
    goBack: () => void
    steps: number,
    progress: number,
    completeSteps: number
}