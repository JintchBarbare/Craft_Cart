"use strict";

console.log('1.------------------------');

// ამოცანა 1 — გამოცხადება და გამოძახება
 function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Nino"));
console.log(greet("Gio"));

console.log(greet);
//მეორე შემთხვევაში გამოიტანა ფუნქციის კოდი, რადგან ფრჩხილების გარეშე ფუნქციაში არსებული კოდი არ გაეშვა და შესაბამისად არ დააბრუნა სასურველი შედეგი, რასაც ეს ფუნქცია დაარეთარნებდა.




console.log('2.------------------------');

// ამოცანა 2 — გაასწორე გაფუჭებული კოდი (Bug Fixes)
// 1. return აკლია
function formatGreeting(name) {
  return "Hello, " + name;
}
console.log(formatGreeting("Nino"));

// 2. Arrow function ბლოკით, მაგრამ return-ის გარეშე
const isLongText = (text) => {
  return text.length > 8;
};
console.log(isLongText("JavaScript"));

// 3. const ფუნქციის გამოძახება შექმნამდე
const multiply = (a, b) => a * b;
console.log(multiply(3, 4));



console.log('3.------------------------');

// ამოცანა 3 — Function Expression
const formatMinutes = function (minutes) {
  return minutes + " min";
}

console.log(formatMinutes(45));
console.log(formatMinutes(98));



console.log('4.------------------------');

// ამოცანა 4 — Arrow Function
const formatMinutesArrow = (minutes) => minutes + " min";
console.log(formatMinutesArrow(120));

// აქ არ გვჭირდება return და {}, რადგან Arrow function-ში მოქმედებს Implicit return და => შემდეგ რაც არის დაწერილი ავტომატურად ბრუნდება. 
 


console.log('5.------------------------');

// ამოცანა 5 — Scope და ხილვადობის ჯაჭვი
const appTitle = "MovieApp";

function showMovie() {
  const duration = 120;
  console.log("App inside:", appTitle);
  console.log("Duration inside:", duration);
}

showMovie();
console.log("App outside:", appTitle);
//console.log("Duration outside:", duration);

// ბოლო დაკომენტარებული ხაზის გაშვებისას კონსოლში გამოდის Uncaught ReferenceError: duration is not defined. რადგან duration არის ლოკალური ცვლადი
//და ეს არსებობს მხოლოდ showMovie ფუნქციის შიგნით. რადგან console.log არის ამ ფინქციის გარეთ, არ შეგვიძლია ცვლადის წაკითხვა და ამიტომ გვაძლევს ერორს.



console.log('6.------------------------');

// ამოცანა 6 — Closure Factoryfunction 
function createMessageFormatter(prefix) {
return function (text) {
    return "[" + prefix + "] " + text;
  };
}

const infoLog = createMessageFormatter("INFO");
const errorLog = createMessageFormatter("ERROR");

console.log(infoLog("Server started"));
console.log(errorLog("Connection lost"));
console.log(infoLog("User signed in"));



console.log('7.------------------------');

// ამოცანა 7 — რეცეპტების კატალოგი (მასივი და ფუნქციები)
const recipes = [
  { id: "r1", title: "Khachapuri", minutes: 40, vegetarian: true },
  { id: "r2", title: "Beef Stew", minutes: 90, vegetarian: false },
  { id: "r3", title: "Summer Salad", minutes: 15, vegetarian: true },
];

const formatMinuteArrow = (minutes) => minutes + " min";
const formattedTimes = recipes.map((recipe) => formatMinuteArrow(recipe.minutes));
console.log(formattedTimes);

const isVegetarian = (recipe) => recipe.vegetarian === true;

const vegetarian = recipes.filter(isVegetarian);
console.log(vegetarian);



console.log('8.------------------------');

// ამოცანა 8 — Closure: ფასდაკლების ტარიფები
function createDiscountApplier(rate) {
  return function (price) {
    return price * (1 - rate);
  };
}
const regularDiscount = createDiscountApplier(0.05);
const vipDiscount = createDiscountApplier(0.20);

console.log(regularDiscount(100)); 
console.log(vipDiscount(100));
console.log(regularDiscount(100));