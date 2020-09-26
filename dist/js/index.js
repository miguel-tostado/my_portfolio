// ! Adjust the height modifier for different screen sizes

const header = document.getElementById('id')
const services = document.getElementById('services')
const portfolio = document.getElementById('portfolio')
const about = document.getElementById('about')
const contact = document.getElementById('contact')
const navLinks = document.querySelectorAll('.nav--link')
/*
 Updates the navigation links to show which one is active as you scroll down the page.
 */
window.addEventListener('scroll', (event) => {
  let fromTop = window.scrollY + 2

  navLinks.forEach((link) => {
    let section = document.querySelector(link.hash)
    if (
      section.offsetTop - 63 <= fromTop &&
      section.offsetTop - 63 + section.offsetHeight > fromTop
    ) {
      link.classList.add('current')
    } else {
      link.classList.remove('current')
    }
  })
})
