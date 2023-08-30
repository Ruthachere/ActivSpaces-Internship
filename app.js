
let tasks = []; // Array of tasks => [{title:"Create todo",desc: "create todo using javascript",date: "25-08-2023",time: "5:38"}]
let form = document.getElementById("task-form"); //declaring

console.log("Hello Pixel magicians");

function displayTasks(listOfTasks) { // listOfTasks = tasks
    //todo
    //create html variable to store the html contents
    //loop through task to create html content
    //override html content of task wrapper with generated html;

    document.getElementById("tasks").innerHTML = "";
    // html += `            
    // // <div class="list-of-tasks">`;
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
    document.getElementById("tasks").innerHTML += html;
    }
    // html += `</div>`;

    
}


form.addEventListener("submit", function (e) {
    //todo
    // 1-prevent default form submission
    // get form values
    // validate form
    //create an object of task with a unique id
    // add object to list of tasks
    // call a function to dsiplay task
    e.preventDefault();
    const taskName = form.task_name.value;
    const taskDesc = form.desccription.value;
    const date = form.date.value;
    const time = form.time.value;
    const taskId =form.task_id.value; 
    const task = {
       // id: taskName.toLowerCase().replace(" ", "-"),
        taskName: taskName,
        taskDesc: taskDesc,
        date: date,
        time: time
    }
    if (taskId) {
        tasks[taskId] = task;
        
    } else {
        tasks.push(task);
    }

   
    form.reset();
   displayTasks(tasks); // function call
    let array = JSON.stringify(tasks);
    localStorage.setItem('task', array);
});

if(localStorage.getItem('task')){
    array = localStorage.getItem('task');
    tasks = JSON.parse(array);   
}
displayTasks(tasks);
function deleteTodo(i) {
    tasks.splice(i, 1);
    localStorage.setItem('task',JSON.stringify(tasks));
    displayTasks(tasks);
}
// function editTodo(i){
//     const todo = tasks[i];
//     document.querySelector('#task_name').value = listOfTasks[i].taskName;
// }
function editTodo(i){
    const todo = tasks[i];
    form.task_name.value = todo.taskName;
    form.desccription.value = todo.taskDesc;
     form.date.value = todo.date;
   form.time.value = todo.time;
   form.task_id.value = i;
}

















 


