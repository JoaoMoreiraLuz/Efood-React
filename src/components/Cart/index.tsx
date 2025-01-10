import { useDispatch, useSelector } from 'react-redux'

import { remove, close, isBuyingFalse } from '../../store/reducers/cart'
import { RootReducer } from '../../store'
import { formatPrice, getTotalPrice } from '../../utils'

import * as S from './style'
import Checkout from '../Checkout'
import Button from '../Button'

const Cart = () => {
  const dispatch = useDispatch()

  const showCheck = () => {
    dispatch(isBuyingFalse())
  }

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const { isOpen, items, isBuying } = useSelector(
    (state: RootReducer) => state.cart
  )

  if (isBuying === false)
    return (
      <S.CartContainer className={isOpen ? 'is-open' : ''}>
        <S.Overlay onClick={closeCart} />
        <S.Sidebar>
          <Checkout />
        </S.Sidebar>
      </S.CartContainer>
    )

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      {items.length === 0 ? (
        <S.Sidebar>
          <S.EmptyMessage>Seu carrinho está vazio</S.EmptyMessage>
        </S.Sidebar>
      ) : (
        <S.Sidebar>
          <ul>
            {items.map((item) => (
              <S.CartItem key={item.id}>
                <img src={item.foto} alt={item.nome} />
                <div>
                  <h3>{item.nome}</h3>
                  <span>{formatPrice(item.preco)}</span>
                </div>
                <button onClick={() => removeItem(item.id)} />
              </S.CartItem>
            ))}
          </ul>
          <div>
            <S.Prices>
              Preço total <span>{formatPrice(getTotalPrice(items))}</span>
            </S.Prices>
          </div>
          <Button type="button" maxWidth="100%" onClick={showCheck}>
            Continuar com a entrega
          </Button>
        </S.Sidebar>
      )}
    </S.CartContainer>
  )
}

export default Cart
