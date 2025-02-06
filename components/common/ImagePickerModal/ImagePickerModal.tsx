import { useCallback } from "react"
import {
  StyledModal,
  ModalContainer,
  ModalDialogueLabel,
  ModalOptionsContainer,
  ModalElementContainer,
  ModalButton,
  ModalButtonIcon,
  ModalButtonLabel
} from "./styles"
import i18n from "@/localization/i18n"
import CustomImagePicker from "./CustomImagePicker"
import { ImagePickerModalProps } from "./types"

const ImagePickerModal = ({ isOpen, onSend, onClose, onSendLink, type }: ImagePickerModalProps) => {
  const isAvatarPhotoSize = type === 'avatar' || type === 'gallery'
  const openGallery = useCallback(() => {
    isAvatarPhotoSize
      ? CustomImagePicker.pickSingleImage(onSend)
      : CustomImagePicker.pickCoverImage(onSend)
  }, [onSend, type])

  const openCamera = useCallback(() => {
    isAvatarPhotoSize
      ? CustomImagePicker.pickSingleWithCamera(onSend)
      : CustomImagePicker.pickCoverImageWithCamera(onSend)
  }, [onSend, type])

  return (
    <StyledModal
      isVisible={isOpen}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      backButtonClose={true}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <ModalContainer>
        <ModalDialogueLabel>{i18n.t('profile:changeAvatar')}</ModalDialogueLabel>

        <ModalOptionsContainer>
          <ModalElementContainer>
            <ModalButton onPress={openCamera}>
              <ModalButtonIcon name='camera' size={20} />
            </ModalButton>

            <ModalButtonLabel>{i18n.t('profile:camera')}</ModalButtonLabel>
          </ModalElementContainer>

          <ModalElementContainer>
            <ModalButton onPress={openGallery}>
              <ModalButtonIcon name='folder' size={20} />
            </ModalButton>

            <ModalButtonLabel>{i18n.t('profile:gallery')}</ModalButtonLabel>
          </ModalElementContainer>

          {onSendLink && (
            <ModalElementContainer>
              <ModalButton onPress={onClose}>
                <ModalButtonIcon name='web' size={20} />
              </ModalButton>

              <ModalButtonLabel>{i18n.t('profile:link')}</ModalButtonLabel>
            </ModalElementContainer>
          )}
        </ModalOptionsContainer>
      </ModalContainer>
    </StyledModal>
  )
}

export default ImagePickerModal