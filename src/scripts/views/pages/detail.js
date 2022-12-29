import dicodingRestaurantSource from '../../data/dicoding-restaurant-resource'
import UrlParser from '../../routes/url-parser'
import LikeButtonInitiator from '../../utils/like-button-initiator'
import { createRestaurantDetailTemplate, createLikeButtonTemplate } from '../templates/template-creator'

const Detail = {
  async render () {
    return `
    <section class="container-fluid" id="detail">
      <div class="container">
        <div id="data-restaurant"></div>
      </div>
      <div id="likeButtonContainer"></div>
    </section>
    `
  },

  async afterRender () {
    document.getElementsByTagName('loading-indicator')[0].setAttribute('active', 'true')
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const restaurant = await dicodingRestaurantSource.detailRestaurant(url.id)
    const dataRestoranContainer = document.getElementById('data-restaurant')
    dataRestoranContainer.innerHTML += createRestaurantDetailTemplate(restaurant)

    const likeButtonContainer = document.querySelector('#likeButtonContainer')
    likeButtonContainer.innerHTML = createLikeButtonTemplate()

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant
    })
    document.getElementsByTagName('loading-indicator')[0].removeAttribute('active')
  }
}

export default Detail
