import CONFIG from '../globals/config'

const LoadingInitiator = {
  init () {
    document.querySelector(CONFIG.LOADING_COMPONENT).setAttribute('active', 'true')
    document.querySelector('body').style.overflow = 'hidden'
  },

  close () {
    document.querySelector(CONFIG.LOADING_COMPONENT).removeAttribute('active')
    document.querySelector('body').style.overflow = 'auto'
  }
}

export default LoadingInitiator
