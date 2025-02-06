import { Wrapper } from './styles'
import { Button } from '@/components/common'
import { ProgressButtonProps } from './types'

const ProgressButton = ({ onPress, disabled, title, loading }: ProgressButtonProps) => (
  <Wrapper>
    <Button
      title={title}
      type={'yellow'}
      disabled={disabled}
      onPress={onPress}
      withGradient
      loading={loading}
    />
  </Wrapper>
)

export default ProgressButton