import { products } from './products.js';
import { formatPrice, getProductBadge, applyDiscount } from './utils.js';
import { createProductCard, renderCatalog, renderFeatured } from './ui.js';


console.log("------------------------------------10");
// 10
console.log("------1------");
console.log("length: " + products.length);
console.log("product names: ");
for (const product of products) {
    console.log(product.name);
}

console.log("------2------");
const allProductName = products.map(product => product.name);
console.log("All product names: ", allProductName);

const cheapProducts = products.filter(product => product.price < 100);
console.log("Products priced under 100 GEL: ", cheapProducts);

const foundProduct = products.find(product => product.id === 3);
console.log("Product with ID 3: ", foundProduct);

const notFoundProduct = products.find(product => product.id === 12);
console.log("Product with ID 12:", notFoundProduct);

console.log("------3------");
let cheapestProduct = products[0];
for (let i = 1; i < products.length; i++) {
    if (products[i].price < cheapestProduct.price) {
        cheapestProduct = products[i];
    }
}
console.log("The cheapest product:", cheapestProduct.name + "-" + cheapestProduct.price);

let totalPrice = 0;
for (let i = 0; i < products.length; i++) {
    totalPrice = totalPrice + products[i].price;
}
console.log("the avarage price is: ", totalPrice / products.length);


console.log("------------------------------------11");
// 11

console.log("------1------");
const formattedProducts = products.map(product => {
    const {name, price} = product;
    const formatted = formatPrice(price);
    console.log(name + "-" + formatted);
    return {
        name,
        price: formatted
    };
});

console.log("------2------");
products.forEach(product => {
    const badge = getProductBadge(product);
    console.log(product.name + "-" + badge);
});

console.log("------3------");
products
    .filter(product => product.isSale)
    .forEach(product => {
        const discountedProduct = applyDiscount(product, 0.10);
        console.log(`${product.name} - Old price: ${product.price} GEL; New price: ${discountedProduct.price} GEL`);
    });

    

// 12
console.log("------12.1------");
const sampleCard = createProductCard(products[1]);
console.log("Created Product Card:", sampleCard);

renderCatalog(products);

renderFeatured(products);



// 14
// ამოცანა 4 — "კალათაში დამატების" ღილაკი და Event Delegation
let cartCount = parseInt(localStorage.getItem("cartCount")) || 0;

const cartBadge = document.querySelector("#cart-badge");
if (cartBadge) {
    cartBadge.textContent = cartCount;
}

function handleAddToCart(e) {
    const addBtn = e.target.closest(".btn-add");
    if (!addBtn) return;

    const card = addBtn.closest(".product-card");
    const id = card.dataset.id;
    
    cartCount++;
    localStorage.setItem("cartCount", cartCount);
    
    if (cartBadge) {
        cartBadge.textContent = cartCount;
    }
    
    console.log(`პროდუქტი ID: ${id} დაემატა კალათაში. სულ: ${cartCount}`);
}

const productsGrid = document.querySelector("#products-grid");
if (productsGrid) {
    productsGrid.addEventListener("click", handleAddToCart);
}

const featuredGrid = document.querySelector("#featured-grid");
if (featuredGrid) {
    featuredGrid.addEventListener("click", handleAddToCart);
}

renderCatalog(products);
renderFeatured(products);


// ამოცანა 5 — საკონტაქტო ფორმა გვერდის გადატვირთვის გარეშე
const contactForm = document.querySelector("#contact-form");
const formFeedback = document.querySelector("#form-feedback");

if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const userNameInput = document.querySelector("#user-name");
        const userName = userNameInput.value.trim();

        if (userName.length < 2) {
            formFeedback.textContent = "სახელი უნდა იყოს მინიმუმ 2 სიმბოლო";
            formFeedback.style.color = "red";
            return;
        }

        formFeedback.textContent = `გმადლობთ ${userName}! თქვენი შეტყობინება მიღებულია.`;
        formFeedback.style.color = "green";
        
        contactForm.reset();
    });
}