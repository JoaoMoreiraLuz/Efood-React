import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.offWhite};

  img {
    max-width: 125px;
    padding-top: 40px;
  }
`

export const SocialMedias = styled.div`
  display: flex;
`

export const SocialMediasLogo = styled.img`
  padding: 0 4px;
`

export const Copyright = styled.p`
  font-size: 10px;
  font-weight: 400;
  padding-top: 80px;
  padding-bottom: 40px;
  text-align: center;
`
