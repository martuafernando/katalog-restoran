import CONFIG from '../globals/config'

const ErrorInitiator = {
  init (title, message) {
    document.querySelector(CONFIG.ERROR_MODAL_COMPONENT).setAttribute('title', title)
    document.querySelector(CONFIG.ERROR_MODAL_COMPONENT).setAttribute('message', message)
    document.querySelector(CONFIG.ERROR_MODAL_COMPONENT).setAttribute('active', true)
    document.querySelector('body').style.overflow = 'hidden'

    this._buttonInit()
  },

  close () {
    document.querySelector(CONFIG.ERROR_MODAL_COMPONENT).removeAttribute('active')
    document.querySelector('body').style.overflow = 'auto'
  },

  _buttonInit () {
    const buttons = document.querySelector(CONFIG.ERROR_MODAL_COMPONENT).getElementsByClassName('close')
    for (const button of buttons) {
      button.addEventListener('click', () => {
        ErrorInitiator.close()
      })
    }
  }
}

export default ErrorInitiator
