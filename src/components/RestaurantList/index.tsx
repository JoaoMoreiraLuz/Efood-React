import { ProductsContainer } from '../../styles'
import { List } from './style'
import Product from '../Product'

export type Props = {
  restaurants: Restaurant[]
}

const RestaurantList = ({ restaurants }: Props) => {
  return (
    <ProductsContainer>
      <div className="container">
        <List>
          {restaurants.map((restaurant) => (
            <li key={restaurant.id}>
              <Product
                id={restaurant.id}
                title={restaurant.titulo}
                description={restaurant.descricao}
                image={restaurant.capa}
                rating={restaurant.avaliacao}
                info={restaurant.tipo}
                destaque={restaurant.destacado}
              />
            </li>
          ))}
        </List>
      </div>
    </ProductsContainer>
  )
}

export default RestaurantList
