let tasks = [];

function addTask() {
    const taskInput = document.getElementById("task-input");
    const taskTime = document.getElementById("task-time");
    const taskText = taskInput.value.trim();
    const taskHour = taskTime.value;

    if (taskText !== "") {
        const task = {
            text: taskText,
            time: taskHour,
            completed: false
        };
        tasks.push(task);
        displayTasks();
        taskInput.value = "";
        taskTime.value = "";
    } else {
        alert("Por favor ingresa una tarea.");
    }
}

function displayTasks() {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const taskItem = document.createElement("div");
        taskItem.className = "task";
        taskItem.innerHTML = `
            <input type="checkbox" ${task.completed ? 'checked' : ''} onchange="toggleCompletion(${index}, this.checked)">
            <input type="text" value="${task.text}" onchange="editTaskText(${index}, this.value)">
            <input type="time" value="${task.time}" onchange="editTaskTime(${index}, this.value)">
            <button onclick="markDelivered(${index})">Entregado</button>
            <button onclick="markUndelivered(${index})">No entregado</button>
            <button onclick="deleteTask(${index})">Eliminar</button>
        `;
        if (task.completed) {
            taskItem.classList.add('completed');
        }
        taskList.appendChild(taskItem);
    });
}

function toggleCompletion(index, checked) {
    tasks[index].completed = checked;
    displayTasks();
}

function editTaskText(index, newText) {
    tasks[index].text = newText;
}

function editTaskTime(index, newTime) {
    tasks[index].time = newTime;
}

function markDelivered(index) {
    tasks[index].completed = true;
    displayTasks();
}

function markUndelivered(index) {
    tasks[index].completed = false;
    displayTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

function filterTasks(delivered) {
    const filteredTasks = tasks.filter(task => task.completed === delivered);
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "";
    filteredTasks.forEach((task, index) => {
        const taskItem = document.createElement("div");
        taskItem.className = "task";
        taskItem.innerHTML = `
            <input type="checkbox" ${task.completed ? 'checked' : ''} onchange="toggleCompletion(${index}, this.checked)">
            <input type="text" value="${task.text}" onchange="editTaskText(${index}, this.value)">
            <input type="time" value="${task.time}" onchange="editTaskTime(${index}, this.value)">
            <button onclick="markDelivered(${index})">Entregado</button>
            <button onclick="markUndelivered(${index})">No entregado</button>
            <button onclick="deleteTask(${index})">Eliminar</button>
        `;
        if (task.completed) {
            taskItem.classList.add('completed');
        }
        taskList.appendChild(taskItem);





        let tasks = [];

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    const taskDateTime = document.getElementById("taskDateTime").value;

    if (taskText !== "") {
        const task = {
            id: Date.now(),
            text: taskText,
            completed: false,
            dueDate: new Date(taskDateTime)
        };

        tasks.push(task);
        renderTasks();
        taskInput.value = "";
        document.getElementById("taskDateTime").value = "";
    }
}

function renderTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach(task => {
        const li = document.createElement("li");
        li.innerHTML = `
            <input type="checkbox" onchange="toggleCompletion(${task.id})" ${task.completed ? "checked" : ""}>
            <span>${task.text}</span>
            <span>${task.dueDate.toLocaleString()}</span>
            <span class="task-edit" onclick="editTask(${task.id})">✎</span>
            <span class="task-edit" onclick="deleteTask(${task.id})">❌</span>
        `;
        taskList.appendChild(li);
    });
}

function toggleCompletion(id) {
    const task = tasks.find(task => task.id === id);
    task.completed = !task.completed;
    renderTasks();
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
}

function editTask(id) {
    const newText = prompt("Enter new text:");
    if (newText !== null) {
        const task = tasks.find(task => task.id === id);
        task.text = newText.trim();
        renderTasks();
    }
}
    });
}
