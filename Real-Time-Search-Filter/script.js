let products = {
  data: [
    { productName: "Denim Baggy Jeans",    productCategory: "Bottomwear", productPrice: "4500 PKR", productImg: "Jeans.jpg" },
    { productName: "Cotton Jeans Pant",    productCategory: "Bottomwear", productPrice: "3000 PKR", productImg: "Pant.jpg" },
    { productName: "White T-shirt",        productCategory: "Topwear",    productPrice: "1500 PKR", productImg: "White-shirt.jpg" },
    { productName: "Sports Shoes",         productCategory: "Shoes",      productPrice: "4000 PKR", productImg: "Shoes.jpg" },
    { productName: "NaviForce Watch",      productCategory: "Watch",      productPrice: "6000 PKR", productImg: "Watch-1.webp" },
    { productName: "Black Watch",          productCategory: "Watch",      productPrice: "5000 PKR", productImg: "Watch.jpg" },
    { productName: "Black Leather Jacket", productCategory: "Jacket",     productPrice: "8000 PKR", productImg: "Jacket.jpg" },
  ]
};

// Build all cards

for (const i of products.data) {  

  let card = document.createElement("div");
  card.classList.add("card", "hide");

  // Store category on the card for easy filtering later
  card.dataset.category = i.productCategory.toLowerCase();

  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");

  let image = document.createElement("img");
  image.src = "img/" + i.productImg;
  image.alt = i.productName;
  imgContainer.appendChild(image);

  let productDetails = document.createElement("div");
  productDetails.classList.add("product-dets");

  let productName = document.createElement("h4");
  productName.classList.add("productName");
  productName.textContent = i.productName.toUpperCase();

  let productCategory = document.createElement("h5");
  productCategory.classList.add("productcategory");
  productCategory.textContent = i.productCategory;

  let productPrice = document.createElement("h4");
  productPrice.classList.add("productPrice");
  productPrice.textContent = i.productPrice;

  productDetails.appendChild(productName);
  productDetails.appendChild(productCategory);
  productDetails.appendChild(productPrice);

  card.appendChild(imgContainer);
  card.appendChild(productDetails);

  document.getElementById("products").appendChild(card);
}


// Grab elements
let searchBar = document.querySelector(".search-bar");
let filterButtons = document.querySelectorAll(".button-value");
let allCards = document.querySelectorAll(".card");

// Filter function
function filterProduct(value) {

  // Get what the user typed in search bar
  let searchText = searchBar.value.toLowerCase();

  // Highlight the correct active button
  filterButtons.forEach(function(button) {

    // Get button text e.g. "Top Wear" → "topwear"
    let buttonText = button.textContent.toLowerCase().replace(" ", "");

    // we just use lowercase on both sides, simpler and cleaner
    if (value === "all" && button.textContent.toLowerCase() === "all") {
      button.classList.add("active");
    } else if (buttonText === value.toLowerCase().replace(" ", "")) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }

  });

  // Show or hide each card
  allCards.forEach(function(card) {

    // Read the category we stored in dataset
    let cardCategory = card.dataset.category;  // e.g. "topwear", "shoes"

    // Read the card's product name
    let cardName = card.querySelector(".productName").textContent.toLowerCase();

    // Remove spaces from filter value for matching
    // "Top Wear" → "topwear"  matches  dataset "topwear" 
    let filterValue = value.toLowerCase().replace(" ", "");

    // Check 1 — does category match?
    let matchesFilter = filterValue === "all" || cardCategory === filterValue;

    // Check 2 — does name match search bar?
    let matchesSearch = cardName.includes(searchText);

    // Both must pass
    if (matchesFilter && matchesSearch) {
      card.classList.remove("hide");
    } else {
      card.classList.add("hide");
    }

  });
}


// Button click listeners
filterButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    // Pass the button's text as the filter value
    filterProduct(button.textContent);
  });
});


// Search bar listener
searchBar.addEventListener("input", function() {
  // Re-run filter keeping the current active button
  let activeButton = document.querySelector(".button-value.active");
  let currentFilter = activeButton ? activeButton.textContent : "all";
  filterProduct(currentFilter);
});


// On page load, show all products
window.onload = function() {       
  filterProduct("all");
};
