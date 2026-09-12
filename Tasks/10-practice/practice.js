"use strict";

console.log('1.------------------------');

// ამოცანა 1 — ერთი კონვერტი
const film = {
  title: "Night Bus",
  minutes: 98,
  onShelf: true,
};

console.log(film.title);
console.log(film.onShelf);

console.log(film.director);

film.onShelf = false;
console.log(film.onShelf);



console.log('2.------------------------');

// ამოცანა 2 — Dot vs bracket
const field = "minutes";

console.log(film.minutes + " and " + film["minutes"]);
console.log(film.field + " and " + film[field]);

// film.field-ში film ობიექტში ეძებს field-ს და რადგან ვერ პოულობს აბრინებს undefined.
// ხოლო film[field] ნახულობს field-ის მნიშვნელობას, რაც არის minutes, შემდეგ კი minutes ეძებს film ობიექტში და აბრუნებს 98-ს.



console.log('3.------------------------');

// ამოცანა 3 — თარო კონვერტებით
const films = [
  { id: "f1", title: "Night Bus", minutes: 98, onShelf: true },
  { id: "f2", title: "Harbour", minutes: 124, onShelf: false },
  { id: "f3", title: "Cedar Hill", minutes: 87, onShelf: true },
];

console.log(films.length);
console.log(films[0].title);

console.log(films.title); // output: undefined, რადგან films არის მასივი და ამ მასივში არ არის თვისება სახელით title.

for (const film of films) {
  if (film.onShelf === true) {
    console.log(film.title);
  }
}



console.log('4.------------------------');

// ამოცანა 4 — push სრული კონვერტით
films.push(
    { id: "f4", title: "Sunrise", minutes: 110, onShelf: false }
)

console.log(films.length);
console.log(films[films.length-1].title);



console.log('5.------------------------');

// ამოცანა 5 — filter და ციკლი ერთ შედეგზე
const onShelfByLoop = [];
for (const film of films) {
    if (film.onShelf === true) {
        onShelfByLoop.push(film);
    }
}

const onShelfByFilter = films.filter((film) => film.onShelf === true);

console.log(onShelfByLoop.length);
console.log(onShelfByFilter.length);



//console.log('6.------------------------');

// ამოცანა 6 — გაასწორე გაფუჭებული კოდი
// film შევხვალე Film და films შევცვალე Films, რადგან ისინი უკვე იყო გამოცხადებული.
//const Film = { title: "Night Bus" };
//const key = "title";
//console.log(Film[key]);

//const Films = [
//  { id: "f1", title: "Night Bus", onShelf: true },
//  { id: "f2", title: "Harbour", onShelf: false },
//];

//const onShelf = films.filter((item) => {
//  return item.onShelf === true;
//});
//console.log(onShelf.length);

//const missing = films.find((item) => item.id === "f9");
//console.log(missing.title);



console.log('7.------------------------');

// ამოცანა 7 — უდიდესი და უმცირესი
const temps = [12, -3, 18, 9, 25];
let max = temps[0];
let min = temps[0];

for (const temp of temps) {
    if (temp > max) {
        max = temp;
    }
    if (temp < min) {
        min = temp;
    }
}

console.log(max);
console.log(min);



console.log('8.------------------------');

// ამოცანა 8 — ჯამი და საშუალო
const scores = [42, 70, 55, 30, 88];
let sum = 0;
let passCount = 0;

for (const score of scores) {
    sum = sum + score;

    if (score >= 50) {
        passCount++;
    }
}
console.log(sum);
console.log(sum/scores.length);
console.log(passCount);



console.log('9.------------------------');

// ამოცანა 9 — იგივე ფილმის ველზე
let longFilm = films[0];
let shortFilm = films[0];
let total = 0;

for (const film of films) {
    total = total + film.minutes;

    if (film.minutes > longFilm.minutes) {
        longFilm = film;
    }
    if (film.minutes < shortFilm.minutes) {
        shortFilm = film;
    }
}

console.log(longFilm.title + " -> " + longFilm.minutes);
console.log(shortFilm.title + " -> " + shortFilm.minutes);

console.log(total);
console.log(total/films.length);