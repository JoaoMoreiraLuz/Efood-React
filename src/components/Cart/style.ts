import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import lixeira from '../../assets/images/lixeira.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${colors.red};
  z-index: 1;
  padding: 16px 8px 0 8px;
  max-width: 360px;
  width: 100%;

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 250px;
  }
`

export const EmptyMessage = styled.p`
  text-align: center;
  color: ${colors.white};
  margin-top: 30px;
`

export const CartItem = styled.li`
  margin-top: 16px;
  position: relative;
  display: flex;
  padding: 8px 8px 12px 8px;
  background-color: ${colors.offWhite};

  img {
    object-fit: cover;
    height: 80px;
    width: 80px;
    margin-right: 8px;
  }

  h3 {
    font-size: 19px;
    font-weight: 900;
    margin-bottom: 16px;
  }

  span {
    font-size: 14px;
    font-weight: 400;
  }

  button {
    background-image: url(${lixeira});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    top: 76px;
    right: 8px;
    cursor: pointer;
  }
`

export const Prices = styled.p`
  display: flex;
  justify-content: space-between;
  color: ${colors.white};
  font-size: 14px;
  font-weight: 700;
  margin-top: 40px;
  margin-bottom: 16px;
`
