import 'regenerator-runtime' /* for async await transpile */
import '../styles/main.css'
import '../styles/default.css'

// Font Awesome
import '@fortawesome/fontawesome-free'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

// Script
import App from './views/app'

document.addEventListener('DOMContentLoaded', new App({
  button: document.querySelector('.hamburger-menu'),
  navbar: document.querySelector('nav .container'),
  content: document.querySelector('#mainContent')
}))
