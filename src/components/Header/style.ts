import styled from 'styled-components'
import Vector from '../../assets/images/Vector.png'
import { breakpoints, colors } from '../../styles'

export const HeaderImage = styled.header`
  background-image: ${Vector};
  background-repeat: no-repeat;
  background-size: cover;
`

export const HeaderDiv = styled.div`
  align-items: center;
  flex-direction: column;
  display: flex;

  img {
    max-width: 125px;
    margin-top: 64px;
  }
`

export const Title = styled.h1`
  margin-top: 138px;
  margin-bottom: 40px;
  font-weight: 900;
  size: 36px;
  text-align: center;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 26px;
    margin-top: 30px;
  }
`

export const RestaurantDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (min-width: ${breakpoints.desktop}) {
    img {
      margin-top: 64px;
      margin-left: 90px;
      margin-bottom: 65px;
    }
    .mobileLogo {
      display: none;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
    justify-items: center;
    padding-top: 50px;

    img {
      display: none;
      margin-top: 0px;
      margin-left: 0px;
      margin-bottom: 30px;
    }

    .mobileLogo {
      display: block;
    }

    .mobileTitle {
      display: none;
    }
  }
`

export const RestaurantTitle = styled.h2`
  font-size: 18px;
  font-weight: 900;
  text-decoration: none;
  color: ${colors.red};
  cursor: pointer;

  @media (min-width: ${breakpoints.desktop}) {
    margin-top: 82px;
    margin-bottom: 83px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 0px;
    margin-bottom: 30px;
  }
`
