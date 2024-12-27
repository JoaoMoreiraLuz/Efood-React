import { useParams } from 'react-router-dom'
import Header from '../../components/Header'
import { useGetMenuItemQuery } from '../../services/api'
import MenuList from '../../components/MenuList'

const Menu = () => {
  const { id } = useParams()
  const { data: Menu } = useGetMenuItemQuery(id!)

  if (!Menu) {
    return <h3>Carregando...</h3>
  }
  return (
    <>
      <Header homePage={false} restaurantBanner={Menu} />
      <MenuList pratos={Menu?.cardapio} />
    </>
  )
}

export default Menu
