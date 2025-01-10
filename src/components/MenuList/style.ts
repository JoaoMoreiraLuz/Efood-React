import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  row-gap: 32px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    column-gap: 0;
  }
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

    @media (max-width: ${breakpoints.tablet}) {
      display: block;
    }
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
  background-color: ${colors.red};
  color: ${colors.white};

  @media (max-width: ${breakpoints.tablet}) {
    width: auto;
    height: auto;
    margin: 30px;
  }

  div {
    img {
      object-fit: cover;
      width: 280px;
      height: 280px;
      margin-right: 24px;

      @media (max-width: ${breakpoints.tablet}) {
        width: 250px;
        height: 250px;
        border-radius: 8px;
      }
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

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }
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
