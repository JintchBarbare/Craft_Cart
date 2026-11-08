// ამოცანა 1 — რა გამოჩნდა?
/* class Book {
  constructor(title) {
    this.title = title;
  }
}

const sea = new Book("The Sea");
console.log("1", sea.title);

try {
  const other = Book("Other");
  console.log("2", other);
} catch (error) {
  console.log("2", error.name);
} */
// 1 The Sea
// 2 TypeError
// 2 TypeError რადგან const other = Book("Other"); წერია არასწორად და უნდა ეწეროს const other = new Book("Other");



// ამოცანა 2 — წიგნი და აუდიოწიგნი
/* class Book {
  constructor(title, pages) {
    this.title = title;
    this.pages = pages;
  }
  get label() {
    return `${this.title}, ${this.pages} გვერდი`;
  }
}

class AudioBook extends Book {
  constructor(title, pages, minutes) {
    super(title, pages);
    this.minutes = minutes;
  }
  get label() {
    return `${this.title}, ${this.minutes} წუთი`;
  }
}

const book = new Book("The Sea", 210);
const audio = new AudioBook("The Sea", 210, 400);

const outElement = document.getElementById("out");
if (outElement) {
  outElement.innerHTML = `${book.label}<br>${audio.label}`;
}


console.log(audio instanceof AudioBook);
console.log(audio instanceof Book);
console.log(({ title: "The Sea" }) instanceof Book); */



// ამოცანა 3 — გაასწორე

class Book {
  constructor(title, pages) {
    this.title = title;
    this.pages = pages;
  }
  
  get label() {
    return this.title + ", " + this.pages + " გვერდი";
  }
}

class AudioBook extends Book {
  constructor(title, pages, minutes) {
    super(title, pages);
    this.minutes = minutes;
  }
  
  get label() {
    return this.title + ", " + this.minutes + " წუთი";
  }
}

const book = new Book("The Sea", 210);
const audio = new AudioBook("The Sea", 210, 400);

const outElement = document.getElementById("out");
if (outElement) {
  outElement.innerHTML = `${book.label}<br>${audio.label}`;
}


console.log(audio instanceof AudioBook);
console.log(audio instanceof Book);
console.log(({ title: "The Sea" }) instanceof Book);


// ამოცანა 4 :    შექმენით კლასი Product:
class Product {
  #price; 
  constructor(title, price) {
    this.title = title;
    this.price = price; 
  }

  set price(newPrice) {
    if (newPrice < 0) {
      console.log("ფასი არ შეიძლება იყოს უარყოფითი!");
      return;
    }
    this.#price = newPrice;
  }

  get price() {
    return `${this.#price} ₾`;
  }
  getInfo() {
    return `${this.title} - ${this.price}`;
  }
}



// ამოცანა 5: შექმენით შვილი კლასი DigitalProduct 
class DigitalProduct extends Product {
  constructor(title, price, fileSizeMB) {
    super(title, price);
    this.fileSizeMB = fileSizeMB;
  }

  download() {
    console.log(`მიმდინარეობს ${title}-ის ჩამოტვირთვა (${this.fileSizeMB} MB)...`);
  }
  getInfo() {
    return `${this.title} [Digital] - ${this.price} (ზომა: ${this.fileSizeMB}MB)`;
  }
}


// ამოცანა 6: შემოწმება (instanceof და ტესტირება)
const regularProduct = new Product("Book", 30);
const digitalProduct = new DigitalProduct("E-Book", 15, 10);

console.log(digitalProduct instanceof DigitalProduct); 
console.log(digitalProduct instanceof Product);       

console.log(regularProduct instanceof DigitalProduct); 
console.log(regularProduct instanceof Product);
