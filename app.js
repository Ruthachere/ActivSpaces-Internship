//event listeners for from
const form = document.querySelector('#form_control');
form.addEventListener('submit', runEvent);
//event listeners for taskInput
const taskInput = document.querySelector('.task');
//clear input
taskInput.value = '';
taskInput.addEventListener('input', runEvent);


 function runEvent (e){
console.log(`EVENT TYPE: ${e.type}`);
//get input value
console.log(taskInput.value);
 
 e.preventDefault();
}