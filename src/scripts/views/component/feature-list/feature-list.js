import styleSheet from './feature-list.css'
import '../feature-item/feature-item'

const style = document.createElement('style')
style.appendChild(document.createTextNode(styleSheet))

class FeatureList extends HTMLElement {
  connectedCallback () {
    this.render()
    this.appendChild(style)
    this.classList.add('container-fluid')
  }

  render () {
    this.innerHTML = `
  <div class="container">
    <div>
      <p class="h2">Kenapa Kami?</p>
      <p class="h3">Tinggal Klik, sat set sat set</p>
    </div>
    <a class="btn" href="#">See More</a>
  </div>
  <div class="content container">
    <feature-item
      icon="fa-solid fa-thumbs-up"
      feature="Mudah"
      description="Pencarian dapat dilakukan dengan mudah">
    </feature-item>

    <feature-item
      icon="fa-solid fa-location-dot"
      feature="Akurat"
      description="Lokasi Restoran akurat">
    </feature-item>

    <feature-item
      icon="fa-solid fa-gauge-high"
      feature="Cepat"
      description="Pencarian langsung muncul di hadapanmu">
    </feature-item>

    <feature-item
      icon="fa-solid fa-list-check"
      feature="Banyak Pilihan"
      description="Ada banyak pilihan untukmu">
    </feature-item>
  </div>
    `
  }
}

customElements.define('feature-list', FeatureList)
