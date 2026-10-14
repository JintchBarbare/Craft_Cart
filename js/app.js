const featuredProduct1Title = "გასეირნება ბაღში";
const featuredProduct1Description = "ორიგინალური ნამუშევარი, თანამედროვე სურეალიზმის სტილი. შესრულებილია აკრილის საღებავით ტილოზე, იმპასტო სტილით.";
const featuredProduct1Price = 150.45;

const featuredProduct2Title = "ტყის მორევი";
const featuredProduct2Description = "თანამედროვე ნამუშევარი ვან გოგის ელემენტებით, პოსტიმპრესიონიზმის სტილი. შესრულებულია აკრილით ტილოზე ფაქტურული მონასმებით.";
const featuredProduct2Price = 135.15;

console.log("Type:", typeof featuredProduct1Title, "; Value:", featuredProduct1Title);
console.log("Type:", typeof typeof featuredProduct1Description, "; Value:", featuredProduct1Description);
console.log("Type:", typeof featuredProduct1Price, "; Value:", featuredProduct1Price);


console.log("Type:", typeof featuredProduct2Title, "; Value:", featuredProduct2Title);
console.log("Type:", typeof typeof featuredProduct2Description, "; Value:", featuredProduct2Description);
console.log("Type:", typeof featuredProduct2Price, "; Value:", featuredProduct2Price);

console.log("-----------------------9");
// 09
const productNames = ["გასეირნება ბაღში", "ტყის მორევი", "ოქროსფერი ჰარმონია", "უდაბნო", "ხმელთაშუაზღვისპირას", "მორევი", "თავისუფლების ფრენა", "შემოდგომა", "შროშანების დუმილი"];
const productPrices = [150, 135, 115, 75, 85, 120, 80, 95, 105];
console.log("------1------");
// Exercise_1
console.log("First name: " + productNames[0]);
console.log("Length: " + productNames.length);
console.log("Last name: " + productNames[productNames.length-1] );

console.log("------2------");
// Exercise_2
for (const productName of productNames) {
    console.log(productName);
}

console.log("------3------");
// Exercise_3
for (let i=0; i<productNames.length; i++) {
        console.log(productNames + "->" + productPrices);
}

console.log("------4------");
// Exercise_4
for (let i=0; i<productPrices.length; i++) {
    if (productPrices[i] >= 100) {
        console.log("mid shelf+");
    }else{
        console.log("under ₾100");
    }
}

console.log("------5------");
// Exercise_5
productNames.push("მხატვარი");
productPrices.push(145);
console.log(productNames.length + " and " + productPrices.length);




console.log("------------------------------------10");
// 10
// ამოცანა 1 — კატალოგი ერთ მასივში
console.log("------1------");
const products = [
    {id: 1, name: "Garden Walk", price: 150, category: "Paintings", inStock: true,isSale: false, isNew: false },
    {id: 2, name: "Forest Vortex", price: 135, category: "Paintings", inStock: true, isSale: false, isNew: false},
    {id: 3, name: "Golden Harmony", price: 115, category: "Paintings", inStock: true, isSale: false, isNew: true},
    {id: 4, name: "Desert", price: 75, category: "Paintings", inStock: true, isSale: true, isNew: false},
    {id: 5, name: "Mediterranean", price: 85, category: "Paintings", inStock: true, isSale: false, isNew: false},
    {id: 6, name: "Whirlpool", price: 120, category: "Paintings", inStock: true, isSale: true, isNew: false},
    {id: 7, name: "Flight of Freedom", price: 80, category: "Paintings", inStock: true, isSale: false, isNew: true},
    {id: 8, name: "Autumn", price: 95, category: "Paintings", inStock: true, isSale: true, isNew: false},
    {id: 9, name: "Silence of the Lilies", price: 105, category: "Paintings", inStock: true, isSale: false, isNew: true}
];

console.log("length: " + products.length);
console.log("product names: ");
for (const product of products) {
    console.log(product.name);
}

console.log("------2------");
// ამოცანა 2 — კითხვები კატალოგზე
// ყველა პროდუქტის სახელი
const allProductName=products.map(product => product.name);
console.log("All product names: ", allProductName);

// ფასი < 100
const cheapProducts=products.filter(product => product.price<100);
console.log("Products priced under 100 GEL: ", cheapProducts);

// პროდუქტი ID-ით
const foundProduct=products.find(product => product.id===3);
console.log("Product with ID 3: ", foundProduct);

const notFoundProduct = products.find(product => product.id===12);
console.log("Product with ID 12:", notFoundProduct);


console.log("------3------");
// ამოცანა 3 — იაფი ნივთი და საშუალო ფასი
let cheapestProduct = products[0];
for (let i=1; i<products.length; i++) {
    if (products[i].price<cheapestProduct.price) {
        cheapestProduct = products[i];
    }
}
console.log("The cheapest product:", cheapestProduct.name + "-" + cheapestProduct.price);

let totalPrice=0;
for (let i=0; i<products.length; i++){
    totalPrice=totalPrice+products[i].price;
}
console.log("the avarage price is: ", totalPrice/products.length);