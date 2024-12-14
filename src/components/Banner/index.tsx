import { DivDarker, Imagem, InfoTitle, Title } from './style'

type Props = {
  title: string
  image: string
  infos: string[]
}

const Banner = ({ image, title, infos }: Props) => (
  <Imagem style={{ backgroundImage: `url(${image})` }}>
    <DivDarker>
      {infos.map((info) => (
        <InfoTitle key={info}>{info}</InfoTitle>
      ))}
      <Title>{title}</Title>
    </DivDarker>
  </Imagem>
)

export default Banner
