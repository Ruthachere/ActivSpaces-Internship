
let tasks = []; // Array of tasks => [{title:"Create todo",desc: "create todo using javascript",date: "25-08-2023",time: "5:38"}]
let form = document.getElementById("task-form"); //declaring

console.log("Hello Pixel magicians");

function displayTasks(listOfTasks) { // listOfTasks = tasks
    //todo
    //create html variable to store the html contents
    document.getElementById("tasks").innerHTML = "";
    //loop through task to create html content
    for (let i = 0; i < listOfTasks.length; i++) {
        let html = `<div class="task_1">
        <div class="task-header">
            <h5 class="task-title m-0">${listOfTasks[i].taskName}</h5>
            <div class="date-wrapper">
                <span>${listOfTasks[i].date}:</span>
                <span>${listOfTasks[i].time}</span>
            </div>
        </div>
        <p class="task-desc">${listOfTasks[i].taskDesc}</p>
        <hr>
        <div class="task-footer actions ">
            <button  onclick="editTodo(${i})"><i></i>Edit</button>
            <button onclick="deleteTodo(${i})">Delete</button>
        </div>
    </div>`;
    //override html content of task wrapper with generated html;
    document.getElementById("tasks").innerHTML += html;
    }
    
}

//eventlistener for the submit button
form.addEventListener("submit", function (e) {
    // 1-prevent default form submission
    e.preventDefault();
    // get form values
    const taskName = form.task_name.value;
    const taskDesc = form.desccription.value;
    const date = form.date.value;
    const time = form.time.value;
    const taskId = form.task_id.value;
    
    // add object to list of tasks
    
    
    let hasError = false;
    // validation for form
    //validation for the task name
    if (taskName == "") {
        document.getElementById('div1').innerHTML ="Please fill out the task name ";
        hasError = true;
    } 
    //else if
    else{
        document.getElementById('div1').innerHTML = "";
    }
    //validation of the task Description
    if (taskDesc == "") {
        document.getElementById('div2').innerHTML ="Please fill out the task description ";
        hasError = true;
    } 
    //else if
    else{
        document.getElementById('div2').innerHTML ="";
    }
//validation of the date
    if (date == "") {
        document.getElementById('div3').innerHTML ="Please fill";
        hasError = true;
    } 
    //else if
    else{
        document.getElementById('div3').innerHTML ="";
    }
    //validation of time
    if (time == "") {
        document.getElementById('div4').innerHTML ="Please fill";
        hasError = true;
    } 
    //else if
    else{
        document.getElementById('div4').innerHTML ="";
    }
    if (hasError) {
        return;
    }
    //create an object of task with a unique 
    const task = {
        taskName: taskName,
        taskDesc: taskDesc,
        date: date,
        time: time
    }
    //condition for the edit
    if (taskId) {
        tasks[taskId] = task;
        
    } else {
        tasks.push(task);
    }
    
    form.reset();
    // call a function to dsiplay task
   displayTasks(tasks); 
    let array = JSON.stringify(tasks);
    localStorage.setItem('task', array);
});


//storing of values in the local storage
if(localStorage.getItem('task')){
    array = localStorage.getItem('task');
    tasks = JSON.parse(array);   
}
displayTasks(tasks);


//function to delete todo
function deleteTodo(i) {
    tasks.splice(i, 1);
    localStorage.setItem('task',JSON.stringify(tasks));
    displayTasks(tasks);
}


// function editTodo
function editTodo(i){
    const todo = tasks[i];
    form.task_name.value = todo.taskName;
    form.desccription.value = todo.taskDesc;
     form.date.value = todo.date;
   form.time.value = todo.time;
   form.task_id.value = i;
}
