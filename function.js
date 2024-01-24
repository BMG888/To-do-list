const addTaskBtn = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const taskInput = document.getElementById('input-task');

addTaskBtn.addEventListener('click', function(){
    let task = document.createElement('div');
    task.classList.add('task');

    let li = document.createElement('li');
    li.innerText = `${taskInput.value}`;
    task.appendChild(li);

    let checkBtn = document.createElement('button');
    checkBtn.innerHTML = `<i class="fa-solid fa-check"></i>`
    checkBtn.classList.add('checkTask');
    task.appendChild(checkBtn);

    let deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`
    deleteBtn.classList.add('deleteTask');
    task.appendChild(deleteBtn);

    if(taskInput.value === ""){
        alert("Please type a task first.")
    } else{
        taskContainer.appendChild(task);
    };

    taskInput.value = "";

    checkBtn.addEventListener('click', function(){
        checkBtn.parentElement.style.textDecoration = "line-through"
    });

    deleteBtn.addEventListener('click', function(e){
        let target = e.target;
        target.parentElement.parentElement.remove();
    });
});