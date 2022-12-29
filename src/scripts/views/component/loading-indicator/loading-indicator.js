import styleSheet from './loading-indicator.css'

const style = document.createElement('style')
style.appendChild(document.createTextNode(styleSheet))

class LoadingIndicator extends HTMLElement {
  constructor () {
    super()
    this.appendChild(style)
  }

  static get observedAttributes () {
    return ['active']
  }

  connectedCallback () {
    this.active = this.getAttribute('active') || false
    this.render()
  }

  attributeChangedCallback (attrName, oldVal, newVal) {
    console.log('atribut diganti')
    this.active = this.getAttribute('active') || false
    this.render()
  }

  render () {
    console.log('asfdasf')
    if (this.active === 'true') {
      this.innerHTML += `
        <div>
          <div class="spin"></div>
        </div>
      `
      document.getElementsByTagName('loading-indicator')[0].style.display = 'block'
      document.getElementsByTagName('body')[0].style.overflow = 'hidden'
    } else {
      document.getElementsByTagName('loading-indicator')[0].style.display = 'none'
      document.getElementsByTagName('body')[0].style.overflow = 'auto'
    }
  }
}

customElements.define('loading-indicator', LoadingIndicator)
