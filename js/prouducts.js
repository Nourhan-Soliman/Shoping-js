// Initial setup: set the updated products data in localStorage
const updatedProducts = [
    { id: 1, title: "Blouse", size: "large", imageUrl: "../images/Blouse.jpg", qty: 1 },
    { id: 2, title: "Hat", size: "medium", imageUrl: "../images/hat1.jpg", qty: 1 },
    { id: 3, title: "Women's dress", size: "small", imageUrl: "../images/dress6.jpg", qty: 1 },
    { id: 4, title: "Shoes", size: "medium", imageUrl: "../images/Shoes1.jpg", qty: 1 },
    { id: 5, title: "Suit", size: "large", imageUrl: "../images/suit4.jpg", qty: 1 },
    { id: 6, title: "Pants", size: "small", imageUrl: "../images/Jeans1.jpg", qty: 1 },
    { id: 7, title: "Blouse", size: "medium", imageUrl: "../images/Blouse1.jpg", qty: 1 },
    { id: 8, title: "Shoes", size: "one-size", imageUrl: "../images/Shoes5.jpg", qty: 1 },
    { id: 9, title: "Hat", size: "large", imageUrl: "../images/hat6.jpg", qty: 1 },
    { id: 10, title: "Women's dress", size: "medium", imageUrl: "../images/dress8.jpg", qty: 1 },
    { id: 11, title: "Pants", size: "medium", imageUrl: "../images/Jeans3.jpg", qty: 1 },
    { id: 12, title: "Hat", size: "small", imageUrl: "../images/hat8.jpg", qty: 1 },
    { id: 13, title: "Suit", size: "small", imageUrl: "../images/suit3.jpg", qty: 1 },
    { id: 14, title: "Women's dress", size: "large", imageUrl: "../images/dress9.jpg", qty: 1 },
    { id: 15, title: "Pants", size: "large", imageUrl: "../images/Jeans2.jpg", qty: 1 },
    { id: 16, title: "Blouse", size: "one-size", imageUrl: "../images/Blouse7.jpg", qty: 1 },
    { id: 17, title: "Shoes", size: "small", imageUrl: "../images/Shoes2.jpg", qty: 1 },
    { id: 18, title: "Hat", size: "one-size", imageUrl: "../images/hat5.jpg", qty: 1 },
    { id: 19, title: "Suit", size: "medium", imageUrl: "../images/suit5.jpg", qty: 1 },
    { id: 20, title: "Women's dress", size: "one-size", imageUrl: "../images/dress3.jpg", qty: 1 },
    { id: 21, title: "Blouse", size: "large", imageUrl: "../images/Blouse2.jpg", qty: 1 },
    { id: 22, title: "Shoes", size: "large", imageUrl: "../images/Shoes3.jpg", qty: 1 },
    { id: 23, title: "Pants", size: "one-size", imageUrl: "../images/Jeans5.jpg", qty: 1 },
    { id: 24, title: "Suit", size: "large", imageUrl: "../images/suit1.jpg", qty: 1 },
    { id: 25, title: "Women's dress", size: "medium", imageUrl: "../images/dress4.jpg", qty: 1 },
    { id: 26, title: "Blouse", size: "small", imageUrl: "../images/Blouse3.jpg", qty: 1 },
    { id: 27, title: "Hat", size: "medium", imageUrl: "../images/hat4.jpg", qty: 1 },
    { id: 28, title: "Shoes", size: "one-size", imageUrl: "../images/Shoes6.jpg", qty: 1 },
    { id: 29, title: "Pants", size: "small", imageUrl: "../images/Jeans4.jpg", qty: 1 },
    { id: 30, title: "Hat", size: "small", imageUrl: "../images/hat3.jpg", qty: 1 },
    { id: 31, title: "Women's dress", size: "small", imageUrl: "../images/dress1.jpg", qty: 1 },
    { id: 32, title: "Suit", size: "small", imageUrl: "../images/suit6.jpg", qty: 1 },
    { id: 33, title: "Blouse", size: "medium", imageUrl: "../images/Blouse5.jpg", qty: 1 },
    { id: 34, title: "Pants", size: "medium", imageUrl: "../images/Jeans6.jpg", qty: 1 },
    { id: 35, title: "Hat", size: "large", imageUrl: "../images/hat2.jpg", qty: 1 },
    { id: 36, title: "Shoes", size: "medium", imageUrl: "../images/Shoes4.jpg", qty: 1 },
    { id: 37, title: "Suit", size: "medium", imageUrl: "../images/suit8.jpg", qty: 1 },
    { id: 38, title: "Pants", size: "large", imageUrl: "../images/Jeans8.jpg", qty: 1 },
    { id: 39, title: "Women's dress", size: "medium", imageUrl: "../images/dress6.jpg", qty: 1 },
    { id: 40, title: "Blouse", size: "large", imageUrl: "../images/Blouse4.jpg", qty: 1 },
    { id: 41, title: "Hat", size: "medium", imageUrl: "../images/hat7.jpg", qty: 1 },
    { id: 42, title: "Suit", size: "large", imageUrl: "../images/suit7.jpg", qty: 1 },
    { id: 43, title: "Shoes", size: "one-size", imageUrl: "../images/Shoes7.jpg", qty: 1 },
    { id: 44, title: "Women's dress", size: "one-size", imageUrl: "../images/download.jpeg", qty: 1 },
    { id: 45, title: "Hat", size: "small", imageUrl: "../images/hat8.jpg", qty: 1 },
    { id: 46, title: "Pants", size: "small", imageUrl: "../images/Jeans7.jpg", qty: 1 },
    { id: 47, title: "Pants", size: "small", imageUrl: "../images/Jeans4.jpg", qty: 1 },
    { id: 48, title: "Blouse", size: "one-size", imageUrl: "../images/Blouse7.jpg", qty: 1 },
    { id: 49, title: "Shoes", size: "one-size", imageUrl: "../images/Shoes8.jpg", qty: 1 },
    { id: 50, title: "Women's dress", size: "large", imageUrl: "../images/dress5.jpg", qty: 1 },
];
localStorage.setItem('products', JSON.stringify(updatedProducts));
  
  // Get DOM elements
  let productsDom = document.querySelector(".products");
  let cartProducts = document.querySelector(".cart-products");
  let cartProductsDiv = document.querySelector(".cart-products div");
  let shoppingCart = document.querySelector(".shopping-cart");
  let badge = document.querySelector(".badge");
  
  // Load products from localStorage
  let products = JSON.parse(localStorage.getItem('products')) || [];
  console.log('Loaded products:', products); // Debugging
  
  // Function to draw product UI
  function drawProductUI(products = []) {
    console.log('Drawing UI with products:', products); // Debugging
    let productsUI = products.map((item) => {
      return `<div class="product-item">
        <img src="${item.imageUrl}?v=${new Date().getTime()}" class="product-img" alt="${item.title}" />
        <div class="product-desc">
          <a onclick='saveItemData(${item.id})'>${item.title}</a>
          <p>Lorem, ipsum dolor sit amet consectetur</p>
          <span>Size: ${item.size}</span>
        </div>
        <div class="product-actions">
          <button class="add-to-cart" onclick="addedToCart(${item.id})">Add To Cart</button>
        </div>
      </div>`;
    });
    productsDom.innerHTML = productsUI.join('');
  }
  
  // Initial call to draw products on page load
  window.onload = () => {
    drawProductUI(products);
  };
  
  // Load cart items from localStorage
  let addedItems = JSON.parse(localStorage.getItem("productsInCart")) || [];
  console.log('Loaded cart items:', addedItems); // Debugging
  
  // Update cart display
  function updateCart() {
    cartProductsDiv.innerHTML = "";
    addedItems.forEach((item) => {
      cartProductsDiv.innerHTML += `<p>${item.title} ${item.qty}</p>`;
    });
    badge.style.display = addedItems.length > 0 ? "block" : "none";
    badge.innerHTML = addedItems.length;
  }
  updateCart();
  
  // Add product to cart
  function addedToCart(id) {
    if (localStorage.getItem("username")) {
      let clickedItem = products.find((item) => item.id === id);
      let item = addedItems.find((i) => i.id === clickedItem.id);
      if (item) {
        item.qty += 1;
      } else {
        addedItems.push({...clickedItem});
      }
      updateCart();
      localStorage.setItem("productsInCart", JSON.stringify(addedItems));
    } else {
      setTimeout(() => {
        window.location = "../login.html";
      }, 1000);
    }
  }
  
  // Toggle cart menu visibility
  function openCartMenu() {
    cartProducts.style.display = cartProducts.style.display === "block" ? "none" : "block";
  }
  shoppingCart.addEventListener("click", openCartMenu);
  
  // Save product data and redirect to details page
  function saveItemData(id) {
    localStorage.setItem("productId", id);
    window.location = '../cardDetails.html';
  }
  
  // Search function
  function search(title, myarr) {
    let arr = myarr.filter(
      (item) => item.title.toLowerCase().includes(title.toLowerCase())
    );
    drawProductUI(arr);
  }
  
  // Search input event listener
  let inpSearch = document.getElementById("search");
  inpSearch.addEventListener("keyup", function (e) {
    search(e.target.value, products);
    if (e.target.value.trim() === "") {
      drawProductUI(products);
    }
  });
  