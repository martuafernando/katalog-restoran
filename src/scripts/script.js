import dataSource from '../DATA.json'

function main () {
  const hamburgerMenu = document.querySelector('.hamburger-menu')
  const navbar = document.querySelector('nav .container')
  hamburgerMenu.addEventListener('click', () => {
    if (navbar.className === 'container') {
      navbar.classList.add('responsive')
    } else {
      navbar.className = 'container'
    }
  })

  const getStar = (star) => {
    let i
    let res = ''

    for (i = 0; i < star - 1; i++) {
      res += '<i class="fa-solid fa-star"></i>'
    }

    console.log(star, i, star - i, star - i > 0.49)

    if ((star - i) > 0.74) res += '<i class="fa-solid fa-star"></i>'
    else if ((star - i) > 0.49) res += '<i class="fa-solid fa-star-half-stroke"></i>'
    else res += '<i class="fa-solid fa-star-half-stroke"></i>'

    while (i < 4) {
      res += '<i class="fa-regular fa-star"></i>'
      i++
    }
    return res
  }

  const dataRestoranContainer = document.getElementById('data-restoran')
  dataSource.restaurants.forEach(restoran => {
    dataRestoranContainer.innerHTML += `
    <div class="item" tabindex="0">
      <img src="${restoran.pictureId}" alt="${restoran.name}">
      <div class="deskripsi">
        <p class="h3">${restoran.name}</p>
        <p class="kota">${restoran.city}</p>
        <p class="star">
          ${getStar(restoran.rating)}
          <span class="small">(${restoran.rating})</span>
        </p>
      </div>
    </div>
    `
  })
}

export default main
