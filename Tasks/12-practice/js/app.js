import {multiplyAll} from './math.js';

// ამოცანა 1 — Rest Parameter (რიცხვების ნამრავლი)
console.log(multiplyAll(2, 3, 4)); 
console.log(multiplyAll(5, 10)); 


// ამოცანა 2 — Spread Operator (იმუტაბელური განახლება)
const originalUser = { id: 1, name: "Nino", score: 80, isVIP: false };
const updataUser = {...originalUser, score: 95, isVIP: true};
console.log(originalUser);
console.log(updataUser);



// ამოცანა 3 — Destructuring Assignment (პარამეტრები და მეტსახელები)
function printProfile({ name: fullName, score, level = 1 }) {
    console.log(`${fullName} has score ${score} at level ${level}`);
}
printProfile(updataUser); 


