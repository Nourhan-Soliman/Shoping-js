// Initial setup: set the updated products data in localStorage
const updatedProducts = [
   
      { id: 37, title: "Pants", size: "small", imageUrl: "../images/Jeans1.jpg", qty: 1 },
      { id: 38, title: "Pants", size: "large", imageUrl:"../images/Jeans2.jpg", qty: 1 },
      { id: 39, title: "Pants", size: "medium", imageUrl:"../images/Jeans3.jpg", qty: 1 },
      { id: 40, title: "Pants", size: "small", imageUrl: "../images/Jeans4.jpg", qty: 1 },
      { id: 41, title: "Pants", size: "one-size", imageUrl: "../images/Jeans5.jpg", qty: 1 },
      { id: 42, title: "Pants", size: "medium", imageUrl: "../images/Jeans6.jpg", qty: 1 },
      { id: 43, title: "Pants", size: "small", imageUrl: "../images/Jeans7.jpg", qty: 1 },
      { id: 44, title: "Pants", size: "large", imageUrl: "../images/Jeans8.jpg", qty: 1 },
     
  
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
    // window.location = '../cardDetails.html';
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
  