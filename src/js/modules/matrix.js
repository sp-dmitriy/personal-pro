import moment from 'moment'

 export class Matrix {
  constructor(born){
    this.born = born
    this.const20 = 2
    this.const21 = 19
    this.magicConst = ''
  }

  century = () => moment('31.12.1999', 'DD.MM.YYYY') >= moment(this.born,"DD.MM.YYYY") ? 20 : 21
  
  checkLimit = () => moment('31.12.1900',"DD.MM.YYYY") >= moment(this.born, 'DD.MM.YYYY')  

  validate(date) {
    const d_arr = date.split('.')
    const d = new Date(d_arr[2] + '/' + d_arr[1] + '/' + d_arr[0] + '')
    if ( d_arr[2] != d.getFullYear() || 
         d_arr[1] != (d.getMonth() + 1) || d_arr[0] != d.getDate()) {
      return false
    }
    return true
  }

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

  magicNumbers(age,date) {
    const c0 = date.replace(/[^1-9]/g, '')
    const c1 = this.summ(c0)
    const c2 = this.summ(c1.toString())

    if (age === 20) {
      const p = c1 - this.const20
      const c3 = this.summ(p.toString())
      return (c0 + c1 + c2 + c3 + p + '2').replace(/[^1-9]/g, '')
    } else {
      const p = c1 + this.const21
      const c3 = this.summ(p.toString())
      return (c0 + c1 + c2 + c3 + p + '1' + '9').replace(/[^1-9]/g, '')
    }
  }

  genNumber(dig,count) {
    let num = ''
    for(let i = 0; i < count; i++) {
      num = (num + dig).toString()
    }
    return num
  }

  create() {
    const filledArray = Array(9).fill('')
    
    if (!this.validate(this.born)) {
      return { message: 'Не верный формат даты', data: filledArray }
    }

    if (this.checkLimit()) {
      return { message: 'Рассчет только после 1900 года', data: filledArray }
    }

    const numbersObj = this.count((this.magicNumbers(this.century(), this.born)).split(''))
    for (let key in numbersObj) {
      filledArray[key-1] = this.genNumber(key,numbersObj[key])
    }  
    return { data: filledArray }   

  }

}
