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