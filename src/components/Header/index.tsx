import {
  HeaderDiv,
  HeaderImage,
  RestaurantDiv,
  RestaurantTitle,
  Title
} from './style'
import headerImage from '../../assets/images/Vector.png'
import logo from '../../assets/images/logo.svg'
import Banner from '../Banner'
import { Link } from 'react-router-dom'
import { Restaurant } from '../../Pages/Home'

type Props = {
  homePage: boolean
  restaurantBanner?: Restaurant
}

const Header = ({ homePage, restaurantBanner }: Props) => (
  <HeaderImage style={{ backgroundImage: `url(${headerImage})` }}>
    {homePage ? (
      <>
        <HeaderDiv>
          <img src={logo} alt="EFOOD" />
          <Title>
            Viva experiências gastronômicas <br /> no conforto da sua casa
          </Title>
        </HeaderDiv>
      </>
    ) : (
      <>
        <div className="container">
          <RestaurantDiv>
            <Link to="/">
              <RestaurantTitle>Restaurantes</RestaurantTitle>
            </Link>
            <Link to="/">
              <img src={logo} alt="EFOOD" />
            </Link>
            <RestaurantTitle>0 produto(s) no carrinho</RestaurantTitle>
          </RestaurantDiv>
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
  </HeaderImage>
)

export default Header
