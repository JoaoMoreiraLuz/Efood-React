import styled from 'styled-components'
import { Card } from '../Product/style'
import { colors } from '../../styles'
import { TagContainer } from '../Tag/style'

export const CardProduct = styled(Card)`
  padding: 8px;
  background-color: ${colors.red};
  color: ${colors.white};
  border-radius: 6px;
  cursor: pointer;

  img {
    object-fit: cover;
    width: 304px;
    height: 167px;
    border-radius: 6px;
  }
`

export const InfoButton = styled(TagContainer)`
  width: 100%;
  text-align: center;
  color: ${colors.red};
  background-color: ${colors.white};
  margin-left: 0;
  cursor: pointer;
  margin-bottom: 8px;
`
