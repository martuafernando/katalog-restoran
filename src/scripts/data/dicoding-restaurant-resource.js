import API_ENDPOINT from '../globals/api-endpoint'

class dicodingRestaurantSource {
  static async all () {
    const response = await fetch(API_ENDPOINT.ALL)
    const responseJson = await response.json()
    return responseJson.restaurants
  }

  static async detailRestaurant (id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id))
    const responseJson = await response.json()
    return responseJson.restaurant
  }

  static async sendReview (id, name, review) {
    const response = await fetch(API_ENDPOINT.REVIEW, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id, name, review
      })
    })
    const responseJson = await response.json()
    return responseJson.customerReviews
  }
}

export default dicodingRestaurantSource
