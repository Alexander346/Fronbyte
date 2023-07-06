const header = document.querySelector(".header")
const scrolL = document.querySelector(".header__nav-items")
const itemLink = document.querySelector(".header__nav-item-link")
const langScroll = document.querySelector(".lang")
const navItemLlink = document.querySelector(".header__nav-item-link")
window.onscroll = function (event) {
  if (scrollY > 150) {
    navItemLlink.classList.add("nav-item-link")
    langScroll.classList.add("lang__scroll")
    header.classList.add("header__fixed")
    scrolL.classList.add("nav-items-scroll")
    itemLink.classList.add("nav-item-link")

  } else if (scrollY < 100) {
    navItemLlink.classList.add("nav-item-link")
    langScroll.classList.remove("lang__scroll")
    header.classList.remove("header__fixed")
    scrolL.classList.remove("nav-items-scroll")
    itemLink.classList.remove("nav-item-link")
  }
}; 