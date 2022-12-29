import 'regenerator-runtime' /* for async await transpile */
import '../styles/main.css'
import '../styles/default.css'

import '../scripts/views/component/app-bar/app-bar'
import '../scripts/views/component/hero-element/hero-element'
import '../scripts/views/component/app-footer/app-footer'
import '../scripts/views/component/loading-indicator/loading-indicator'

// Font Awesome
import '@fortawesome/fontawesome-free'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

// Script
import App from './views/app'
import swRegister from './utils/sw-register'

const app = new App({
  button: document.querySelector('app-bar .hamburger-menu'),
  navbar: document.querySelector('app-bar'),
  content: document.querySelector('#mainContent')
})

window.addEventListener('hashchange', () => {
  app.renderPage()
})

window.addEventListener('load', () => {
  app.renderPage()
  swRegister()
})
