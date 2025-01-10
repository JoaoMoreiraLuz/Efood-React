import * as S from './style'

import logo from '../../assets/images/logo.svg'
import facebook from '../../assets/images/facebook.svg'
import instagram from '../../assets/images/instagram.svg'
import Twitter from '../../assets/images/Twitter.svg'

const Footer = () => (
  <S.FooterContainer>
    <img src={logo} alt="EFOOD" />
    <S.SocialMedias>
      <S.SocialMediasLogo src={instagram} alt="Instagram" />
      <S.SocialMediasLogo src={facebook} alt="Facebook" />
      <S.SocialMediasLogo src={Twitter} alt="Twitter" />
    </S.SocialMedias>
    <div>
      <S.Copyright>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
        estabelecimento contratado.{' '}
      </S.Copyright>
    </div>
  </S.FooterContainer>
)

export default Footer
