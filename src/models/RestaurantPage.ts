class RestaurantPage {
  title: string
  image: string
  infos: string[]
  id: number

  constructor(id: number, title: string, image: string, infos: string[]) {
    this.id = id
    this.title = title
    this.image = image
    this.infos = infos
  }
}

export default RestaurantPage
