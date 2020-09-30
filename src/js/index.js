// ! Adjust the height modifier for different screen sizes

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

/*
Prevent form submission as Netlify does this for me
*/
const formSubmit = document.getElementById('contact--form')

formSubmit.addEventListener('submit', (e) => e.preventDefault())

/*
Gets current year and displays it in the footer
*/
const footerCopy = document.getElementsByClassName('footer--year')
const currentYear = new Date().getFullYear()

footerCopy[0].textContent = currentYear
