import HamburgerInitiator from '../utils/hamburger_initiator'
import UrlParser from '../routes/url-parser'
import routes from '../routes/routes'

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

  async renderPage () {
    const url = UrlParser.parseActiveUrlWithCombiner()
    const page = routes[url]
    this._content.innerHTML = await page.render()
    await page.afterRender()
  }
}

export default App
