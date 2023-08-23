const form = document.querySelector('#form_control');
form.addEventListener('submit' ,runEvent);

const taskInput =document.querySelector('.task');
taskInput.value ='';
taskInput.addEventListener('keydown',runEvent);


 function runEvent (e){
console.log(`EVENT TYPE: &{e.type}`);
 console.log(taskInput.value);
 e.preventDefault();
}