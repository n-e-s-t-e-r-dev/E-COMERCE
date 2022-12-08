const cartProducts = [
  {
    id: 1,
    name: 'Hoodies',
    price: 14.00,
    image: 'assets/images/featured1.png',
    category: 'hoodies',
    quantity: 10,
    quantitySelected: 1
  },
  {
    id: 2,
    name: 'Shirts',
    price: 24.00,
    image: 'assets/images/featured2.png',
    category: 'shirts',
    quantity: 15,
    quantitySelected: 2
  },
  {
    id: 3,
    name: 'Sweatshirts',
    price: 24.00,
    image: 'assets/images/featured3.png',
    category: 'shirts',
    quantity: 20,
    quantitySelected: 0
  }
]


function getQuantityByID (cartProducts, ID) {
  let quantitySelected;
  for(let i=0; i < cartProducts.length; i++) {
      if(cartProducts[i].id === ID) {
          quantitySelected = cartProducts[i].quantitySelected;
      }
  }

  return quantitySelected;
}

console.log(cartProducts,)

