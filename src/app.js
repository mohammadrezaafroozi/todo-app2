// select Element///
const todoform = document.querySelector('form');
const todoInput = document.getElementById('todo-input');
const todoUl = document.getElementById('todo-list');

let allTodos = [];
 
todoform.addEventListener('submit', function(e){
    e.preventDefault();
    addTodo()
    
})
function addTodo(){
    const todoText = todoInput.value.trim();
   
    if(todoText.length > 0){
        allTodos.push(todoText)
        todoInput.value = '';
        updateTodoList()
        console.log(allTodos)
    }
}

function updateTodoList(){
    todoUl.innerHTML = '';
    allTodos.forEach((todo, todoIndex)=>{
       const todoItem = createtodoItem(todo, todoIndex)
       todoUl.appendChild(todoItem)
    });
    const deleteButtons = document.querySelectorAll('.btnDelete');
    deleteButtons.forEach((button, index) => {
        button.addEventListener('click', function () {
            deleteTodo(index);
        });
    });
}
// function to create todo item
function createtodoItem(todo, todoIndex){
    const todoLi = document.createElement("li");
    const todoId = "todo-"+ todoIndex;
    todoLi.className = 'todo';
    todoLi.innerHTML = ` <input type="checkbox" id="${todoId}">
                <label class="custom-checkbox" for="${todoId}"><i class="bi bi-check-circle-fill"></i></label>
                <label for="${todoId}" class="todo-text">${todo}</label>
                <button class="btnDelete"><i class="bi bi-x-circle"></i></button>
    `;
    return todoLi}
// function to delete todo item................................
function deleteTodo(index) {
    // Remove the todo from the array
    allTodos.splice(index, 1);

    // Update the list
    updateTodoList();
}