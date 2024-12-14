import { Description, ProductTitle } from '../../styles'
import { AddCarrinho, CardProduct } from './style'

type Props = {
  title: string
  description: string
  image: string
}

const MenuProduct = ({ title, image, description }: Props) => (
  <CardProduct>
    <div>
      <img src={image} alt={title} />
    </div>
    <div>
      <ProductTitle>{title}</ProductTitle>
    </div>
    <div>
      <Description>{description}</Description>
    </div>
    <AddCarrinho>Adicionar ao carrinho</AddCarrinho>
  </CardProduct>
)

export default MenuProduct
