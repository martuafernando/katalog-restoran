const style = document.createElement('style')
style.appendChild(document.createTextNode(style))

class FeatureList extends HTMLElement {
  constructor () {
    super()
    this.shadowDOM = this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild()
  }

  render () {
    this.shadowDOM.innerHTML = `
<section class="container-fluid" id="service">
  <div class="container">
    <div>
      <p class="h2">Kenapa Kami?</p>
      <p class="h3">Tinggal Klik, sat set sat set</p>
    </div>
    <a class="btn" href="#">See More</a>
  </div>
  <div class="content container">
    <div class="item">
      <div class="icon"><i class="fa-solid fa-thumbs-up"></i></div>
      <p class="h3">Mudah</p>
      <p>Pencarian dapat dilakukan dengan mudah</p>
    </div>
    <div class="item">
      <div class="icon"><i class="fa-solid fa-gauge-high"></i></div>
      <p class="h3">Cepat</p>
      <p>Pencarian langsung muncul di hadapanmu</p>
    </div>
    <div class="item">
      <div class="icon"><i class="fa-solid fa-location-dot"></i></div>
      <p class="h3">Akurat</p>
      <p>Lokasi Restoran akurat</p>
    </div>
    <div class="item">
      <div class="icon"><i class="fa-solid fa-list-check"></i></div>
      <p class="h3">Banyak Pilihan</p>
      <p>Ada banyak pilihan untukmu</p>
    </div>
  </div>
</section>
    `
  }
}

customElements.define('feature-list', FeatureList)
