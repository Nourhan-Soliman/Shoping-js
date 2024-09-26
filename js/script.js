// let slideIndex = 0;
// const slides = document.getElementsByClassName("slide");


let slideIndex = 0;
const slides = document.getElementsByClassName("slide");

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all images
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block"; // Show the current image
}

showSlides();
setInterval(showSlides, 2000);









// Initial setup: set the updated products data in localStorage
// const updatedProducts = [
  
//     { id: 45, title: "Shoes", size: "medium", imageUrl: "../images/Shoes1.jpg", qty: 1 },
//     { id: 46, title: "Shoes", size: "small", imageUrl:"../images/Shoes2.jpg", qty: 1 },
//     { id: 47, title: "Shoes", size: "large", imageUrl: "../images/Shoes3.jpg", qty: 1 },
//     { id: 48, title: "Shoes", size: "medium", imageUrl: "../images/Shoes4.jpg", qty: 1 },
//     { id: 49, title: "Shoes", size: "one-size", imageUrl:"../images/Shoes5.jpg", qty: 1 },
//     { id: 50, title: "Shoes", size: "one-size", imageUrl: "../images/Shoes6.jpg" , qty: 1 },
//     { id: 51, title: "Shoes", size: "one-size", imageUrl: "../images/Shoes7.jpg" , qty: 1 },
//     { id: 52, title: "Shoes", size: "one-size", imageUrl: "../images/Shoes8.jpg" , qty: 1 }

// ];

// localStorage.setItem('products', JSON.stringify(updatedProducts));


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


function toggleMenu() {
    const navLinks = document.querySelector('.nav-links ul');
    navLinks.classList.toggle('active');
  }



