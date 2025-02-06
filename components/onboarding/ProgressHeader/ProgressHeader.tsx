import i18n from '@/localization/i18n'
import { Container, Icon, IconContainer, Header, Progress, ProgressLabel, LabelContainer, Label, Bar, BarInner } from './styles'
import { ProgressHeaderProps } from './types'

const BackIcon = require('@/assets/images/onboarding/back_button.png')

const ProgressHeader = ({ goBack, steps, progress, completeSteps }: ProgressHeaderProps) => {
  const progressText = i18n.t('onb:progress', {
    stepProgress: completeSteps + 1,
    steps,
  }).toUpperCase()

  return <Container>
    <Progress>
      <Header>
        <IconContainer onPress={goBack}>
          <Icon size={2} source={BackIcon} />
        </IconContainer>
        <ProgressLabel>{i18n.t('login:register')}</ProgressLabel>
        <LabelContainer>
          <Label>
            {progressText}
          </Label>
        </LabelContainer>
      </Header>
      <Bar>
        <BarInner progress={progress} />
      </Bar>
    </Progress>
  </Container>
}


export default ProgressHeader