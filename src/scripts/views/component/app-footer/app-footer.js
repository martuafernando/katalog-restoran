import styleSheet from './app-footer.css'

const style = document.createElement('style')
style.appendChild(document.createTextNode(styleSheet))

class AppFooter extends HTMLElement {
  constructor () {
    super()
    this.appendChild(style)
  }

  connectedCallback () {
    this.render()
    this.classList.add('grid')
    this.classList.add('container')
  }

  render () {
    this.innerHTML += `
    <img src="./images/logos/logo-white.png" alt="">
    <ul class="social-media">
      <li>
        <a href="https://www.instagram.com/martuafernando/" aria-label="instagram"><i class="fa-brands fa-instagram"></i></a>
      </li>
      <li>
        <a href="https://github.com/martuafernando" aria-label="github"><i class="fa-brands fa-github"></i></a>
      </li>
    </ul>
    `
  }
}

customElements.define('app-footer', AppFooter)
