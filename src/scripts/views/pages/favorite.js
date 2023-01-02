import favoriteDicodingRestaurantSource from '../../data/favorite-restaurant-idb'
import { createRestaurantItemTemplate } from '../templates/template-creator'

const Favorite = {
  async render () {
    return `
    <feature-list></feature-list>
    <section class="container-fluid">
      <div class="container" id="list-restoran" tabindex="0">
        <h2>Restoran Favorit</h2>
        <p>Restoran favorit yang kamu pilih</p>
        <div class="content" id="data-restaurant"> </div>
      </div>
    </section>
    `
  },

  async afterRender () {
    document.getElementsByTagName('loading-indicator')[0].setAttribute('active', 'true')
    const restaurant = await favoriteDicodingRestaurantSource.getAllRestaurants()
    const dataRestoranContainer = document.getElementById('data-restaurant')
    restaurant.forEach((restaurant) => {
      dataRestoranContainer.innerHTML += createRestaurantItemTemplate(restaurant)
    })
    document.getElementsByTagName('loading-indicator')[0].removeAttribute('active')
  }
}

export default Favorite
