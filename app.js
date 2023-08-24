//define ui variables
const form = document.querySelector('#form_control');
const taskList = document.querySelector('.collection') ;
const taskInput = document.querySelector('#tasks');
const taskTitle = document.querySelector('#Task');

//load all event listeners
loadEventListeners();

//load all event listeners
function  loadEventListeners() {
    //add task event
    form.addEventListener('submit', addTask); 

}
//add task
function addTask(e) {
    if (taskInput.value === '' ) {
        alert('Add a task'); 
       
    }
    //create li element
    const li = document.createElement('li');
    //add class
    li.className = 'collection-item';
    //cretae text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    /*add class
    link.className = 'delete-item';*/
   //append to ul
   taskList.appendChild(li);
   //clear input
   taskInput.value = '';

    e.preventDefault();   
}



 

/* clear input
taskInput.value = '';
taskInput.addEventListener('input', runEvent);

//event listeners for textarea

textarea.addEventListener('', runEvent);
textarea.value = '';

 function runEvent (e){
    console.log(`EVENT TYPE: ${e.type}`);
    //clear input
    taskInputs.value = '';
console.log(taskInput.value);
 console.log(textarea.value);
 
}*/


