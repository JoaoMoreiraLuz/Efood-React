import { useParams } from 'react-router-dom'

import { useGetMenuItemQuery } from '../../services/api'

import Header from '../../components/Header'
import MenuList from '../../components/MenuList'
import Loader from '../../components/Loader'

type MenuParams = {
  id: string
}

const Menu = () => {
  const { id } = useParams() as MenuParams
  const { data: Menu } = useGetMenuItemQuery(id)

  if (!Menu) {
    return <Loader />
  }
  return (
    <>
      <Header homePage={false} restaurantBanner={Menu} />
      <MenuList pratos={Menu?.cardapio} />
    </>
  )
}

export default Menu
