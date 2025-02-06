import styled from 'styled-components/native'

export const PrimaryHeading = styled.Text<{ color?: string, textAlign?: string }>`
  color: ${props => props.color};
  text-align: ${props => props.textAlign || 'left'};
  font-size: 18px;
  font-style: normal;
  font-family: 'Poppins-Bold';
`

export const PrimaryHeadingLarge = styled(PrimaryHeading)`
  font-size: 20px;
`

export const PrimaryHeadingHuge = styled(PrimaryHeading)`
  font-size: 28px;
`

export const SecondaryHeading = styled.Text<{ color?: string, textAlign?: string, align?: string, textTransform?: string }>`
  color: ${props => props.color || props.theme.primaryTextColor};
  text-align: ${props => props.textAlign || props.align || 'left'};
  font-size: 13px;
  font-style: normal;
  letter-spacing: 1.2px;
  text-transform: ${props => props.textTransform || 'uppercase'};
  font-family: 'Poppins-Bold';
`

export const TertiaryHeading = styled.Text<{ color?: string, textAlign?: string, align?: string }>`
  color: ${props => props.color || props.theme.primaryTextColor};
  text-align: ${props => props.textAlign || props.align || 'left'};
  font-family: 'Poppins-Regular';
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
`

export const BoldTertiaryHeading = styled(TertiaryHeading)`
  font-family: 'Poppins-Bold';
`

export const TitleText = styled.Text<{ color?: string, textAlign?: string, align?: string }>`
  color: ${props => props.color || props.theme.primaryTextColor};
  text-align: ${props => props.textAlign || props.align || 'left'};
  font-family: 'Poppins-Bold';
  font-size: 15px;
`

export const InfoText = styled.Text<{ color?: string, fontSize?: string }>`
  color: ${props => props.color || props.theme.common.infoTextColor};
  font-size: ${props => props.fontSize || '13px'};
  font-style: normal;
  font-family: 'Poppins-Regular';
  font-weight: 300;
  line-height: 22px;
`

export const SmallText = styled.Text<{ color?: string }>`
  color: ${props => props.color || props.theme.primaryTextColor};
  text-align: center;
  font-size: 12px;
  letter-spacing: 0.12px;
  font-family: 'Poppins-Bold';
`

export const SmallTextLight = styled(SmallText)`
  font-weight: 400;
  letter-spacing: 0px;
  font-family: 'Poppins-Regular';
`

export const TooltipText = styled.Text<{ color?: string, fontFamily?: string }>`
  color: ${props => props.color || props.theme.primaryTextColor};
  font-size: 10px;
  letter-spacing: 0.16px;
  font-family: ${props => props.fontFamily || 'Poppins-Bold'};
  text-transform: uppercase;
`
