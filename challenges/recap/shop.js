const inventory = () => {
  const inventoryItems = {
    "cornflakes": {
        "price": 1,
        "count": 10
    },
    "coffee": {
      "price": 3,
      "count": 15
    },
    "milk": {
      "price": 0.50,
      "count": 5
    },
    "biscuits": {
      "price": 3,
      "count": 8
    }
  }
  const addItem = (itemId) => {
    if (inventoryItems[itemId]) {
      inventoryItems[itemId].count = inventoryItems[itemId].count + 1
    }
  }

  const removeItem = (itemId) => {
    if (inventoryItems[itemId]) {
      inventoryItems[itemId].count = inventoryItems[itemId].count - 1
    }
  }
  const getCount = (itemId) => {
    if (inventoryItems[itemId]) {
      return inventoryItems[itemId].count;
    }
  }
  return {addItem, getCount, removeItem};
}

const basket = () => {
  const basketItems = [];
  const addItem = (itemId) => {
      basketItems.push(itemId);
      myInventory.removeItem(itemId);
  }
  const removeItem = (itemId) => {
      const itemIndex = basketItems.indexOf(itemId);
      if (itemIndex !== -1) {
        basketItems.splice(itemIndex);
        myInventory.addItem(itemId);
      }
  }
  return {addItem, removeItem};
}

const myInventory = inventory();
const testBasket = basket();

testBasket.addItem("cornflakes");
console.log(myInventory.getCount("cornflakes"));

testBasket.removeItem("cornflakes");
console.log(myInventory.getCount("cornflakes"));

