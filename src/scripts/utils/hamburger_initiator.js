const HamburgerInitiator = {
  init ({ button, navbar, content }) {
    button.addEventListener('click', (event) => {
      event.preventDefault()
      this._toggleResponsive(event, navbar)
    })

    content.addEventListener('click', (event) => {
      this._closeResponsive(event, navbar)
    })
  },

  _toggleResponsive (event, navbar) {
    event.stopPropagation()
    navbar.classList.toggle('responsive')
  },

  _closeResponsive (event, navbar) {
    event.stopPropagation()
    navbar.classList.remove('responsive')
  }
}

export default HamburgerInitiator
