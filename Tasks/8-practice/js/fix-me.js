// ამოცანა 7 — გაასწორე გაფუჭებული კოდი

console.log('7.------------------------');

"use strict";

// ყველა var შევცვალე const-ით
const rawScore = 87; // "87" შევცვალე 87-ით, რადგნა total მიმეღო 90 ნაცვლად "873"-ის.
const attended = false; // "false" შევცვალე false, რადგან იყოს boolean და იმუშაოს if (attended) ნაწილმა.
const bonusPoints = 0;

if (rawScore === 87) { // შევცვალე ==, რადგან === ამოწმებს ტიპებსაც და რაიმე შეცდომას არ დაუშვებს.
console.log("exact score");
}

const total = rawScore + 3;

if (attended) {
console.log("student attended the exam");
}

const effectiveBonus = bonusPoints ?? 5; // || შევცვალე ??-ით, რადგან or ოპერატორი 0ს აღიქვამს როგორც არასწორ მნიშვნელობას, ამ შემთხვევაში კი 0 ვალიდური შეფასება.

const grade = rawScore >= 90 ? "Excellent" : rawScore >= 60 ? "Pass" : "Fail"; // შევცვალე შემოწმების მიმდევრობა, რადგან როცა მნიშვნელობა >= იქნებოდა 60ზე, არასდროს შემოწმდებოდა 90-ზე მეტობა ან ტოლობა, შესაბამისად ვერ მივიღებდით საჭირო პასუხებს.

console.log(total, effectiveBonus, grade);
