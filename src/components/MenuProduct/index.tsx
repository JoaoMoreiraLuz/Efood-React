import { Description, ProductTitle } from '../../styles'
import * as S from './style'

type Props = {
  title: string
  description: string
  image: string
  id: number
}

const MenuProduct = ({ title, image, description }: Props) => {
  const getDescription = (description: string) => {
    if (description.length > 140) {
      return description.slice(0, 137) + '...'
    }
    return description
  }

  return (
    <S.CardProduct>
      <div>
        <img src={image} alt={title} />
      </div>
      <div>
        <ProductTitle>{title}</ProductTitle>
      </div>
      <div>
        <Description>{getDescription(description)}</Description>
      </div>
      <S.InfoButton>Saiba mais</S.InfoButton>
    </S.CardProduct>
  )
}

export default MenuProduct
