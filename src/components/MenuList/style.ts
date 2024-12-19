import styled from 'styled-components'
import { Cores } from '../../styles'
import { TagContainer } from '../Tag/style'

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  row-gap: 32px;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 1;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`

export const ModalContent = styled.div`
  padding: 32px;
  width: 1024px;
  height: 344px;
  position: relative;
  z-index: 1;
  display: flex;
  background-color: ${Cores.vermelho};
  color: ${Cores.branco};

  div {
    img {
      object-fit: cover;
      width: 280px;
      height: 280px;
      margin-right: 24px;
    }
  }

  h1 {
    margin-bottom: 16px;
    font-size: 18px;
    font-weight: 900;
  }

  p {
    margin-bottom: 16px;
    font-size: 14px;
    font-weight: 400;
  }
`

export const AddCarrinho = styled(TagContainer)`
  background-color: ${Cores.branco};
  color: ${Cores.vermelho};
  margin-left: 0;
`

export const Close = styled.img`
  max-height: 16px;
  max-width: 16px;
  position: absolute;
  top: 8px;
  right: 8px;
  margin-right: 0px;
  cursor: pointer;
`
