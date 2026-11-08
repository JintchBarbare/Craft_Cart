// ამოცანა 1 — რა გამოჩნდა?
console.log("A");
setTimeout(() => { console.log("B"); }, 0);
Promise.resolve().then(() => { console.log("C"); });
console.log("D");
// A D C B 


// ამოცანა 2 — ღია todo-ები
async function loadTodos() {
  const statusEl = document.getElementById('status');
  const gridEl = document.getElementById('products-grid');
  
  statusEl.textContent = 'იტვირთება…';
  
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
    
    if (!response.ok) {
      throw new Error('ვერ ჩაიტვირთა');
    }
    
    const todos = await response.json();
    
    const firstTodo = todos.find(todo => todo.id === 1);
    if (firstTodo) {
      console.log(JSON.stringify(firstTodo));
    }
    
    const uncompletedTodos = todos.filter(todo => todo.completed === false);
    
    gridEl.innerHTML = '';
    const ul = document.createElement('ul');
    uncompletedTodos.forEach(todo => {
      const li = document.createElement('li');
      li.textContent = todo.title;
      ul.appendChild(li);
    });
    gridEl.appendChild(ul);
    
    statusEl.textContent = `დარჩა ${uncompletedTodos.length}`;
    
  } catch (error) {
    statusEl.textContent = 'ვერ ჩაიტვირთა';
    gridEl.innerHTML = '';
  }
}

loadTodos();


