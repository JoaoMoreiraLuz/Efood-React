import {
  Copyright,
  FooterContainer,
  SocialMedias,
  SocialMediasLogo
} from './style'
import logo from '../../assets/images/logo.svg'
import facebook from '../../assets/images/facebook.svg'
import instagram from '../../assets/images/instagram.svg'
import Twitter from '../../assets/images/Twitter.svg'

const Footer = () => (
  <FooterContainer>
    <img src={logo} alt="EFOOD" />
    <SocialMedias>
      <SocialMediasLogo src={instagram} alt="Instagram" />
      <SocialMediasLogo src={facebook} alt="Facebook" />
      <SocialMediasLogo src={Twitter} alt="Twitter" />
    </SocialMedias>
    <div>
      <Copyright>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
        estabelecimento contratado.{' '}
      </Copyright>
    </div>
  </FooterContainer>
)

export default Footer
