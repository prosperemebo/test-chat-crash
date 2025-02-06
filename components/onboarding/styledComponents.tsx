import styled from 'styled-components/native'
import { ImageSourcePropType } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

type ItemProp = {
  itemIcon: ImageSourcePropType
  itemIcon2: ImageSourcePropType
  itemWidth: number
  itemHeight: number
  label: string
}

type ButtonIconType = {
  itemWidth: number
  itemHeight: number
}

type ButtonLabelType = {
  isSelected?: boolean
}

export const Background = styled.View`
    flex: 1;
    background-color: ${props => props.theme.serviceBg};
`

export const ScrollWrapper = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    flexGrow: 1,
    alignItems: 'center',
  },
}))`
  height: 100%;
  width: 100%;
  padding-horizontal: 10px;
`

const SelectedButton = styled(LinearGradient).attrs(props => {
  return {
    colors: [props.theme.common.gradientButtonColorStart, props.theme.common.gradientButtonColorEnd],
    start: { x: 0, y: 1 },
    end: { x: 1, y: 0 },
  }
})`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`

const DisabledButton = styled.View`
  background-color: #28292e;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  align-items: center;
  justify-content: center;

  border: 1px solid #313236;
`

const ButtonIcon = styled.Image<ButtonIconType>`
  width: ${props => props.itemWidth}px;
  height: ${props => props.itemHeight}px;
  padding: 15px;
  margin-bottom: 10px;
`

const ButtonLabel = styled.Text<ButtonLabelType>`
  font-weight: 400;
  font-family: 'Poppins-Regular';
  font-size: 14px;
  color: ${props => (props.isSelected ? props.theme.onboarding.selectedItemTextColor : props.theme.onboarding.disabledItemTextColor)};
`

export const SelectedItem = (props: ItemProp) => {
  const { itemIcon2, itemWidth, itemHeight, label } = props

  // @ts-ignore
  return <SelectedButton>
    <ButtonIcon source={itemIcon2} itemWidth={itemWidth} itemHeight={itemHeight}/>
    <ButtonLabel isSelected={true}>{label}</ButtonLabel>
  </SelectedButton>
}

export const DisabledItem = (props: ItemProp) => {
  const { itemIcon, itemWidth, itemHeight, label } = props

  return <DisabledButton>
    <ButtonIcon source={itemIcon} itemWidth={itemWidth} itemHeight={itemHeight}/>
    <ButtonLabel>{label}</ButtonLabel>
  </DisabledButton>
}