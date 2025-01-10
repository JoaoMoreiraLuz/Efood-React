import { Link } from 'react-router-dom'

import * as S from './style'
import Tag from '../Tag'
import { Description, ProductTitle } from '../../styles'

import Star from '../../assets/images/estrela.png'

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
      <S.Card>
        <div>
          <S.ProductImage src={image} alt={title} />
        </div>
        <S.Infos>
          {destaque === true && <Tag>Destaque</Tag>}
          <Tag>{info}</Tag>
        </S.Infos>
        <S.TitleDiv>
          <ProductTitle>{title}</ProductTitle>
          <S.Rating>
            <ProductTitle>{rating}</ProductTitle>
            <img src={Star} alt="rating" />
          </S.Rating>
        </S.TitleDiv>
        <div>
          <Description>{getDescription(description)}</Description>
        </div>
        <Link to={`/menu/${id}`}>
          <Tag>Saiba mais</Tag>
        </Link>
      </S.Card>
    </Link>
  )
}

export default Product
