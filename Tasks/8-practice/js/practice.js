"use strict";

console.log('1.------------------------');

// ამოცანა 1 — მისალმება (if)
const userName = "გიორგი";
if (userName !== ""){
console.log('გამარჯობა, გიორგი!');
}else{
console.log('გამრჯობა, სტუმარო!');
}

const emptyName = "";
if (emptyName !== ""){
console.log('გამარჯობა, გიორგი!');
}else{
console.log('გამარჯობა, სტუმარო!');
}



console.log('2.------------------------');

// ამოცანა 2 — coercion: რას აკეთებს +
let num1 = "20";
let num2 = 10;

let sum = num1+num2;
console.log("sum:"+ sum + "| type:" + typeof sum)

let sumFixed = Number(num1) + num2;
console.log("sumFixed:" + sumFixed + "| type:" + typeof sumFixed);

console.log("პირველ შემთხვევაში რადგან გავქვს string, პლიუსი არ გამოიყენება როგორც მათემატიკური შეკრება, არამედ ის პირდაპირ აერთებს ორ ელემენტს. მეორე შემთხვევაში არსებული string გადადის რიცხვად და იკრიბება როგორc ორი number ტიპის ოპერანდი.");



console.log('3.------------------------');

// ამოცანა 3 — ternary: ფასდაკლება
const totalAmount1 = 120;
const isVIP1 = false;
const discount1 = (totalAmount1 >= 100 || isVIP1 === true) ? 20 : 0;
console.log("Test 1 _ discount:" + discount1);

const totalAmount2 = 50;
const isVIP2 = true;
const discount2 = (totalAmount2 >= 100 || isVIP2 === true) ? 20 : 0;
console.log("Test 2 _ discount:" + discount2);

const totalAmount3 = 50;
const isVIP3 = false;
const discount3 = (totalAmount3 >= 100 || isVIP3 === true) ? 20 : 0;
console.log("Test 3 _ discount:" + discount3);



console.log('4.------------------------');

//ამოცანა 4 — switch: შუქნიშანი
const lightColor1 = "წითელი";
switch (lightColor1) {
case "წითელი" :
console.log("გაჩერდით!");
break;
case "ყვითელი":
console.log("მოემზადეთ!");
break;
case "მწვანე":
console.log("იმოძრავეთ!");
break;
default:
console.log("შუქნიშანი გაფუჭებულია!");
break;
}

const lightColor2 = "ყვითელი";
switch (lightColor2) {
case "წითელი" :
console.log("გაჩერდით!");
break;
case "ყვითელი":
console.log("მოემზადეთ!");
break;
case "მწვანე":
console.log("იმოძრავეთ!");
break;
default:
console.log("შუქნიშანი გაფუჭებულია!");
break;
}

const lightColor3 = "მწვანე";
switch (lightColor3) {
case "წითელი" :
console.log("გაჩერდით!");
break;
case "ყვითელი":
console.log("მოემზადეთ!");
break;
case "მწვანე":
console.log("იმოძრავეთ!");
break;
default:
console.log("შუქნიშანი გაფუჭებულია!");
break;
}

const lightColor4 = "ლურჯი";
switch (lightColor4) {
case "წითელი" :
console.log("გაჩერდით!");
break;
case "ყვითელი":
console.log("მოემზადეთ!");
break;
case "მწვანე":
console.log("იმოძრავეთ!");
break;
default:
console.log("შუქნიშანი გაფუჭებულია!");
break;
}



console.log('STRETCH.------------------------');

// Stretch A — ახალი switch (კვირის დღე).
const day = "ორშაბათი";
switch (day) {
case "ორშაბათი" :
case "სამშაბათი" :
console.log("კვირის დასაწყისი");
break;
case "ოთხშაბათი" :
console.log("მესამე დღე");
break;
case "ხუთშაბათი" :
console.log("მეოთხე დღე");
break;
case "პარასკევი" :
console.log("მეხუთე დღე");
break;
case "შაბათი" :
console.log("მეექვსე დღე");
break;
case "კვირა" :
console.log("მეშვიდე დღე");
break;
default:
console.log("არ არის კვირის დღე");
break;

}



console.log('5.------------------------');

// ამოცანა 5 — if / else if: ქულა → შეფასება
const score1 = 95;
let grade1;
if (score1 >= 90){
grade1 = "Excellent";
}else if (score1 >= 75){
grade1 = "Good";
}else if (score1 >= 60){
grade1 = "Pass";
}else {
grade1 = "Fail";
}
console.log(grade1);

const score2 = 87;
let grade2;
if (score2 >= 90){
grade2 = "Excellent";
}else if (score2 >= 75){
grade2 = "Good";
}else if (score2 >= 60){
grade2 = "Pass";
}else {
grade2 = "Fail";
}
console.log(grade2);

const score3 = 61;
let grade3;
if (score3 >= 90){
grade3 = "Excellent";
}else if (score3 >= 75){
grade3 = "Good";
}else if (score3 >= 60){
grade3 = "Pass";
}else {
grade3 = "Fail";
}
console.log(grade3);

const score4 = 40;
let grade4;
if (score4 >= 90){
grade4 = "Excellent";
}else if (score4 >= 75){
grade4 = "Good";
}else if (score4 >= 60){
grade4 = "Pass";
}else {
grade4 = "Fail";
}
console.log(grade4);



console.log('6.------------------------');

//ამოცანა 6 — ?? vs ||
const userRating = 0
const ratingWithOr = userRating || "არ არის შეფასებული";
console.log(ratingWithOr);
const ratingWithNullish = userRating ?? "არ არის შეფასებული";
console.log(ratingWithNullish);
console.log("სწორი არის Nullish მიღებული შედეგი, რადგან 0 არის ლეგიტიმური შეფასება. OR ოპერატორი 0ს აღიქვამს როგორც არასწორ მნიშვნელობად ან ცარიელ ადგილად და ბეჭდავს, არ არის შეფასებული, როცა სინამდვილეში შეფასება არის 0. ")