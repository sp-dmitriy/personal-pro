import * as flsFunctions from './modules/functions.js'
flsFunctions.isWebp()

const burger =  document.querySelector('.header__burger')
const menu =  document.querySelector('.header__menu')

burger.addEventListener('click', () => {
  burger.classList.toggle('active')
  menu.classList.toggle('active')
})
