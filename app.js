const yaoPos = new YaoPos()

const addDrinkButton = document.querySelector('[data-yao-pos="add-drink"]')
addDrinkButton.addEventListener('click', () => {
  // 取得飲料項目,冰塊,甜度
  const drinkName = yaoPos.getCheckedValue('drink')
  const ice = yaoPos.getCheckedValue('ice')
  const sugar = yaoPos.getCheckedValue('sugar')
  console.log(`${drinkName}, ${ice}, ${sugar}`)
})

// Constructor function for Yao Pos System
function YaoPos () {}
YaoPos.prototype.getCheckedValue = inputName => {
  let selectedOption = ''
  document.querySelectorAll(`[name=${inputName}]`).forEach(item => {
    if (item.checked) {
      selectedOption = item.value
    }
  })
  return selectedOption
}

function Drink (name, ice, sugar) {
  this.name = name
  this.ice = ice
  this.sugar = sugar
}

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