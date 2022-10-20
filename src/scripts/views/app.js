import HamburgerInitiator from '../utils/hamburger_initiator'

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
}

export default App
