"use strict";

console.log('1.------------------------');

// ამოცანა 1 — სია და ინდექსი
let cities = ["Tbilisi", "Batumi", "Kutaisi"];
console.log(cities[0]);
console.log(cities.length);
console.log(cities[cities.length-1]);

console.log(cities[3]);

cities.push("Zugdidi");
console.log(cities.length);
console.log(cities[cities.length-1]);


console.log('2.------------------------');

// ამოცანა 2 — for...of და კლასიკური for
for (const city of cities) {
    console.log("city: " + city);
}

for (let i=0; i<cities.length; i++ ) {
    console.log(i + "->" + cities[i])
}


console.log('3.------------------------');

// ამოცანა 3 — შეცვლა და დამატება
cities[1]="Rustavi";
console.log(cities);

cities.push("Gori");

console.log(cities.length);
console.log(cities[cities.length-1]);


console.log('4.------------------------');

// ამოცანა 4 — if ციკლში 
let scores = [42, 70, 55, 30, 88]; 
for (const score of scores) {
    if (score >= 50) {
        console.log("pass: " + score);
    }else{
        console.log("retry: " + score)
    }
}


console.log('5.------------------------');

// ამოცანა 5 — ახალი სია ციკლით (push)
let passed = [];
for (const score of scores) {
    if (score >= 50) {
        passed.push(score);
    }
}
console.log(passed);
console.log(passed.length);


console.log('6.------------------------');

// ამოცანა 6 — ორი სია, ერთი ინდექსი
const titles = ["Sunrise", "Harbour", "Cedar"];
const minutes = [180, 240, 195];
if (titles.length === minutes.length) {
    for (let i=0; i<titles.length; i++) {
        console.log(titles[i] + "->" + minutes[i] + "min");
    }
}else{
    console.log("მასივების სიგრძეები არ არის ტოლი");
}



console.log('7.------------------------');

// ამოცანა 7 — გაასწორე გაფუჭებული კოდი
"use strict";

// რადგან cities, scores და passed უკვე გამოცხადებულია, აღარ გამოვაცხადებ თავიდან და const-ს შევცვლი let-ით
cities = ["Tbilisi", "Batumi"];
console.log(cities[cities.length-1]); //length-1 დავწერე რადგან მოგვცეს ბოლო მნიშვნელობა, lenght თუ დავტოვებთ იქნება undefind

for (let i = 0; i < cities.length; i++) { // დავწერე <, რადგან მოგვცეს მხოლოდ ორი ქალაქი და არა მესამე undefined.
  console.log("seat", i, cities[i]);
}

scores = [40, 70, 55];
passed = [];
for (const score of scores) {
  if (score >= 50){ // გავასწორე if ოპერატორის ტანი.
    passed.push(score);
  }
}
console.log(passed.length);



console.log('.------------------------');
const array = [5, 10, 15, 20];
let sum = 0;
for (let i=0; i<array.length; i++){
    sum = sum + array[i];
}
console.log(sum);


const arr=[10, 15, 30, 2, 45];
let max = 0;
for (let i=0; i<arr.length; i++){
    if(max<arr[i]) {
        max=arr[i];
    }
}
console.log(max);


console.log('.------------------------');
const obj = {id: 123, name: "book", price: 50};
const products = [
  { id: "cc-c1", name: "Stoneware Plate", price: 22, category: "Ceramics", inStock: true, isSale: false, isNew: true },
  { id: "cc-c2", name: "Wool Throw", price: 64, category: "Textiles", inStock: true, isSale: true, isNew: false },
  { id: "cc-c3", name: "Etched Vase", price: 48, category: "Glass", inStock: false, isSale: false, isNew: false },
  { id: "cc-c4", name: "Copper Hook", price: 15, category: "Home", inStock: true, isSale: false, isNew: true },
];
console.log(obj["id"]);
console.log(products[3].name);
const expBook = products.filter((item)=>item.price>40);
console.log(expBook);