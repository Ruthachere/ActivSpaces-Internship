let form = document.getElementById("taskForm");
let tasks = [];
console.log("Hello Pixel magicians");

function displayTasks(listOfTasks) { // listOfTasks = tasks
    //todo
    //create html variable to store the html contents
    document.getElementById("tasks").innerHTML = "";
    //loop through task to create html content
    for (let i = 0; i < listOfTasks.length; i++) {
        let html = `<div class="task">
        <div class="task-header">
            <p class="task-title m-0">Name:${listOfTasks[i].name}</hp>
            <div>
                <p>Email:${listOfTasks[i].email}:</p>
            </div>
            
        </div>
        <p>Message:${listOfTasks[i].message}</p>
        <hr>
        <div class="col-12 d-flex" style="justify-content:end;">
            <button class="btn1 me-3 w-25"  onclick="editTodo(${i})">Edit</button>
            <button class="btn1 w-25" onclick="deleteTodo(${i})">Delete</button>
        </div>
    </div>`;
    //override html content of task wrapper with generated html;
    document.getElementById("tasks").innerHTML += html;
    }
    
}
//function to add error message
function addErrorElement(inputElement,errorMessage) {
    let errorEle = inputElement.parentElement.querySelector(".error");
    if (!errorEle) {
     errorEle = document.createElement("p");
     errorEle.setAttribute("class","error");
     inputElement.parentElement.appendChild(errorEle);  
    }
   errorEle.textContent = errorMessage;
}
//function to remove error message
function removeErrorElement(inputElement) {
    let errorEle = inputElement.parentElement.querySelector('.error');
    if (errorEle) {
        errorEle.remove();
   }
}
//eventlistener for the submit button
form.addEventListener("submit", function (e) {
    // 1-prevent default form submission
    e.preventDefault();
    // get form values
    const name = form.name;
    const email = form.email;
    const message = form.message;
    const todoId = form.task_id.value;

    let hasError = false;
    if (name.value.trim() == "") {
        addErrorElement(name, "This is required");
        hasError = true;
       } else{

          removeErrorElement(name);
       }
       //validation of the task Description
       if (email.value.trim() == "") {
           addErrorElement(email, "This is required");
           hasError = true;
       }else{

          removeErrorElement(email);
       }
       if (message.value.trim() == "") {
        addErrorElement(message, "This is required");
        hasError = true;
    }  else{
       
       removeErrorElement(message);
    }
    if (hasError) {
        return;
    }
    const todo = {
        name: name.value,
        email: email.value,
        message: message.value
    }
    if (todoId) {
        tasks[todoId] = todo;
        
    } else {
        tasks.push(todo);
    }
    
    form.reset();
    
    // call a function to dsiplay task
   displayTasks(tasks); 

    let arrayStr = JSON.stringify(tasks);
    localStorage.setItem('todo', arrayStr);
});
if(localStorage.getItem('todo')){
    arrayStr = localStorage.getItem('todo');
    tasks = JSON.parse(arrayStr);   
}
displayTasks(tasks);

function deleteTodo(i) {
    tasks.splice(i, 1);
   localStorage.setItem('task',JSON.stringify(tasks));
    displayTasks(tasks);
}


// function editTodo
function editTodo(i){
    const todos = tasks[i];
    form.name.value = todos.name;
    form.email.value = todos.email;
    form.message.value = todos.message;
   form.task_id.value = i;
}