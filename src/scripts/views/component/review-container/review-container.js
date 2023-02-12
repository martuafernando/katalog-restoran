import styleSheet from './review-container.css'
import dicodingRestaurantSource from '../../../data/dicoding-restaurant-resource'
import UrlParser from '../../../routes/url-parser'
import ReviewLoader from '../../../utils/review-loader'

const style = document.createElement('style')
style.appendChild(document.createTextNode(styleSheet))

class ReviewContainer extends HTMLElement {
  connectedCallback () {
    this.render()
    this.appendChild(style)
    this.classList.add('container')
  }

  render () {
    this.innerHTML = `
    <form>
      <div class="form-group">
        <label for="name">Nama kamu</label>
        <input type="text" class="form-control" id="name" placeholder="Nama kamu">
      </div>
      <div class="form-group">
      <label for="review">Komentar kamu</label>
        <textarea id="review" class="form-control" rows="3" placeholder="Komentar Kamu"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    `
    this.querySelector('button').addEventListener('click', async (event) => {
      event.preventDefault()
      document.getElementsByTagName('loading-indicator')[0].setAttribute('active', 'true')
      const url = UrlParser.parseActiveUrlWithoutCombiner()
      const name = this.querySelector('#name').value
      const review = this.querySelector('#review').value
      ReviewLoader(await dicodingRestaurantSource.sendReview(url.id, name, review))
      document.getElementsByTagName('loading-indicator')[0].removeAttribute('active')
    })
  }
}

customElements.define('review-container', ReviewContainer)
