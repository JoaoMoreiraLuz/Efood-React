import { useParams } from 'react-router-dom'
import Header from '../../components/Header'
import MenuList from '../../components/MenuList'
import { useEffect, useState } from 'react'
import { Restaurant } from '../Home'

const Menu = () => {
  const { id } = useParams()

  const [restaurant, setRestaurant] = useState<Restaurant>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurant(res))
  }, [id])

  return (
    <>
      <Header homePage={false} restaurantBanner={restaurant} />
      <MenuList pratos={restaurant?.cardapio} />
    </>
  )
}

export default Menu
