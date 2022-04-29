import * as flsFunctions from './modules/functions.js'
flsFunctions.isWebp()

const burger =  document.querySelector('.header__burger')
const menu =  document.querySelector('.header__menu')
const links = document.querySelectorAll('.header__link')
links.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault()
    const id = link.getAttribute('href').substring(1)
    const section = document.getElementById(id)  

    if(section) {
      seamless.scrollIntoView(section, {
        behavior: "smooth",
        top: 100
      })
    }
    burger.classList.remove('active')
    menu.classList.remove('active')
  })
})

burger.addEventListener('click', () => {
  burger.classList.toggle('active')
  menu.classList.toggle('active')
})
