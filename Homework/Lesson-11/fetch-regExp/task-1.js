const cartsDiv = document.getElementById('carts-div');

fetch ('https://dummyjson.com/carts')
.then((response) => response.json())
.then ((cartObject) => {
  const {carts} = cartObject;

  for (const cart of carts) {
    const div = document.createElement("div");
    div.classList.add('div-container')
    div.innerText = `
    discountedTotal -  ${cart.discountedTotal} 
    id - ${cart.id}
    products - ${cart.products}
    total - ${cart.total}
    totalProducts - ${cart.totalProducts}
    totalQuantity - ${cart.totalQuantity}
    userId - ${cart.userId}
    `
    cartsDiv.appendChild(div);
  }
})