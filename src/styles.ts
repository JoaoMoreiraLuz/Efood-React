import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
  red: '#E66767',
  white: '#FFF8F2',
  offWhite: '#FFEBD9'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        list-style: none;
        text-decoration: none;
    }

    body {
        background-color: ${colors.white};
        color: ${colors.red};
    }

    .container {
        max-width: 1024px;
        width: 100%;
        margin: 0 auto;
        
        @media (max-width: ${breakpoints.desktop}) {
          max-width: 85%;
        }
    }

`

export const ProductTitle = styled.h2`
  font-weight: 700;
  font-size: 18px;
  margin-left: -1px;
`

export const Description = styled.p`
  padding: 8px;
  font-size: 14px;
  font-weight: 500;
`

export const ProductsContainer = styled.div`
  padding: 80px 0 120px 0;
`
