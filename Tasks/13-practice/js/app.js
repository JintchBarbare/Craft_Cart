// ამოცანა 1 — არსებული ელემენტის პოვნა და ტექსტის შეცვლა
const title = document.querySelector('#welcome-title');
title.textContent = "მოგესალმებით DOM-ის სამყარო!";


// ამოცანა 2 — პირველი ელემენტის შექმნა მეხსიერებაში და ჩამატება
const paragraph = document.createElement("p");
paragraph.textContent = "ეს აბზაცი შეიქმნა JavaScript-ით!";

const container = document.querySelector("#simple-container");
container.appendChild(paragraph);


// ამოცანა 3 — კლასის და custom ატრიბუტის (dataset) დამატება
const button = document.createElement("button");
button.textContent = "დააჭირე";

button.classList.add("btn-primary");
button.dataset.status = "ready";
document.body.appendChild(button);




// ნაწილი 2 — ფუნქციები და შედარებები
// ამოცანა 4 — textContent vs innerHTML შედარება და დაკვირვება
const userComment = "<strong>ფასდაკლება!</strong> <em>ყველა ნივთზე</em>";

const commentSafe = document.createElement("div");
commentSafe.id = 'comment-safe';
const commentUnsafe = document.createElement("div");
commentUnsafe.id = 'comment-unsafe';

commentSafe.textContent = userComment; 
commentUnsafe.innerHTML = userComment;   
 
document.body.appendChild(commentSafe);
document.body.appendChild(commentUnsafe);


// ამოცანა 5 — შეტყობინების ბანერი ფუნქციით (createNotification)
function createNotification(message, type) {
  const notification = document.createElement("div");
  notification.classList.add("notification");
  if (type) {
    notification.classList.add(type);
  }
  notification.textContent = message;
  document.body.prepend(notification);
}
 
createNotification("პროფილი წარმატებით განახლდა!", "success");



// ამოცანა 6 — სტუდენტების სიის დინამიური რენდერინგი (მასივთან დაკავშირება)
const students = [
    { id: 101, name: "გიორგი", score: 88, passed: true },
    { id: 102, name: "ნინო", score: 45, passed: false }
];

function renderStudentList(studentList) {
    const studentContainer = document.getElementById("#student-container");
    const ul = document.createElement("ul");

    studentList.forEach(student => {
        const li = document.createElement("li");

        li.textContent = `${student.name} - ${student.score} ქულა`;
        if (student.passed) {
            li.classList.add("passed");
        } else {
            li.classList.add("failed");
        }
        li.dataset.studentId = student.id;
        ul.appendChild(li);
    });
    container.appendChild(ul);
}
renderStudentList(students);