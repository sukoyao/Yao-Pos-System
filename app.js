const yaoPos = new YaoPos()

const addDrinkButton = document.querySelector('[data-yao-pos="add-drink"]')
addDrinkButton.addEventListener('click', () => {
  // get checked value of options
  const drinkName = yaoPos.getCheckedValue('drink')
  const ice = yaoPos.getCheckedValue('ice')
  const sugar = yaoPos.getCheckedValue('sugar')
  console.log(`${drinkName}, ${ice}, ${sugar}`)
  
  // show alert if user did not check any drink option
  if (!drinkName) {
    alert('請選擇飲料項目')
    return
  }

  // use Drink Constructor to create drink instance
  const drink = new Drink(drinkName, ice, sugar)
  console.log(drink)
  console.log(drink.price())

  // add order UI
  yaoPos.addDrink(drink)
})

const orderLists = document.querySelector('[data-order-lists]')
orderLists.addEventListener('click', event => {
  let isDeleteButton = event.target.matches('[data-yao-pos="delete-drink"]')
  if (!isDeleteButton) {
    return  
  }
  yaoPos.deleteDrink(event.target.parentElement.parentElement.parentElement)
})

const checkoutButton = document.querySelector('[data-yao-pos="checkout"]')
checkoutButton.addEventListener('click', () => {
  alert(`飲料消費總金額是: $ ${yaoPos.checkout()}`)

  yaoPos.clearOrder(orderLists)
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

YaoPos.prototype.addDrink = drink => {
  let orderListCard = `
    <div class="card mb-3">
      <div class="card-body pt-3 pr-3">
        
        <div class="text-right"> 
          <span data-yao-pos="delete-drink">x</span>
        </div>

        <h6 class="card-title mb-1">${drink.name}</h6>
        <div class="card-text">${drink.ice}</div>
        <div class="card-text">${drink.sugar}</div>

        <div class="card-footer text-right py-2">
          <div class="card-text text-muted">
            $ <span data-drink-price>${drink.price()}</span>
          </div>
        </div>
      </div>
    </div>
  `
  orderLists.insertAdjacentHTML('afterbegin', orderListCard)
}

YaoPos.prototype.deleteDrink = targrt => {
  targrt.remove()
}

YaoPos.prototype.checkout = () => {
  let totalAmount = 0
  document.querySelectorAll('[data-drink-price]').forEach(drink => {
    totalAmount += Number(drink.textContent)
  })
  return totalAmount
}

YaoPos.prototype.clearOrder = (target) => {
  target.querySelectorAll('.card').forEach(card => {
    card.remove()
  })
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
    case '烏龍奶茶':
      return 45
    case '紅茶拿鐵':
      return 50
    case '珍珠奶茶':
    case '多多綠茶':  
      return 55
    default:
      alert('沒有這個飲料')    
  }
}