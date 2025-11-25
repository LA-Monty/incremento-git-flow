document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById ('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    const addTask = (event) => {
        // hotfix - Al momento de agregar una tarea esta no se mostraba y dejaba el registro vacio por defecto.
        event.preventDefault();
        const taskText = taskInput.value.trim();
        if(!taskText){
            return;
        }
    // Este script genera las entradas de tareas desde la app y las mismas se generan como un elemento de una columna
        const li = document.createElement('li');
        li.textContent = taskText;
        taskList.appendChild(li);
        taskInput.value = '';
    };

    addTaskBtn.addEventListener('click', addTask);
    taskInput.addEventListener('Keypress', (e) => {
        if(e.key === 'Enter') {
            addTask(e);
        }
    });

});

