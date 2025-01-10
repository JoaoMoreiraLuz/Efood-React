import { useGetRestaurantsQuery } from '../../services/api'

import Header from '../../components/Header'
import Loader from '../../components/Loader'
import RestaurantList from '../../components/RestaurantList'

const Home = () => {
  const { data: restaurants } = useGetRestaurantsQuery()

  if (!restaurants) {
    return <Loader />
  }
  return (
    <>
      <Header homePage={true} />
      <RestaurantList restaurants={restaurants || []} />
    </>
  )
}

export default Home
