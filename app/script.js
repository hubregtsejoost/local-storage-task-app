// This array holds all the tasks
let tasks = [];

// Load all tasks from local storage
function loadTasks(){
    // retrieve tasks from local storage
    const storedTasks = localStorage.getItem('tasks');

    // if there's any tasks stored, turn them back into an array
    if (storedTasks){
        tasks = JSON.parse(storedTasks);

        // clear task container
        taskContainer.innerHTML = '';

        // turn all tasks back into an element and add to the container
        tasks.forEach(task => {
            createTaskElement(task.text, task.completed);
        });
    }
}

// create task element
function createTaskElement(text, isCompleted = false){
    const newTask = document.createElement('div');
    newTask.className = 'task';
    
    // task checkbutton
    const taskButton = document.createElement('button');
    taskButton.id = 'taskButton';
    taskButton.innerHTML = isCompleted ?
        '<i class="fa-regular fa-circle-check"></i>' :
        '<i class="fa-regular fa-circle"></i>';

    // task text
    const taskTextElement = document.createElement('p');
    taskTextElement.id = 'taskText';
    taskTextElement.textContent = text;

    // line through when task is completed
    if (isCompleted){
        taskTextElement.style.textDecoration = 'line-through';
    }

    // delete button
    const deleteButton = document.createElement('button');
    deleteButton.id = 'deleteButton';
    deleteButton.innerHTML = '<i class="fa-solid fa-minus"></i>';

    // toggle task completion
    taskButton.addEventListener('click', () => {
        const icon = taskButton.querySelector('i');
        if (icon.classList.contains('fa-circle')) {
            icon.classList.remove('fa-circle');
            icon.classList.add('fa-circle-check');
        } else {
            icon.classList.remove('fa-circle-check');
            icon.classList.add('fa-circle');
        }

        // toggle text decoration
        const isNowCompleted = icon.classList.contains('fa-circle-check');
        taskTextElement.style.textDecoration = isNowCompleted ? 'line-through' : 'none';

        // update task in array
        updateTask(newTask, isNowCompleted);

        // save to local storage
        saveTasks();
    });

    // delete tasks
    deleteButton.addEventListener('click', () => {
        // remove from dom
        newTask.remove();

        // remove from array
        removeFromArray(newTask);

        // save to local storage
        saveTasks();
    });

    newTask.appendChild(taskButton);
    newTask.appendChild(taskTextElement);
    newTask.appendChild(deleteButton);
    
    taskContainer.appendChild(newTask);
    
    return newTask;
}

function addTask() {
    // disable button
    addButton.disabled = true;

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
    saveButton.innerHTML = '<i class="fas fa-check"></i>';

    // Function to handle saving the task
    const saveTaskHandler = () => {
        const taskText = taskInput.value.trim();
        if (taskText !== ''){
            // remove the current task element
            newTask.remove();
            
            // create new task element using the same function as loaded tasks
            createTaskElement(taskText, false);

            // add task to array
            tasks.push({
                text: taskText, 
                completed: false
            });

            // save to local storage
            saveTasks();

            // re-enable button
            addButton.disabled = false;
        }
    };

    // Add click event listener to save button
    saveButton.addEventListener('click', saveTaskHandler);

    // Add keypress event listener to input for Enter key
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            saveTaskHandler();
        }
    });

    // append elements
    newTask.appendChild(taskButton);
    newTask.appendChild(taskInput);
    newTask.appendChild(saveButton);

    taskContainer.appendChild(newTask);
}

// remove task from array
function removeFromArray(task){
    const taskText = task.querySelector('#taskText').textContent;
    tasks = tasks.filter(task => task.text !== taskText);
}

// update task status in array
function updateTask(task, isCompleted) {
    const taskText = task.querySelector('#taskText').textContent;
    const taskIndex = tasks.findIndex(t => t.text === taskText);
    if (taskIndex !== -1) {
        tasks[taskIndex].completed = isCompleted;
    }
}

// save tasks to local storage
function saveTasks(){
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

loadTasks();

addButton.addEventListener('click', addTask);

