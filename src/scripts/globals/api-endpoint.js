import CONFIG from './config'

const API_ENDPOINT = {
  // GET
  ALL: `${CONFIG.BASE_URL}/list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
  SEARCH: (query) => `${CONFIG.BASE_URL}/search?q=${query}`,

  // POST
  REVIEW: `${CONFIG.BASE_URL}/review`
}

export default API_ENDPOINT
