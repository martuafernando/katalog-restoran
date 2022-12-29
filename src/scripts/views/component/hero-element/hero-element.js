import styleSheet from './hero-element.css'

const style = document.createElement('style')
style.appendChild(document.createTextNode(styleSheet))

class HeroElement extends HTMLElement {
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
      <h1 class="h1">Cari Resto Gampang dan Praktis</h1>
      <p>Bingung mau makan di mana? Cari Resto Solusinya!</p>
      <form class="form-group">
        <input type="text" name="search" id="search-field" placeholder="Mau makan dimana hari ini?">
        <button type="submit" href="test" class="btn"><i
            class="fa-solid fa-magnifying-glass"></i><span>Search</span></button>
      </form>
    `
  }
}

customElements.define('hero-element', HeroElement)
