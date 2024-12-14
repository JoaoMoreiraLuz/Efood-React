import { Card, Infos, ProductImage, Rating, TitleDiv } from './style'

import Star from '../../assets/images/estrela.png'
import Tag from '../Tag'
import { Description, ProductTitle } from '../../styles'
import { Link } from 'react-router-dom'

type Props = {
  title: string
  description: string
  image: string
  rating: string
  infos: string[]
}

const Product = ({ title, description, image, rating, infos }: Props) => (
  <Card>
    <div>
      <ProductImage src={image} alt={title} />
    </div>
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <TitleDiv>
      <ProductTitle>{title}</ProductTitle>
      <Rating>
        <ProductTitle>{rating}</ProductTitle>
        <img src={Star} alt="rating" />
      </Rating>
    </TitleDiv>
    <div>
      <Description>{description}</Description>
    </div>
    <Link to="/menu">
      <Tag>Saiba mais</Tag>
    </Link>
  </Card>
)

export default Product
