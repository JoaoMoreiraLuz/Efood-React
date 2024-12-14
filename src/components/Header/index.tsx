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
import RestaurantPage from '../../models/RestaurantPage'
import { Link } from 'react-router-dom'

type Props = {
  homePage: boolean
  restaurantPages: RestaurantPage[]
}

const Header = ({ homePage, restaurantPages }: Props) => (
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
        <RestaurantDiv>
          <RestaurantTitle>Restaurantes</RestaurantTitle>
          <Link to="/">
            <img src={logo} alt="EFOOD" />
          </Link>
          <RestaurantTitle>0 produto(s) no carrinho</RestaurantTitle>
        </RestaurantDiv>
        <div>
          {restaurantPages.map((restaurantpage) => (
            <Banner
              key={restaurantpage.id}
              title={restaurantpage.title}
              image={restaurantpage.image}
              infos={restaurantpage.infos}
            />
          ))}
        </div>
      </>
    )}
  </HeaderImage>
)

export default Header
