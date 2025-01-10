import { styled } from 'styled-components'
import { Props } from '.'
import { colors } from '../../styles'

export const ButtonContainer = styled.div<Props>`
  background-color: ${colors.white};
  color: ${colors.red};
  font-size: 14px;
  font-weight: 700;
  padding: 4px 6px;
  margin-left: 0;
  cursor: pointer;
  max-width: ${(props) => props.maxWidth || 'auto'};
  text-align: center;
  margin-bottom: 8px;
`
