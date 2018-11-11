/**
  You have just opened a clothes shop. The inventory for your shop is:

  - (£100) Jeans x 2
  - (£60) Shirts x 2
  - (£25) T-shirts x 5
  - (£5) Socks x 5
  - (£50) Sunglasses x 10

  All prices listed do not have VAT added. VAT is 20%.

  Requirements
  1. Write a function which returns the total value of your stock (VAT not included)
  2. Write a function which takes an order and returns the total value of that order including VAT.
  3. You're also planning a 30% off sale for Jeans and Socks! Make sure the function that returns an orders total takes this into account when a sale is on.
*/

/**
  Advanced:

  - Create a shopping cart that allows customers to add and remove items of clothing
  - When a user succesfully adds an item to their cart a message returns "your cart total is £X"
  - When a user succesfully adds an item to their cart a message returns "your cart total is £X"
  - If a user tries to add an item that's out of stick the cart should prevent this and return a message saying "sorry, this item is unavailable"
*/

const inventory = {
  jeans: {
    price: 100,
    quantity: 2
  },
  shirts: {
      price: 60,
      quantity: 2
  },
  tshirts: {
    price: 25,
    quantity: 5
  },
  socks: {
    price: 5,
    quantity: 5
  },
  sunglasses: {
    price: 50,
    quantity: 10
  }
}

const inventoryKeys = Object.keys(inventory)

const totalInventory = () => {
  let sum = 0;
  inventoryKeys.forEach(key => {
    sum += (inventory[key].price * inventory[key].quantity)
  })
  return sum;
}

const order1 = ["socks", "jeans", "jeans", "sunglasses"];
const order2 = ["shirts", "jeans", "socks", "tshirts"];
const order3 = ["shirts", "tshirts"];
const saleItems = ["socks", "jeans", "shirts", "tshirts"];

const totalOrder = (order, isSale) => {
  let sumOrder = 0;
  order.forEach(item => {
    console.log(item, saleItems.includes(item))
    if (isSale && saleItems.includes(item)) {
      sumOrder += inventory[item].price + (inventory[item].price * 0.2) - (inventory[item].price * 0.3)
    } else {
      sumOrder += inventory[item].price + (inventory[item].price * 0.2)
    }
  })
  return sumOrder;
}

console.log(totalOrder(order1));
console.log(totalOrder(order2, false));
console.log(totalOrder(order2, true));
console.log(totalOrder(order3, true));
console.log(totalInventory());
