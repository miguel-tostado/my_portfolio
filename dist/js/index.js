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
Gets current year and displays it in the footer
*/
const footerCopy = document.getElementsByClassName('footer--year')
const currentYear = new Date().getFullYear()

console.log(footerCopy)

footerCopy[0].textContent = currentYear

/*
Send form data to email
*/
const nodemailer = require('nodemailer')
const formSubmitBtn = document.getElementById('form--submit')
console.log(formSubmitBtn)

let transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: 'af43b9ecbef3c0',
    pass: 'c9e78112ce2a99',
  },
})

const message = {
  from: 'mtostado2@gmail.com',
  to: 'hello@migueltostado.com',
  subject: 'web inquiry',
  text: 'test message',
}
transport.sendMail(message, (err, info) => {
  if (err) {
    console.log(err)
  } else {
    console.log(info)
  }
})
