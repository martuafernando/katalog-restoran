function main(){
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const navbar = document.querySelector('nav .container');
  hamburgerMenu.addEventListener('click', () => {
    if (navbar.className === "container") {
      navbar.classList.add('menu');
    } else {
      navbar.className = "container";
    }
  });
}

export default main;