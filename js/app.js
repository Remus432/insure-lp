const hamburgerBtn = document.querySelector(".header__nav-hamburger")
const menu = document.querySelector(".header__nav-menu")

hamburgerBtn.addEventListener("click", openMenu)

function openMenu(e) {
  if (menu.classList.contains("hide")) {
    menu.classList.replace("hide", "active")
    document.body.classList.replace("noOverflow", "hasOverflow")
    hamburgerBtn.src = "./images/icon-close.svg"
  } else {
    menu.classList.replace("active", "hide")
    document.body.classList.replace("hasOverflow", "noOverflow")
    hamburgerBtn.src = "./images/icon-hamburger.svg"
  }
}