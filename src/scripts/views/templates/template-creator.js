import CONFIG from '../../globals/config'
import ratingToStar from '../../utils/rating-to-star'

const createRestaurantItemTemplate = (restaurant) => `
<a href="/#/detail/${restaurant.id}">
  <div class="item">
    <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL}/${restaurant.pictureId}" alt="${restaurant.name}">
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

<h2>${restaurant.name}</h2>
<img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL}/${restaurant.pictureId}" alt="${restaurant.name}" />
<p class="star">
  ${ratingToStar(restaurant.rating)}
  <span class="small">(${restaurant.rating})</span>
</p>

<div class="row">
  <div class="col">

  <div class="container">
    <p class="h3">Alamat</p>
    <p>${restaurant.address}</p>
  </div>

  <div class="container">
    <p class="h3">Kota</p>
    <p>${restaurant.city}</p>
  </div>

  <div class="container">
    <p class="h3">Makanan Tersedia</p>
    <ul>
      ${restaurant.menus.foods.map((food) => {
        return '<li>' + food.name + '</li>'
      }).join('')}
    </ul>
  </div>

  <div class="container">
    <p class="h3">Minuman Tersedia</p>
    <ul>
      ${restaurant.menus.drinks.map((drink) => {
        return '<li>' + drink.name + '</li>'
      }).join('')}
    </ul>
  </div>

  <div class="container">
    <p class="h3">Komentar</p>
    <review-container></review-container>
  </div>

  </div>

  <div class="col">
    <div class="container">
      <p class="h3">Deskripsi Restoran</p>
      <p>${restaurant.description}</p>
    </div>

    <div id="review-container" class="container">
      <p class="h3">Review</p>
      ${restaurant.customerReviews.map((review) => {
        return '<div class="review"><p>' + review.name + ' (' + review.date + ')' + '</p><p>' + review.review + '</p></div>'
      }).join('')}
    </div>
  </div>
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
