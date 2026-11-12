interface Movie {
  id: string;
  title: string;
  durationMin: number;
  isShowing: boolean;
  rating?: number;
}

const movies: Movie[] = [
  { id: "m1", title: "Mimino", durationMin: 97, isShowing: true }, // დავწერე 97 ნაცვლად "97"-სა, რადგან durationMin: number
  { id: "m2", title: "Blue Mountains", durationMin: 72, isShowing: false, rating: 9 }, // დაემატა durationMin, რადგან ეს არის სავალდებული ელემენტი
  { id: "m3", title: "Repentance", durationMin: 153, isShowing: true }, // name-ს ნაცვლად დავწერე title
];

function totalMinutes(list: Movie[]): number { // string შევცვალე number-ით
  let sum = 0;
  for (const movie of list) {
    sum += movie.durationMin;
  }
  return sum;
}

console.log(totalMinutes(movies));