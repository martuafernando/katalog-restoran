const ReviewLoader = (review) => {
  const reviewContainer = document.getElementById('review-container')
  reviewContainer.innerHTML = `
  <p class="h3">Review</p>
  ${review.map((review) => {
    return '<div class="review"><p>' + review.name + ' (' + review.date + ')' + '</p><p>' + review.review + '</p></div>'
  }).join('')}
  `
}

export default ReviewLoader
