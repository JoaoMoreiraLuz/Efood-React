import styled from 'styled-components'

export const Card = styled.div`
  max-width: 500px;
  max-height: 400px;
  background-color: #ffffff;
  border: 1px solid #e66767;
  border-top: none;
  position: relative;
`

export const ProductImage = styled.img`
  width: 100%;
`

export const TitleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
`

export const Rating = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-left: 8px;
    height: 21px;
    width: 21px;
  }
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
