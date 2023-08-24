//define ui variables
const form = document.querySelector('#form_control');
var taskInputs = document.querySelector('.task');
const textarea =document.querySelector('#description');

var taskInputs = document.querySelector('#tasks');

//load all event listeners
loadEventListeners();

//load all event listeners
function  loadEventListeners() {
    //add form event
    form.addEventListener('submit', addTask); 
     
}
//add task
function addTask(e) {
    if (taskInputs.value === '' ) {
        alert('Add a task'); 
       
    }
   
    console.log(`EVENT TYPE: ${e.type}`);
    //clear input
    taskInputs.value = '';
    e.preventDefault();   
}



 

/* clear input
taskInput.value = '';
taskInput.addEventListener('input', runEvent);

//event listeners for textarea

textarea.addEventListener('', runEvent);
textarea.value = '';

 function runEvent (e){

console.log(taskInput.value);
 console.log(textarea.value);
 
}*/


