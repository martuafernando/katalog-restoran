import styleSheet from './loading-indicator.css'

const style = document.createElement('style')
style.appendChild(document.createTextNode(styleSheet))

class LoadingIndicator extends HTMLElement {
  static get observedAttributes () {
    return ['active']
  }

  connectedCallback () {
    this.active = this.getAttribute('active') || false
    this.render()
    this.appendChild(style)
  }

  attributeChangedCallback () {
    this.connectedCallback()
  }

  render () {
    if (this.active === 'true') {
      this.innerHTML += `
        <div>
          <div class="spin"></div>
        </div>
      `
      this.style.display = 'block'
    } else {
      this.style.display = 'none'
    }
  }
}

customElements.define('loading-indicator', LoadingIndicator)
