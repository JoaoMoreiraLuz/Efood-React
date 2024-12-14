import Plate from '../../models/Plate'
import { ProductsContainer } from '../../styles'
import MenuProduct from '../MenuProduct'
import { List } from './style'

export type Props = {
  plates: Plate[]
}

const MenuList = ({ plates }: Props) => (
  <ProductsContainer>
    <div className="container">
      <List>
        {plates.map((plate) => (
          <MenuProduct
            key={plate.id}
            title={plate.title}
            description={plate.description}
            image={plate.image}
          />
        ))}
      </List>
    </div>
  </ProductsContainer>
)

export default MenuList
