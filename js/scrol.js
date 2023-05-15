const header = document.querySelector(".header")
const scrolL = document.querySelector(".header__nav-items")
const itemLink = document.querySelector("header__nav-item-link")
window.onscroll = function (event) {
  if (window.scrollY > 100) {
    header.classList.add("header__fixed")
    scrolL.classList.add("nav-items-scroll")
    itemLink.classList.add("nav-item-link")

  } else if (window.scrollY < 100) {
    header.classList.remove("header__fixed")
    scrolL.classList.remove("nav-items-scroll")
    itemLink.classList.remove("nav-item-link")
  }
}; 