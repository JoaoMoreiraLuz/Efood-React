import { Card, Infos, ProductImage, Rating, TitleDiv } from './style'

import Star from '../../assets/images/estrela.png'
import Tag from '../Tag'
import { Description, ProductTitle } from '../../styles'
import { Link } from 'react-router-dom'

type Props = {
  title: string
  description: string
  image: string
  rating: number
  info: string
  destaque: boolean
  id: number
}

const Product = ({
  title,
  description,
  image,
  rating,
  info,
  destaque,
  id
}: Props) => {
  const getDescription = (description: string) => {
    if (description.length > 272) {
      return description.slice(0, 269) + '...'
    }
    return description
  }

  return (
    <Link to={`/menu/${id}`}>
      <Card>
        <div>
          <ProductImage src={image} alt={title} />
        </div>
        <Infos>
          {destaque === true && <Tag>Destaque</Tag>}
          <Tag>{info}</Tag>
        </Infos>
        <TitleDiv>
          <ProductTitle>{title}</ProductTitle>
          <Rating>
            <ProductTitle>{rating}</ProductTitle>
            <img src={Star} alt="rating" />
          </Rating>
        </TitleDiv>
        <div>
          <Description>{getDescription(description)}</Description>
        </div>
        <Link to="/menu">
          <Tag>Saiba mais</Tag>
        </Link>
      </Card>
    </Link>
  )
}

export default Product
