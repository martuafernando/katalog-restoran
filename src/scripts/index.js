import 'regenerator-runtime' /* for async await transpile */
import 'lazysizes'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'

import '../styles/main.css'
import '../styles/default.css'

import '../scripts/views/component/app-bar/app-bar'
import '../scripts/views/component/hero-element/hero-element'
import '../scripts/views/component/app-footer/app-footer'
import '../scripts/views/component/loading-indicator/loading-indicator'
import '../scripts/views/component/modal-error/modal-error'
import '../scripts/views/component/review-container/review-container'

// Script
import App from './views/app'
import swRegister from './utils/sw-register'

// Font Awesome

import('@fortawesome/fontawesome-free')
  .then((module) => module.default)
  .catch((error) => alert(error))

import('@fortawesome/fontawesome-free/js/regular')
  .then((module) => module.default)
  .catch((error) => alert(error))

import('@fortawesome/fontawesome-free/js/brands')
  .then((module) => module.default)
  .catch((error) => alert(error))

import('@fortawesome/fontawesome-free/js/solid')
  .then((module) => module.default)
  .catch((error) => alert(error))

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
