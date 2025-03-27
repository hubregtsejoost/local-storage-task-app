// Get elements
const addButton = document.getElementById('addButton');
const taskContainer = document.getElementById('taskContainer');

//Event listener for the add button
addButton.addEventListener('click', addTask);

//Function to add a task
function addTask(){
    const newTask = document.createElement('div');
    newTask.className = 'task';

    const taskButton = document.createElement('button');
    taskButton.id = 'taskButton';
    taskButton.innerHTML = '<i class="fa-regular fa-circle"></i>';

    const taskInput = document.createElement('input');
    taskInput.type = 'text';
    taskInput.placeholder = 'Add a task';

    const saveButton = document.createElement('button');
    saveButton.id = 'saveButton';
    saveButton.innerHTML = '<i class="fa-solid fa-check"></i>';

    const deleteButton = document.createElement('button');
    deleteButton.id = 'deleteButton';
    deleteButton.innerHTML = '<i class="fa-regular fa-square-minus"></i>';

    saveButton.addEventListener('click', () => {
        const taskText = taskInput.value;
        if (taskText.trim() !== '') {
            const taskTextElement = document.createElement('p');
            taskTextElement.id = 'taskText';
            taskTextElement.textContent = taskText;
            newTask.replaceChild(taskTextElement, taskInput);
            newTask.replaceChild(deleteButton, saveButton);
        }
    });

    taskButton.addEventListener('click', () => {
        const icon = taskButton.querySelector('i');
        icon.classList.toggle('fa-circle');
        icon.classList.toggle('fa-circle-check');
        taskTextElement.style.textDecoration = 'line-through';
    }); 

    deleteButton.addEventListener('click', () => {
        newTask.remove();
    });

    newTask.appendChild(taskButton);
    newTask.appendChild(taskInput);
    newTask.appendChild(saveButton);
    
    taskContainer.appendChild(newTask);
}