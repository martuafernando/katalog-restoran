import styleSheet from './feature-item.css'

const style = document.createElement('style')
style.appendChild(document.createTextNode(styleSheet))

class FeatureItem extends HTMLElement {
  constructor () {
    super()
    this.appendChild(style)
  }

  connectedCallback () {
    this.icon = this.getAttribute('icon') || null
    this.feature = this.getAttribute('feature') || null
    this.description = this.getAttribute('description') || null
    this.render()
  }

  render () {
    this.innerHTML += `
    <div class="icon"><i class="${this.icon}"></i></div>
    <p class="h3">${this.feature}</p>
    <p>${this.description}</p>
    `
  }
}

customElements.define('feature-item', FeatureItem)
