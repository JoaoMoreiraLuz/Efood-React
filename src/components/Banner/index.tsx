import * as S from './style'

type Props = {
  title?: string
  image?: string
  info?: string
}

const Banner = ({ image, title, info }: Props) => (
  <S.Image style={{ backgroundImage: `url(${image})` }}>
    <div className="container">
      <S.InfoTitle>{info}</S.InfoTitle>
      <S.Title>{title}</S.Title>
    </div>
  </S.Image>
)

export default Banner
