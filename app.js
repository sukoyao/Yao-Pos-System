function Drink (name, ice, sugar) {
  this.name = name
  this.ice = ice
  this.sugar = sugar
}

const addDrinkButton = document.querySelector('[data-yao-pos="add-drink"]')
addDrinkButton.addEventListener('click', () => {
  console.log('click')
  
  let allDrinkOptions = document.querySelectorAll('input[name="drink"]')
  allDrinkOptions.forEach(option => {
    if (option.checked) {
      console.log(`${option.value}: ${option.checked}`)
    }
  })
})

Drink.prototype.price = function () {
  switch (this.name) {
    case '日月潭紅茶':
    case '鹿谷烏龍茶':
    case '四季春':
      return 30
    case '冬瓜檸檬':
    case '紅茶拿鐵':
    case '烏龍奶茶':
      return 50
    case '珍珠奶茶':
    case '多多綠茶':  
      return 55
    default:
      alert('沒有這個飲料')    
  }
}