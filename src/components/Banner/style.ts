import { styled } from 'styled-components'
import { Cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  &::after {
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
    opacity: 0.56;
  }

  .container {
    z-index: 1;
    position: relative;
  }
`

export const InfoTitle = styled.h2`
  font-size: 32px;
  font-weight: 100;
  color: ${Cores.branco};
  padding-top: 25px;
`
export const Title = styled.h1`
  font-size: 32px;
  font-weight: 900;
  color: ${Cores.branco};
  padding-top: 156px;
`
