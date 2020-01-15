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

let blockTea = new Drink ('日月潭紅茶', '微冰', '微糖')
console.log(blockTea)
console.log(blockTea.price())

let oolongMilkTea = new Drink ('烏龍奶茶', '去冰', '半糖')
console.log(oolongMilkTea)
console.log(oolongMilkTea.price())

let bubbleMilkTea = new Drink ('珍珠奶茶', '半冰', '不加糖')
console.log(bubbleMilkTea)
console.log(bubbleMilkTea.price())