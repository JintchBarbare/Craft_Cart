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

console.log("-----------------------");
// 09
const productNames = ["გასეირნება ბაღში", "ტყის მორევი", "ოქროსფერი ჰარმონია", "უდაბნო", "ხმელთაშუაზღვისპირას", "მორევი", "თავისუფლების ფრენა", "შემოდგომა", "შროშანების დუმილი"];
const productPrices = [150, 135, 115, 75, 85, 120, 80, 95, 105];
// Exercise_1
console.log("First name: " + productNames[0]);
console.log("Length: " + productNames.length);
console.log("Last name: " + productNames[productNames.length-1] );

// Exercise_2
for (const productName of productNames) {
    console.log(productName);
}

// Exercise_3
for (let i=0; i<productNames.length; i++) {
        console.log(productNames + "->" + productPrices);
}

// Exercise_4
for (let i=0; i<productPrices.length; i++) {
    if (productPrices[i] >= 100) {
        console.log("mid shelf+");
    }else{
        console.log("under ₾100");
    }
}

// Exercise_5
productNames.push("მხატვარი");
productPrices.push(145);
console.log(productNames.length + " and " + productPrices.length);
