const items = [
    {
      id: 1,
      name: 'Hoodies',
      price: 14.00,
      image: 'assets/images/featured1.png',
      category: 'hoodies',
      quantity: 10
    },
    {
      id: 2,
      name: 'Shirts',
      price: 24.00,
      image: 'assets/images/featured2.png',
      category: 'shirts',
      quantity: 15
    },
    {
      id: 3,
      name: 'Sweatshirts',
      price: 24.00,
      image: 'assets/images/featured3.png',
      category: 'shirts',
      quantity: 20
    }
  ]

  function navMenu(){

  }
  
  const themeBtn = document.getElementById('theme-btn')
  const body = document.body
  const cartBtnOpen = document.getElementById("cart-btn")
  const cartBtnClose = document.getElementById("close-cart")
  const cartContainer = document.getElementById("cart-container")
  const cartOpenMenu = document.getElementById("menu-btn")
  const cartCloseMenu = document.getElementById("nav-close")
  const cartNavMenu = document.getElementById("nav-menu")
  //Modo Noche 
  const number = (value) =>{
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(value)
  }

  const darkThemeChange = () => {
    if ( themeBtn.classList.contains('bx-moon')) {
      themeBtn.classList.replace('bx-moon','bx-sun')
    } else {
      themeBtn.classList.replace('bx-sun','bx-moon')
    }
    body.classList.toggle('dark')
    
  //Forma 2
    /*const dark = 'dark'
    const icon = 'bx-sun'
    themeBtn.addEventListener("click", () => {
      document.body.classList.toggle(dark)
      themeBtn.classList.toggle(icon)*/
  }
themeBtn.addEventListener("click", ()=> darkThemeChange())

cartOpenMenu.addEventListener("click", ()=> cartNavMenu.classList.remove("hide"))
cartCloseMenu.addEventListener("click", ()=> cartNavMenu.classList.add("hide"))
cartBtnOpen.addEventListener("click", ()=> cartContainer.classList.remove("hide"))
cartBtnClose.addEventListener("click", ()=> cartContainer.classList.add("hide"))

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
function addProduct(itemId){
  let ProductoSelected = cartProducts.find(product => product.id === itemId)
  for(i = 1; i = cartProducts.id.length; i++)
  if (ProductoSelected) {
    if (cartProducts.id === quantitySelected[10]){
      return "el producto esta agotado"
    }
    // Condicion al stock
    let index = cartProducts.indexOf(ProductoSelected)
    cartProducts[index].quantitySelected++
  } else {
    const item = items.find(item => item.id === itemId)
    ProductoSelected.quantitySelected = 1
    cartProducts.push(item)
  }
  showProducts()
}

function showProducts(){
  const content = document.getElementById("cart-content")
  let fragment =""
  cartProducts.forEach(product => {
    fragment += `
    <article class="cart_card">
    <div class="cart_box">
        <img src="${product.image}" alt="${product.image}" class="cart_img">
    </div>
    <div class="cart_details">
        <h3 class="cart_tittle">${product.name}</h3>
        <span class="cart_stock">Stock: ${product.quantity} | <span class="cart_price">${number(product.price)}</span></span>
        <span class="cart_subtotal">
            Subtotal: ${number(product.price * product.quantitySelected)}
        </span>
        <div class="cart_amount">
            <div class="cart_amount-content">
                <span class="cart_amount-box minus" data-id="${product.id}">
                    <i class="bx bx-minus"></i>
                </span>
                <span class="cart_amount-number">${product.quantitySelected} units</span>
                <span class="cart_amount-box plus" data-id="${product.id}">
                    <i class="bx bx-plus"></i>
                </span>
            </div>
            <i class="bx bx-trash-alt cart_amount-trash" data-id="${product.id}"></i>
        </div>
    </div>
</article>
    `
  })
  content.innerHTML = fragment
}

const header = document.querySelector("header")
window.addEventListener("scroll", ()=> {
  if(scrollY >=50) {
    header.classList.add("scroll-bg")
  } else {
    header.classList.remove("scroll-bg")
  }
})

const load = () => {
  const loader = document.getElementById('loader')
  setTimeout( () =>{
    loader.classList.add('view')
    console.log('Ya pasaron 3s')
  }, 3500)
}

document.addEventListener('DOMContentLoaded', ( ) =>{ 
  load()
  showProducts()
  number()
})

