//define ui variables
const form = document.querySelector('form');
var wrapper = document.getElementById('todo_wrapper');

//creating th inner html 
const generateTemplate = (todo) =>{

    var html =  `<div class="col bg-white border">
    <div class="col-lg-10 col-md-12 d-flex " style="justify-content: end;">
    <p class="me-5">Date:${todo.date}</p>
    <p>Time:${todo.time}</label></p>
    </div>
    <div class="col-12">
    <h6>Task:${todo.taskInput}</h6>
    <p>Task Description:${todo.description}</p>
    <hr>
    <div class="col-lg-12 col-md-9 d-flex"  style="justify-content: end;">
    <button class="btn border edit-btn" data-index="index">Edit</button>
    <button class="btn border delete-btn" data-index="index">Delete</button>
    </div>
    </div>
    </div>`;
    wrapper.innerHTML += html;
    
};
//creating the objects for the innerHtml
form.addEventListener('submit', e => {
    e.preventDefault();
    let taskInput = form.names.value.trim();
    let date = form.date.value.trim();
    let time = form.time.value.trim();
    let description = form.description.value.trim();
    console.log({taskInput: taskInput, date: date, time: time, description: description});

    generateTemplate({
        taskInput: taskInput, 
        date: date, 
        time: time, 
        description: description
    });
    form.reset();
});

 // Event listener to edit amd delete the todo
 wrapper.addEventListener('click', (e) => {
    if (e.target.classList.contains('edit-btn')) {
        const index = e.target.getAttribute('data-index');
        const updatedTodo = prompt('Edit todo:', wrapper[index]);
        if (updatedTodo !== null) {
            wrapper[index] = updatedTodo;
        //    saveTodosToLocalStorage();
        }
    } else if (e.target.classList.contains('delete-btn')) {
        const index = e.target.getAttribute('data-index');
        wrapper.firstElementChild.remove(index, 0);
    //    saveTodosToLocalStorage();
    }
});
   // Retrieve todos from local storage or initialize an empty array
   let todos = JSON.parse(localStorage.getItem('todo_wrapper')) || [];

 // Function to save todos to local storage
 function saveTodosToLocalStorage() {
    localStorage.setItem('todo_wrapper', JSON.stringify(todos));
    updateTodoList();
}















 


