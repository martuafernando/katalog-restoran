const ratingToStar = (star) => {
  let i
  let result = ''

  for (i = 0; i < star - 1; i++) {
    result += '<i class="fa-solid fa-star"></i>'
  }

  if ((star - i) > 0.74) result += '<i class="fa-solid fa-star"></i>'
  else if ((star - i) > 0.49) result += '<i class="fa-solid fa-star-half-stroke"></i>'
  else result += '<i class="fa-solid fa-star-half-stroke"></i>'

  while (i < 4) {
    result += '<i class="fa-regular fa-star"></i>'
    i++
  }
  return result
}

export default ratingToStar
