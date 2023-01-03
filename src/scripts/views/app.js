import HamburgerInitiator from '../utils/hamburger_initiator'
import UrlParser from '../routes/url-parser'
import routes from '../routes/routes'
import ErrorInitiator from '../utils/error-initiator'
import LoadingInitiator from '../utils/loading-initiator'

class App {
  constructor ({ button, navbar, content }) {
    this._button = button
    this._navbar = navbar
    this._content = content

    this._initialAppShell()
  }

  _initialAppShell () {
    HamburgerInitiator.init({
      button: this._button,
      navbar: this._navbar,
      content: this._content
    })
  }

  _skipToContentInit () {
    const skipLinkElem = document.querySelector('.skip-link')
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault()
      document.querySelector('#list-restoran') !== null ? document.querySelector('#list-restoran').focus() : document.querySelector('#mainContent').focus()
    })
  }

  async renderPage () {
    try {
      window.scroll(0, 0)
      LoadingInitiator.init()
      const url = UrlParser.parseActiveUrlWithCombiner()
      const page = routes[url]
      this._content.innerHTML = await page.render()
      await page.afterRender()
      this._skipToContentInit()
      LoadingInitiator.close()
    } catch (error) {
      LoadingInitiator.close()
      ErrorInitiator.init('Error', error)
    }
  }
}

export default App
