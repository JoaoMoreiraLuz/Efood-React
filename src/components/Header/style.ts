import styled from 'styled-components'
import Vector from '../../assets/images/Vector.png'

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
`

export const RestaurantDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  img {
    margin-top: 64px;
    margin-left: 90px;
    margin-bottom: 65px;
  }
`

export const RestaurantTitle = styled.h2`
  font-size: 18px;
  font-weight: 900;
  margin-top: 82px;
  margin-bottom: 83px;
`
