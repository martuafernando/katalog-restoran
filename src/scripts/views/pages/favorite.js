import favoriteDicodingRestaurantSource from '../../data/favorite-restaurant-idb'
import { createRestaurantItemTemplate } from '../templates/template-creator'

const Favorite = {
  async render () {
    return `
    <feature-list></feature-list>
    <section class="container-fluid">
      <div class="container" id="list-restoran">
        <h2>Mungkin Kamu Suka</h2>
        <p>Restoran favorit kamu</p>
        <div class="content" id="data-restaurant"> </div>
      </div>
    </section>
    `
  },

  async afterRender () {
    const restaurant = await favoriteDicodingRestaurantSource.getAllRestaurants()
    const dataRestoranContainer = document.getElementById('data-restaurant')
    restaurant.forEach((restaurant) => {
      dataRestoranContainer.innerHTML += createRestaurantItemTemplate(restaurant)
    })
  }
}

export default Favorite
