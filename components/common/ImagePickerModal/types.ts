export interface ImagePickerModalProps {
  isOpen: boolean
  onSend: (value: any) => void
  onClose: () => void
  onSendLink?: boolean
  type: 'avatar' | 'gallery' | 'cover' | ''
}

export interface File {
  uri: string
  name: string
  type: string
}

export type Callback = (file: File) => void
