import { Imagem, InfoTitle, Title } from './style'

type Props = {
  title?: string
  image?: string
  info?: string
}

const Banner = ({ image, title, info }: Props) => (
  <Imagem style={{ backgroundImage: `url(${image})` }}>
    <div className="container">
      <InfoTitle>{info}</InfoTitle>
      <Title>{title}</Title>
    </div>
  </Imagem>
)

export default Banner
