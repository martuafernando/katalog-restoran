import FavoriteRestaurantIdb from '../../src/scripts/data/favorite-restaurant-idb'
import * as TestFactories from '../helpers/testFactories'

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>'
}

describe('Unliking A Restaurant', () => {
  beforeEach(async () => {
    addLikeButtonContainer()
    await FavoriteRestaurantIdb.putRestaurant({ id: 1 })
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 })
  })

  it('should display unlike widget when the restaurant has been liked', async () => {

    expect(document.querySelector('[aria-label="unlike this restaurant"]'))
      .toBeTruthy()

    await FavoriteRestaurantIdb.deleteRestaurant(1)
  })

  it('should not display like widget when the restaurant has been liked', async () => {

    expect(document.querySelector('[aria-label="like this restaurant"]'))
      .toBeFalsy()

    await FavoriteRestaurantIdb.deleteRestaurant(1)
  })

  it('should be able to remove liked restaurant from the list', async () => {

    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'))

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([])

    await FavoriteRestaurantIdb.deleteRestaurant(1)
  })

  it('should not throw error if the unliked restaurant is not in the list', async () => {

    await FavoriteRestaurantIdb.deleteRestaurant(1)
    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'))

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([])
  })
})