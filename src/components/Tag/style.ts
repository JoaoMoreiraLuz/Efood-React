import { styled } from 'styled-components'
import { Props } from '.'
import { Cores } from '../../styles'

export const TagContainer = styled.div<Props>`
  background-color: ${Cores.vermelho};
  color: ${Cores.branco};
  font-size: ${(props) => (props.size === 'big' ? '14px' : '12px')};
  font-weight: 700;
  padding: ${(props) => (props.size === 'big' ? '4px 6px' : '6px 4px')};
  display: inline-block;
  margin-left: 8px;
`
