let form = document.getElementById("taskForm");
let tasks = [];

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
    //get form values
    const name = form.name;
    const email = form.email;
    const message = form.message;
    const select = form.select;
//validation of form
    let hasError = false;
    if (name.value.trim() == "") {
        addErrorElement(name, "This is required");
        hasError = true;
       } else{

          removeErrorElement(name);
       }
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
        select:select.value,
        email: email.value,
        message: message.value
    }
    // // if (todoId) {
    // //     tasks[todoId] = todo;
        
    // // } else {
    // //     
    // // }
    // tasks.push(todo);
    form.reset();
    let arrayStr = JSON.stringify(tasks);
    localStorage.setItem('todo', arrayStr);
});
if(localStorage.getItem('todo')){
    arrayStr = localStorage.getItem('todo');
    tasks = JSON.parse(arrayStr);   
}
