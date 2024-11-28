// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Latest Collections</title>
//     <style>
//         body {
//             font-family: Arial, sans-serif;
//             margin: 0;
//             padding: 0;
//             background-color: #f9f9f9;
//         }
//         .container {
//             width: 90%;
//             max-width: 1200px;
//             margin: 0 auto;
//             padding: 20px;
//         }
//         .header {
//             text-align: center;
//             margin-bottom: 30px;
//         }
//         .header h1 {
//             margin: 0;
//             font-size: 2em;
//             color: #333;
//         }
//         .product-grid {
//             display: grid;
//             grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//             gap: 20px;
//             margin-bottom: 40px;
//         }
//         .product-card {
//             background: #fff;
//             border: 1px solid #ddd;
//             border-radius: 8px;
//             text-align: center;
//             padding: 15px;
//             transition: box-shadow 0.3s;
//         }
//         .product-card:hover {
//             box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//         }
//         .product-card img {
//             width: 100%;
//             max-height: 150px;
//             object-fit: contain;
//             margin-bottom: 15px;
//         }
//         .product-title {
//             font-size: 1em;
//             font-weight: bold;
//             color: #333;
//             margin-bottom: 5px;
//         }
//         .product-price {
//             font-size: 1em;
//             color: #555;
//             margin-bottom: 10px;
//         }
//         .rating {
//             font-size: 0.9em;
//             color: #f8c307;
//             margin-bottom: 15px;
//         }
//         .add-to-cart {
//             background: #ffba00;
//             border: none;
//             padding: 10px 20px;
//             border-radius: 5px;
//             color: #fff;
//             font-size: 0.9em;
//             cursor: pointer;
//             transition: background 0.3s;
//         }
//         .add-to-cart:hover {
//             background: #e5a900;
//         }
//         .category-tabs {
//             display: flex;
//             justify-content: center;
//             gap: 10px;
//             margin-bottom: 20px;
//         }
//         .category-tabs button {
//             padding: 10px 15px;
//             background: #fff;
//             border: 1px solid #ddd;
//             border-radius: 5px;
//             cursor: pointer;
//             font-size: 0.9em;
//             transition: background 0.3s, color 0.3s;
//         }
//         .category-tabs button.active,
//         .category-tabs button:hover {
//             background: #ffba00;
//             color: #fff;
//         }
//         .category-grid {
//             display: grid;
//             grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
//             gap: 15px;
//         }
//         .category-item {
//             text-align: center;
//         }
//         .category-item img {
//             width: 60px;
//             margin-bottom: 5px;
//         }
//         .category-item p {
//             margin: 0;
//             font-size: 0.9em;
//             color: #555;
//         }
//     </style>
// </head>
// <body>
//     <div class="container">
//         <div class="header">
//             <h1>Latest Collections</h1>
//         </div>

//         <div class="product-grid">
//             <div class="product-card">
//                 <img src="bag.jpg" alt="French Kiss Bag">
//                 <p class="product-title">French Kiss Bag</p>
//                 <p class="product-price">$500</p>
//                 <p class="rating">⭐ 3k+ rating</p>
//                 <button class="add-to-cart">Add to cart</button>
//             </div>
//             <div class="product-card">
//                 <img src="shoes.jpg" alt="Burberry Shine">
//                 <p class="product-title">Burberry Shine</p>
//                 <p class="product-price">$150</p>
//                 <p class="rating">⭐ 1k+ rating</p>
//                 <button class="add-to-cart">Add to cart</button>
//             </div>
//             <div class="product-card">
//                 <img src="gown.jpg" alt="Alvero Gown">
//                 <p class="product-title">Alvero Gown</p>
//                 <p class="product-price">$300</p>
//                 <p class="rating">⭐ 5k+ rating</p>
//                 <button class="add-to-cart">Add to cart</button>
//             </div>
//         </div>

//         <div class="category-tabs">
//             <button class="active">Women</button>
//             <button>Men</button>
//             <button>Kids</button>
//             <button>Perfumes</button>
//             <button>Sport</button>
//             <button>Jewelry</button>
//         </div>

//         <div class="category-grid">
//             <div class="category-item">
//                 <img src="shoes-icon.jpg" alt="Shoes">
//                 <p>Shoes</p>
//             </div>
//             <div class="category-item">
//                 <img src="bags-icon.jpg" alt="Bags">
//                 <p>Bags</p>
//             </div>
//             <div class="category-item">
//                 <img src="jackets-icon.jpg" alt="Jackets">
//                 <p>Jackets</p>
//             </div>
//             <div class="category-item">
//                 <img src="lingerie-icon.jpg" alt="Lingerie">
//                 <p>Lingerie</p>
//             </div>
//             <div class="category-item">
//                 <img src="belts-icon.jpg" alt="Belts">
//                 <p>Belts</p>
//             </div>
//             <div class="category-item">
//                 <img src="streetwear-icon.jpg" alt="Street Wear">
//                 <p>Street Wear</p>
//             </div>
//         </div>
//     </div>
// </body>
// </html>
