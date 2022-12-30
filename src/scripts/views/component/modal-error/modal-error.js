import styleSheet from './modal-error.css'
import ErrorInitiator from '../../../utils/error-initiator'

const style = document.createElement('style')
style.appendChild(document.createTextNode(styleSheet))

class ModalError extends HTMLElement {
  static get observedAttributes () {
    return ['active']
  }

  connectedCallback () {
    this.active = this.getAttribute('active') || false
    this.title = this.getAttribute('title') || null
    this.message = this.getAttribute('message') || null
    this.render()
    this.appendChild(style)
  }

  attributeChangedCallback () {
    this.connectedCallback()
  }

  render () {
    if (this.title && this.message && this.active) {
      this.innerHTML = `
      <div class="modal-container">
        <div class="modal-header">
          <p class="h2 modal-title">${this.title}</p>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
  
        <div class="modal-body">
          <p>${this.message}</p>
        </div>
        
        <div class="modal-footer">
        <button type="button" class="close btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
      `
      this.style.display = 'block'
    } else {
      this.style.display = 'none'
    }
  }
}

customElements.define('modal-error', ModalError)
