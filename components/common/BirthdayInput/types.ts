export interface BirthdayInputProps {
  error?: string
  value?: string | Date
  onChange: (value: string) => void
}