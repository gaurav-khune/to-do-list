let todos = [];

const form = document.getElementById('form');
const input = document.querySelector('.toDo');
const container = document.querySelector('.todos-container');

// Add Todo
form.addEventListener('submit', function (event) {
  event.preventDefault();

  const value = input.value;

  if (value.trim() === "") return;

  todos.push(value);

  input.value = "";
  displayTodos();
});

// Display Todos
function displayTodos() {
  container.innerHTML = "";

  todos.forEach((todo, index) => {
    const todoCard = document.createElement('div');
    todoCard.className = 'todo-card';

    const todoTitle = document.createElement('h4');
    todoTitle.innerText = todo;

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'X';

    deleteButton.addEventListener('click', () => {
      deleteTodo(index);
    });

    todoCard.appendChild(todoTitle);
    todoCard.appendChild(deleteButton);
    container.appendChild(todoCard);
  });
}

// Delete Todo
function deleteTodo(index) {
  todos.splice(index, 1);
  displayTodos();
}