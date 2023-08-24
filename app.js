//define ui variables
const form = document.querySelector('#form_control');





/*const taskList = document.querySelector('.collection') ;
const taskInput = document.querySelector('#tasks');
const clearBtn = document.querySelector('#btn-2')
//const taskTitle = document.querySelector('#Task');


//definition of ui values for date
const taskListOne = document.querySelector('.collection') ;
const taskInputOne = document.querySelector('#task');
//const taskTitleOne = document.querySelector('#Task-one');

//definition of ui values for time
const taskListTwo = document.querySelector('.collection-two') ;
const taskInputTwo = document.querySelector('#task-1');
//const taskTitleTwo = document.querySelector('#Task-two');

//definition of ui values for textarea
const taskListThree = document.querySelector('.collection-three') ;
const taskInputThree = document.querySelector('#description');
//const taskTitleThree = document.querySelector('#task-three');
//load all event listeners
loadEventListeners();

//load all event listeners
function  loadEventListeners() {
    //add task event
    form.addEventListener('submit', addTask); 
    clearBtn.addEventListener('click',clearTasks);

}
//add task
function addTask(e) {
    if (taskInput.value === '' ) {
        alert('Add a task'); 
       
    }
    //create text element for date
    var text = document.createElement('text');

    //add class for text
    text.className = 'collection-items';
    //cretae text node and append to text for date
    text.appendChild(document.createTextNode(taskInputOne.value));
     //append  text to ul
    taskListOne.appendChild(text);
    taskInputOne.value = '';
   text.style.display = 'block';
    

    //create text element for time
    var text = document.createElement('text');

    //add class
    text.className = 'collection-item-one';
    //create text node and append to li
    text.appendChild(document.createTextNode(taskInputTwo.value));
     //append to ul
    taskListTwo.appendChild(text);
    taskInputTwo.value = '';
    text.style.display = 'block';

    //create text element for task
    var text = document.createElement('text');
    //add class
    text.className = 'collection-item';
    //create text node and append to text
    text.appendChild(document.createTextNode(taskInput.value));
   //append  text to ul
   taskList.appendChild(text);
   taskInput.value = '';
   text.style.display = 'block';

    //create text element for task
    var text = document.createElement('text');
    //add class
    text.className = 'collection-item-three';
    //create text node and append to text
    text.appendChild(document.createTextNode(taskInputThree.value));
   //append  text to ul
   taskListThree.appendChild(text);
   taskInputThree.value = '';
   text.style.display = 'block';
   
   e.preventDefault();   
}
   //clear input
   function clearTasks() {
     while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
     }
   }






 


