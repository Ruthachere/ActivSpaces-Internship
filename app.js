//define ui variables
const form = document.querySelector('form');
// const taskInput = document.querySelector('.task');
// const times = document.querySelector('#time');
// const dates = document.querySelector('#date');
// const desc = document.querySelector('#description')
var wrapper = document.getElementById('todo_wrapper');


const generateTemplate = (todo) =>{

    var html =  `<div class="col bg-white border">
    <div class="col-10 d-flex " style="justify-content: end;">
    <p class="me-5">Date:${todo.date}</p>
    <p>Time:</label></p>
    </div>
    <div class="col-12">
    <h6>Task${todo.taskInput}</h6>
    <h6>Task Description</h6>
    <hr>
    <div class="col-12 d-flex"  style="justify-content: end;">
    <button class="btn btn-2 border border-dark" id="btn-2">Delete</button>
    <button class="btn btn-2 border border-dark">Edit</button>
    </div>
    </div>
    </div>`;
    wrapper.innerHTML += html;
    
};

form.addEventListener('submit', e => {
    e.preventDefault();
    let taskInput = form.names.value.trim();
    let date = form.date.value.trim();
    console.log({taskInput: taskInput, date: date});




    generateTemplate({taskInput: taskInput, date: date});
    form.reset();
});
// const clearBtn = document.querySelector('form');
// clearBtn.addEventListener('click',clearTasks);
// function clearTasks() {
//     while(clearBtn.firstChild){
//        clearBtn.removeChild(clearBtn.firstChild);
//     }
//   }





// var toDo = document.getElementById('todo');
// toDo.innerHTML += `<div class="col bg-white border">
// <div class="col-10 d-flex " style="justify-content: end;">
// <p class="me-5">Date:${dates}</p>
// <p>Time:${times}</label></p>
// </div>
// <div class="col-12">
// <h6>Task${taskInput}</h6>
// <h6>Task Description${desc}</h6>
// <hr>
// <div class="col-12 d-flex"  style="justify-content: end;">
// <button class="btn btn-2 border border-dark" id="btn-2">Delete</button>
// <button class="btn btn-2 border border-dark">Edit</button>
// </div>
// </div>
// </div>`;

// form.addEventListener('click', addTask); 
// function addTask(e) {
//     todo = form.value;
//     console.log(todo);
//     // if (taskInput.value === '' ) {
//     //     alert('Add a task'); 
//        // }
//      taskInput.value = '';
//     e.preventDefault();   
// }









 


