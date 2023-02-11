import styleSheet from './app-bar.css'

const style = document.createElement('style')
style.appendChild(document.createTextNode(styleSheet))

class AppBar extends HTMLElement {
  constructor () {
    super()
    this.appendChild(style)
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.classList.add('container')
    this.innerHTML += `
      <a href="#">
        <picture>
          <source media="(max-width: 600px)" srcset="./images/logos/logo-small.png">
          <img src="./images/logos/logo-large.png" width="150" alt="CariResto Logo">
        </picture>
      </a>
      <button class="btn hamburger-menu" tabindex="0"><i class="fa-solid fa-bars"></i></button>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="https://www.linkedin.com/in/martuafernando/">About Us</a></li>
        <li><a href="#/favorite">Favorites</a></li>
        <li><a href="#list-restoran">Restoran</a></li>
      </ul>
      <a class="btn" href="#">Contact Us</a>
    `
  }
}

customElements.define('app-bar', AppBar)
