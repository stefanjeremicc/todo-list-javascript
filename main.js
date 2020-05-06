const todos = document.querySelector(".todos");
const addForm = document.querySelector(".add");
const searchForm = document.querySelector(".search input");

// addTodos function
const addTodos = (inputValue) => {
  const generateTemplate = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <span>${inputValue}</span>
          <i class="far fa-trash-alt delete"></i>
        </li>
  `;

  todos.innerHTML += generateTemplate;
};

// addTodos event(submit)
addForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputValue = addForm.add.value.trim().toLowerCase();

  addTodos(inputValue);

  addForm.reset();
});

// deleteTodos event(click)
todos.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

// filterTodos function
const filterTodos = (searchValue) => {
  const todoItems = Array.from(todos.children);

  todoItems
    .filter((todo) => {
      return !todo.textContent.includes(searchValue);
    })
    .map((todo) => {
      return todo.classList.add("filtered");
    });

  todoItems
    .filter((todo) => {
      return todo.textContent.includes(searchValue);
    })
    .map((todo) => {
      return todo.classList.remove("filtered");
    });
};

// searchTodos event(keyup)
searchForm.addEventListener("keyup", () => {
  const searchValue = searchForm.value.trim().toLowerCase();

  filterTodos(searchValue);
});
