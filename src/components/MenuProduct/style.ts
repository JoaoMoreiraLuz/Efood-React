import styled from 'styled-components'
import { Card } from '../Product/style'
import { Cores } from '../../styles'
import { TagContainer } from '../Tag/style'

export const CardProduct = styled(Card)`
  padding: 8px;
  background-color: ${Cores.vermelho};
  color: ${Cores.branco};
  border-radius: 6px;
  cursor: pointer;

  img {
    object-fit: cover;
    width: 304px;
    height: 167px;
    border-radius: 6px;
  }
`

export const AddCarrinho = styled(TagContainer)`
  width: 100%;
  text-align: center;
  color: ${Cores.vermelho};
  background-color: ${Cores.branco};
  margin-left: 0;
`
