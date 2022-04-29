import moment from 'moment'

const boxItems = document.querySelectorAll('.matrix-item')
const btn = document.getElementById('counter-btn')
const dateBirth = document.querySelector('.counter-input__input').value

btn.addEventListener('click', (event) => {
  event.preventDefault()
 
  
   
  boxItems.forEach((box) => {
    box.classList.remove('empty')
    box.textContent = matrix[box.dataset.item - 1]
    if (! matrix[box.dataset.item - 1]) {
      box.classList.add('empty')
    }
  })
})


function validDate(date) {
  const d_arr = date.split('.')
  const d = new Date(d_arr[2] + '/' + d_arr[1] + '/' + d_arr[0] + '')
  if ( d_arr[2] != d.getFullYear() || 
       d_arr[1] != (d.getMonth() + 1) || d_arr[0] != d.getDate()) {
    return false
  }
  return true
}


class NumbersArray {
  constructor(inputDate){
    this.inputDate = inputDate
    this.DATE_BEFORE = moment('31.12.1999', 'DD.MM.YYYY')
    this.const20 = 2
    this.const21 = 19
    this.magicConst = ''
  }

  century = () => this.DATE_BEFORE >= moment(this.inputDate,"DD.MM.YYYY") ? 20 : 21
 
  summ(nums) {
    let sum = 0
    for(let i = 0; i<nums.length; i++) {
      sum += parseInt(nums[i])
    }
    return sum
  }

  count(array){
    var names = {}
    array.forEach(item => {
      names[item] = (names[item] || 0) + 1
    })
    return names
  }

  
  getMagicNumbers(age) {
    const strDate = this.inputDate.replace(/[^0-9]/g, '')
    const c1 = this.summ(strDate)
    const c2 = this.summ(c1.toString())

    if (age === 20) {
      const p = c1 - this.const20
      const c3 = this.summ(p.toString())
      return (strDate + c1 + c2 + c3 + p + '2').replace(/[^1-9]/g, '')
    } else {
      const p = c1 + this.const21
      const c3 = this.summ(p.toString())
      return (strDate + c1 + c2 + c3 + p + '1' + '9').replace(/[^1-9]/g, '')
    }

  }

  genNumber(dig,count) {
    let num = ''
    for(let i = 0; i < count; i++) {
      num = (num + dig).toString()
    }
    return num
  }

  genMatrix() {
    this.getMagicNumbers(this.century())
    const numbersObj = this.count((this.getMagicNumbers(this.century())).split(''))
    const filledArray = Array(9).fill('')
    for (let key in numbersObj) {
        filledArray[key-1] = this.genNumber(key,numbersObj[key])
    }  
    return filledArray   
  }
} 