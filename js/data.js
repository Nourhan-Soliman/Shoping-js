// const updatedProducts = [
//   { id: 1, title: "Women's dress", size: "medium", imageUrl: "../images/dress4.jpg", qty: 1 },
//   { id: 2, title: "Women's Jeans", size: "large", imageUrl: "https://i.pinimg.com/474x/fc/91/27/fc91278ba6ba044b5cd7ff5e03e83075.jpg", qty: 1 },
//   { id: 3, title: "Women's Jacket", size: "small", imageUrl: "https://via.placeholder.com/150?text=Women's+Jacket", qty: 1 },
//   { id: 4, title: "Dress", size: "medium", imageUrl: "https://via.placeholder.com/150?text=Dress", qty: 1 },
//   { id: 5, title: "Skirt", size: "small", imageUrl: "https://via.placeholder.com/150?text=Skirt", qty: 1 },
//   { id: 6, title: "Sweater", size: "large", imageUrl: "https://via.placeholder.com/150?text=Sweater", qty: 1 },
//   { id: 7, title: "Blouse", size: "medium", imageUrl: "https://via.placeholder.com/150?text=Blouse", qty: 1 },
//   { id: 8, title: "Shorts", size: "small", imageUrl: "https://via.placeholder.com/150?text=Shorts", qty: 1 },
//   { id: 9, title: "Trousers", size: "large", imageUrl: "https://via.placeholder.com/150?text=Trousers", qty: 1 },
//   { id: 10, title: "Coat", size: "medium", imageUrl: "https://via.placeholder.com/150?text=Coat", qty: 1 },
//   { id: 11, title: "Hat", size: "one-size", imageUrl: "https://via.placeholder.com/150?text=Hat", qty: 1 },
//   { id: 12, title: "Scarf", size: "one-size", imageUrl: "https://via.placeholder.com/150?text=Scarf", qty: 1 },
//   { id: 13, title: "Gloves", size: "medium", imageUrl: "https://via.placeholder.com/150?text=Gloves", qty: 1 },
//   { id: 14, title: "Socks", size: "large", imageUrl: "https://via.placeholder.com/150?text=Socks", qty: 1 },
//   { id: 15, title: "Women's Shoes", size: "small", imageUrl: "https://via.placeholder.com/150?text=Women's+Shoes", qty: 1 },
//   { id: 16, title: "Belt", size: "medium", imageUrl: "https://via.placeholder.com/150?text=Belt", qty: 1 },
//   { id: 17, title: "Dress Shoes", size: "one-size", imageUrl: "https://via.placeholder.com/150?text=Dress+Shoes", qty: 1 },
//   { id: 18, title: "Suit", size: "large", imageUrl: "https://via.placeholder.com/150?text=Suit", qty: 1 },
//   { id: 19, title: "Blazer", size: "medium", imageUrl: "https://via.placeholder.com/150?text=Blazer", qty: 1 },
//   { id: 20, title: "Pajamas", size: "small", imageUrl: "https://via.placeholder.com/150?text=Pajamas", qty: 1 },
//   { id: 21, title: "Cardigan", size: "large", imageUrl: "https://via.placeholder.com/150?text=Cardigan", qty: 1 },
//   { id: 22, title: "Vest", size: "medium", imageUrl: "https://via.placeholder.com/150?text=Vest", qty: 1 },
//   { id: 23, title: "Raincoat", size: "large", imageUrl: "https://via.placeholder.com/150?text=Raincoat", qty: 1 },
//   { id: 24, title: "Swimwear", size: "small", imageUrl: "https://via.placeholder.com/150?text=Swimwear", qty: 1 },
//   { id: 25, title: "Tracksuit", size: "large", imageUrl: "https://via.placeholder.com/150?text=Tracksuit", qty: 1 },
//   { id: 26, title: "Blazer", size: "medium", imageUrl: "https://via.placeholder.com/150?text=Blazer", qty: 1 },
//   { id: 27, title: "Boots", size: "large", imageUrl: "https://via.placeholder.com/150?text=Boots", qty: 1 },
//   { id: 28, title: "Cap", size: "one-size", imageUrl: "https://via.placeholder.com/150?text=Cap", qty: 1 },
//   { id: 29, title: "Hoodie", size: "large", imageUrl: "https://via.placeholder.com/150?text=Hoodie", qty: 1 },
//   { id: 30, title: "Jeans", size: "medium", imageUrl: "https://via.placeholder.com/150?text=Jeans", qty: 1 },
//   { id: 31, title: "Evening Dress", size: "small", imageUrl: "https://via.placeholder.com/150?text=Evening+Dress", qty: 1 },
//   { id: 32, title: "Fur Jacket", size: "large", imageUrl: "https://via.placeholder.com/150?text=Fur+Jacket", qty: 1 },
//   { id: 33, title: "Sweatpants", size: "medium", imageUrl: "https://via.placeholder.com/150?text=Sweatpants", qty: 1 },
//   { id: 34, title: "Shirt", size: "small", imageUrl: "https://via.placeholder.com/150?text=Shirt", qty: 1 },
//   { id: 35, title: "Blouse", size: "large", imageUrl: "https://via.placeholder.com/150?text=Blouse", qty: 1 },
//   { id: 36, title: "Skirt", size: "medium", imageUrl: "https://via.placeholder.com/150?text=Skirt", qty: 1 },
//   { id: 37, title: "T-shirt", size: "small", imageUrl: "https://via.placeholder.com/150?text=T-shirt", qty: 1 },
//   { id: 38, title: "Pants", size: "large", imageUrl: "https://via.placeholder.com/150?text=Pants", qty: 1 },
//   { id: 39, title: "High Heels", size: "medium", imageUrl: "https://via.placeholder.com/150?text=High+Heels", qty: 1 },
//   { id: 40, title: "Winter Coat", size: "small", imageUrl: "https://via.placeholder.com/150?text=Winter+Coat", qty: 1 },
//   { id: 41, title: "Sun Hat", size: "one-size", imageUrl: "https://via.placeholder.com/150?text=Sun+Hat", qty: 1 },
//   { id: 42, title: "Belt", size: "medium", imageUrl: "https://via.placeholder.com/150?text=Belt", qty: 1 },
//   { id: 43, title: "Sneakers", size: "small", imageUrl: "https://via.placeholder.com/150?text=Sneakers", qty: 1 },
//   { id: 44, title: "Leggings", size: "large", imageUrl: "https://via.placeholder.com/150?text=Leggings", qty: 1 },
//   { id: 45, title: "Button-up Shirt", size: "medium", imageUrl: "https://via.placeholder.com/150?text=Button-up+Shirt", qty: 1 },
//   { id: 46, title: "Winter Gloves", size: "small", imageUrl: "https://via.placeholder.com/150?text=Winter+Gloves", qty: 1 },
//   { id: 47, title: "Socks", size: "large", imageUrl: "https://via.placeholder.com/150?text=Socks", qty: 1 },
//   { id: 48, title: "Formal Suit", size: "medium", imageUrl: "https://via.placeholder.com/150?text=Formal+Suit", qty: 1 },
//   { id: 49, title: "Beret", size: "one-size", imageUrl: "https://via.placeholder.com/150?text=Beret", qty: 1 },
//   { id: 50, title: "Scarf", size: "one-size", imageUrl: "https://via.placeholder.com/150?text=Scarf", qty: 1 }
// ];

// localStorage.setItem('products', JSON.stringify(products));












// const updatedProducts = [


// {
//   id: 1,
//   title: "headphone",
//   size: "large",
//   imageUrl: "./images/headphone.jpg",
// },
// {
//   id: 2,
//   title: "Laptop",
//   size: "small",
//   imageUrl: "./images/laptop.jpg",
// },
// {
//   id: 3,
//   title: "keyboard",
//   size: "medium",
//   imageUrl: "./images/keyboard.jpg",
// },
// {
//   id: 4,
//   title: "tablet",
//   size: "meduim",
//   imageUrl: "./images/tablet.jpg",
// },
// {
//   id: 5,
//   title: "pc",
//   size: "large",
//   imageUrl: "./images/pc.jpeg",
// },
// ];
// localStorage.setItem('products', JSON.stringify(products));
