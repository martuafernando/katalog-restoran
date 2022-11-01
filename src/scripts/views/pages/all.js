import dicodingRestaurantSource from '../../data/dicoding-restaurant-resource'
import { createRestaurantItemTemplate } from '../templates/template-creator'

const All = {
  async render () {
    return `
    <feature-list></feature-list>
    <section class="container-fluid">
      <div class="container" id="list-restoran">
        <h2>Mungkin Kamu Suka</h2>
        <p>Rekomendasi restoran untukmu</p>
        <div class="content" id="data-restaurant"> </div>
      </div>
    </section>
    `
  },

  async afterRender () {
    const restaurant = await dicodingRestaurantSource.all()
    const dataRestoranContainer = document.getElementById('data-restaurant')
    restaurant.forEach((restaurant) => {
      dataRestoranContainer.innerHTML += createRestaurantItemTemplate(restaurant)
    })
  }
}

export default All
