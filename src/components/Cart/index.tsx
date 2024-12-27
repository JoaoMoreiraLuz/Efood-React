import { useDispatch, useSelector } from 'react-redux'
import { CartContainer, CartItem, Overlay, Prices, Sidebar } from './style'
import { remove, close } from '../../store/reducers/cart'
import { RootReducer } from '../../store'
import { formataPreco } from '../MenuList'
import { AddCarrinho } from '../MenuProduct/style'

const Cart = () => {
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return items.reduce((acc, preco) => {
      return (acc += preco.preco!)
    }, 0)
  }

  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <span>{formataPreco(item.preco)}</span>
              </div>
              <button onClick={() => removeItem(item.id)} />
            </CartItem>
          ))}
        </ul>
        <div>
          <Prices>
            Preço total <span>{formataPreco(getTotalPrice())}</span>
          </Prices>
        </div>
        <AddCarrinho>Continuar com a entrega</AddCarrinho>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
