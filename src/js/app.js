import * as scroll  from './modules/scroll.js'
import { Matrix }  from './modules/matrix.js'
import * as flsFunctions from './modules/functions.js'
flsFunctions.isWebp()


const matrixItems = document.querySelectorAll('.matrix-item')
const btn = document.getElementById('counter-btn')
const counterInput =  document.querySelector('.counter-input')
const dbInput = document.getElementById('dateBirth')

dbInput.addEventListener('click', (event) => {
  event.preventDefault()
  
  counterInput.classList.remove('error')
  counterInput.querySelector('span').innerHTML="&nbsp;"
})  

btn.addEventListener('click', (event) => {
  event.preventDefault()

  const dateBirth = dbInput.value
  
  const matrix = new Matrix(dateBirth).create()

  if( matrix.message ) {
    counterInput.classList.add('error')
    counterInput.querySelector('span').innerHTML = matrix.message

    matrixItems.forEach((item) => {
      item.classList.add('empty')
      item.textContent = ''
    })
  } else {
    counterInput.classList.remove('error')
    counterInput.querySelector('span').innerHTML="&nbsp;"
    matrixItems.forEach((item) => {
      item.classList.remove('empty')
      item.textContent = matrix.data[item.dataset.item - 1]
      if (!matrix.data[item.dataset.item - 1]) {
        item.classList.add('empty')
      }
    })
  } 


})