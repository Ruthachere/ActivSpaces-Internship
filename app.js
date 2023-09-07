
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
        <p class ="priority">${listOfTasks[i].number}</p>
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
            <button  onclick="editTodo(${i})">Edit</button>
            <button onclick="deleteTodo(${i})">Delete</button>
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
    const taskName = form.task_name;
    const taskDesc = form.desccription;
    const date = form.date;
    const time = form.time;
    const number = form.number;
    const taskId = form.task_id.value;
    
    // add object to list of tasks

     let hasError = false;
    // validation for form
    //validation for the task name
    if (taskName.value.trim() == "") {
     addErrorElement(taskName, "This is required");
     hasError = true;
        // document.getElementById('div1').innerHTML ="Please fill";
    } else{
        //document.getElementById('div1').innerHTML ="";
       removeErrorElement(taskName);
    }
//     //validation of the task Description
    if (taskDesc.value.trim() == "") {
        addErrorElement(taskDesc, "This is required");
        hasError = true;
    //document.getElementById('div2').innerHTML ="Please fill";
    } 
    //else if
    else{
       //document.getElementById('div2').innerHTML ="";
       removeErrorElement(taskDesc);
    }
//validation of the date
    if (date.value.trim()  == "") {
        addErrorElement(date, "Required");
       // document.getElementById('div3').innerHTML ="Please fill";
        hasError = true;
    } 
    //else if
    else{
        removeErrorElement(date);
        //document.getElementById('div3').innerHTML ="";
    }
    //validation of time
    if (time.value.trim()  == "") {
        addErrorElement(time, "Required");
       // document.getElementById('div4').innerHTML ="Please fill";
        hasError = true;
    } 
    //else if
    else{
      //  document.getElementById('div4').innerHTML ="";
      removeErrorElement(time);
    }
    if (number.value.trim()  == "") {
        addErrorElement(number, "This is required");
       // document.getElementById('div4').innerHTML ="Please fill";
        hasError = true;
    } 
    //else if
    else{
      //  document.getElementById('div4').innerHTML ="";
      removeErrorElement(number);
    }
    if (hasError) {
        return;
    }
    //create an object of task with a unique 
    const task = {
        taskName: taskName.value,
        taskDesc: taskDesc.value,
        number:number.value,
        date: date.value,
        time: time.value
    }
    //condition for the edit
    if (taskId) {
        tasks[taskId] = task;
        
    } else {
        tasks.push(task);
        tasks.sort((a,b) => a.number - b.number);
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
   // localStorage.setItem('task',JSON.stringify(tasks));
    displayTasks(tasks);
}


// function editTodo
function editTodo(i){
    const todo = tasks[i];
    form.task_name.value = todo.taskName;
    form.desccription.value = todo.taskDesc;
    form.number.value = todo.number;
     form.date.value = todo.date;
   form.time.value = todo.time;
   form.task_id.value = i;
}
