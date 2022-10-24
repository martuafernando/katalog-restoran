import CONFIG from '../../globals/config'
import ratingToStar from '../../utils/rating-to-star'

const createRestaurantItemTemplate = (restaurant) => `
<a href="/#/detail/${restaurant.id}">
  <div class="item" tabindex="0">
    <img src="${CONFIG.BASE_IMAGE_URL}/${restaurant.pictureId}" alt="${restaurant.name}">
    <div class="deskripsi">
      <p class="h3">${restaurant.name}</p>
      <p class="kota">${restaurant.city}</p>
      <p class="star">
        ${ratingToStar(restaurant.rating)}
        <span class="small">(${restaurant.rating})</span>
      </p>
    </div>
  </div>
</a>
`

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="">${restaurant.name}</h2>
  <img class="" src="${CONFIG.BASE_IMAGE_URL}/${restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="">
  <h3>Information</h3>
    <h4>City</h4>
    <p>${restaurant.city}</p>
    <h4>Address</h4>
    <p>${restaurant.address}</p>
  </div>
`

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa-regular fa-heart" aria-hidden="true"></i>
  </button>
`

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate
}
