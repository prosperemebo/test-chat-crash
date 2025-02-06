import React, { useCallback, forwardRef, useMemo } from 'react'
import ComposeChat from './ComposeChat'

import { BottomSheetModal, BottomSheetBackdrop, useBottomSheetModal } from '@gorhom/bottom-sheet'
import { ComposeChatBottomSheetModalWrapper } from './styles'
import { ComposeChatModalProps } from './types'

export type ComposeChatModalRef = BottomSheetModal

const ComposeChatModal = forwardRef<ComposeChatModalRef, ComposeChatModalProps>((props, ref) => {
  const snapPoints = useMemo(() => [70], [])

  const { dismiss } = useBottomSheetModal()

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop opacity={0.5} appearsOnIndex={0} disappearsOnIndex={-1} onPress={dismiss} {...props} />
    ),
    [],
  )

  return (
    <BottomSheetModal
      style={{ backgroundColor: 'red' }}
      backdropComponent={renderBackdrop}
      keyboardBehavior='interactive'
      keyboardBlurBehavior='restore'
      snapPoints={snapPoints}
      handleComponent={null}
      index={0}
      ref={ref}
    >
      <ComposeChatBottomSheetModalWrapper>
        <ComposeChat isBottomSheet disableAudio {...props} />
      </ComposeChatBottomSheetModalWrapper>
    </BottomSheetModal>
  )
})

ComposeChatModal.displayName = 'Compose Chat'

export default ComposeChatModal
