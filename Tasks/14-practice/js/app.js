// ამოცანა 1 — ღილაკის მრიცხველი (Counter)
let clicks = 0;
const countBtn = document.querySelector("#count-btn");
countBtn.addEventListener("click", () => {
  clicks++; 
  countBtn.textContent = `დააჭირე (${clicks})`; 
});

const resetBtn = document.querySelector("#reset-btn");
resetBtn.addEventListener("click", ()=> {
    clicks = 0;
    countBtn.textContent = "დააჭირე (0)";
})


//ამოცანა 2 — პაროლის გამოჩენა / დაფარვა (Password Toggle)
const passInput = document.querySelector("#pass-input");
const togglePassBtn = document.querySelector("#toggle-pass-btn");

togglePassBtn.addEventListener("click", ()=> {
    if (passInput.type === "password") {
        passInput.type = "text";
        togglePassBtn.textContent = "დაფარვა";
    } else {
        passInput.type = "password";
        togglePassBtn.textContent = "ჩვენება";
    }
});


// ამოცანა 3 — ფორმის გაგზავნა preventDefault()-ით
const loginForm = document.querySelector('#login-form');
const loginMessage = document.querySelector('#login-message');
 
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
 
  const password = loginForm.querySelector('#login-password').value;
 
  if (password.length < 6) {
    loginMessage.textContent = 'პაროლი მოკლეა';
    loginMessage.style.color = 'red';
  } else {
    loginMessage.textContent = 'ავტორიზაცია წარმატებულია';
    loginMessage.style.color = 'green';
    
    loginForm.reset();
  }
});