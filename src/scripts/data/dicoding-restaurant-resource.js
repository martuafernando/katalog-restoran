import API_ENDPOINT from '../globals/api-endpoint'

class dicodingRestaurantSource {
  static async all () {
    const response = await fetch(API_ENDPOINT.ALL)
    const responseJson = await response.json()
    return responseJson.restaurants
  }

  static async detailRestaurant (id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id))
    return response.json()
  }
}

export default dicodingRestaurantSource
