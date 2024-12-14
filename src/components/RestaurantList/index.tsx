import Restaurant from '../../models/Restaurant'
import { ProductsContainer } from '../../styles'
import Product from '../Product'
import { List } from './style'

export type Props = {
  restaurants: Restaurant[]
}

const RestaurantList = ({ restaurants }: Props) => (
  <ProductsContainer>
    <div className="container">
      <List>
        {restaurants.map((restaurant) => (
          <Product
            key={restaurant.id}
            title={restaurant.title}
            description={restaurant.description}
            image={restaurant.image}
            rating={restaurant.rating}
            infos={restaurant.infos}
          />
        ))}
      </List>
    </div>
  </ProductsContainer>
)

export default RestaurantList
