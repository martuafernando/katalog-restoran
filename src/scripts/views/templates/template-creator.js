import CONFIG from '../../globals/config'
import ratingToStar from '../../utils/rating-to-star'

const createRestaurantItemTemplate = (restaurant) => `
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
`

export { createRestaurantItemTemplate }
