import { styled } from 'styled-components'
import { Cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
`

export const DivDarker = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  padding-bottom: 13px;
`
export const InfoTitle = styled.h2`
  font-size: 32px;
  font-weight: 100;
  color: ${Cores.branco};
  padding-top: 25px;
  padding-left: 170px;
`
export const Title = styled.h1`
  font-size: 32px;
  font-weight: 900;
  color: ${Cores.branco};
  padding-top: 156px;
  padding-left: 170px;
`
