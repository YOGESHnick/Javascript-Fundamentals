document.addEventListener("DOMContentLoaded", () => {
  loadProducts();
  loadCart();
});

const cart = JSON.parse(localStorage.getItem("cart")) || [];

function loadProducts() {
  const productContainer = document.getElementById("products");
  productContainer.innerHTML = "";

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>₹${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;

    productContainer.appendChild(productDiv);
  });
}

function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  const cartItem = cart.find((item) => item.id === productId);

  if (cartItem) {
    cartItem.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  updateCart();
}

function updateCart() {
  const cartContainer = document.getElementById("cart-items");
  const totalPriceElement = document.getElementById("total-price");

  cartContainer.innerHTML = "";
  let totalPrice = 0;

  cart.forEach((item) => {
    totalPrice += item.price * item.quantity;

    const cartItem = document.createElement("li");
    cartItem.innerHTML = `
            ${item.name} - ₹${item.price} x ${item.quantity}
            <button onclick="removeFromCart(${item.id})">Remove</button>
        `;

    cartContainer.appendChild(cartItem);
  });

  totalPriceElement.innerText = `₹${totalPrice}`;
  localStorage.setItem("cart", JSON.stringify(cart));
}

function removeFromCart(productId) {
  const itemIndex = cart.findIndex((item) => item.id === productId);

  if (itemIndex > -1) {
    cart.splice(itemIndex, 1);
    updateCart();
  }
}

function clearCart() {
  cart.length = 0;
  updateCart();
}

document.getElementById("search").addEventListener("input", function () {
  const searchValue = this.value.toLowerCase();
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchValue)
  );

  const productContainer = document.getElementById("products");
  productContainer.innerHTML = "";

  filteredProducts.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>₹${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;

    productContainer.appendChild(productDiv);
  });
});

function loadCart() {
  updateCart();
}
