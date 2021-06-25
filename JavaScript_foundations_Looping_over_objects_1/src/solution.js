/* When a function's parameters reference `cart`, it references an object that looks like the one that follows.
  {
    "Gold Round Sunglasses": { quantity: 1, priceInCents: 1000 },
    "Pink Bucket Hat": { quantity: 2, priceInCents: 1260 }
  }
*/

function calculateCartTotal(cart) {     /* finds the total of everything in the cart */
  let totalPrice = 0;                   /* temp spot to hold the total */
  const quantity = Object.values(cart);                /* makes an array of the quantity and price in cents */
  if (quantity.length > 0) {            /* checks if the cart is empty */
    for (let i = 0; i < quantity.length; i++) {   /* loops through the array and totals up the price */
      totalPrice += quantity[i].quantity * quantity[i].priceInCents;
    }
  }
  return totalPrice;                              /* returns the price */
}

function printCartInventory(cart) {  /* prints out the quantity and item name */ /* empty array to return if there are no items in the cart */
  let tempCart = "";

  console.log(cart);
    for (let product in cart) {                /* sets up the arrays for the keys and quantities */
      const items = cart[product];             /* keys */
      const numberOfItems = items.quantity;    /* quantities */
      tempCart += `${numberOfItems}x${product}\n`;   /* adds a new item to a temp array */
    }
  return tempCart;                           /* returns the string or an empty string */
}

module.exports = {
  calculateCartTotal,
  printCartInventory,
};
