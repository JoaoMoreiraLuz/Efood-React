import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

import * as S from './style'
import Banner from '../Banner'
import headerImage from '../../assets/images/Vector.png'
import logo from '../../assets/images/logo.svg'

type Props = {
  homePage: boolean
  restaurantBanner?: Restaurant
}

const Header = ({ homePage, restaurantBanner }: Props) => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.HeaderImage style={{ backgroundImage: `url(${headerImage})` }}>
      {homePage ? (
        <>
          <S.HeaderDiv>
            <img src={logo} alt="EFOOD" />
            <S.Title>
              Viva experiências gastronômicas <br /> no conforto da sua casa
            </S.Title>
          </S.HeaderDiv>
        </>
      ) : (
        <>
          <div className="container">
            <S.RestaurantDiv>
              <Link to="/">
                <img className="mobileLogo" src={logo} alt="EFOOD" />
                <S.RestaurantTitle className="mobileTitle">
                  Restaurantes
                </S.RestaurantTitle>
              </Link>
              <Link to="/">
                <img src={logo} alt="EFOOD" />
              </Link>
              <S.RestaurantTitle onClick={openCart}>
                {items.length} produto(s) no carrinho
              </S.RestaurantTitle>
            </S.RestaurantDiv>
          </div>
          <div>
            <Banner
              title={restaurantBanner?.titulo}
              image={restaurantBanner?.capa}
              info={restaurantBanner?.tipo}
            />
          </div>
        </>
      )}
    </S.HeaderImage>
  )
}

export default Header
