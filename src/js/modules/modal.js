const modal = document.querySelector('.modal')
const overlay = modal.querySelector('.overlay')
const closeBtn = modal.querySelector('.modal__btn-close')
const modlaBtn = modal.querySelector('.modal__btn')

export const closeModal = () => modal.classList.add('hidden')  
export const showModal = () => { 
  modal.classList.remove('hidden')
  body.classList.add('lock')
}  

modlaBtn.addEventListener('click', (event) => {
  event.preventDefault()
  closeModal()
  const section = document.getElementById('price')  

  if(section) {
    seamless.scrollIntoView(section, {
      behavior: "smooth",
      top: 100
    })
  }
})

closeBtn.addEventListener('click', () => {
  closeModal()
})

overlay.addEventListener('click', () => {
  closeModal()
})

