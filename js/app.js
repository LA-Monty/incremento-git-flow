document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById ('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');
    const emptyImage = document.querySelector('.empty-image');


    // Eliminar imagen empty (Esta imagen aparecera cuando no hayan tareas por realizar)
    const toggleEmptySatate = () => {
        emptyImage.style.display = taskList.children.length === 0 ? 'block' : 'none';
    }

    const addTask = (event) => {
        // hotfix - Al momento de agregar una tarea esta no se mostraba y dejaba el registro vacio por defecto.
        event.preventDefault();
        const taskText = taskInput.value.trim();
        if(!taskText){
            return;
        }
    // Este script genera las entradas de tareas desde la app y las mismas se generan como un elemento de una columna
        const li = document.createElement('li');
        li.innerHTML = `
        
        <input type="checkbox" class="checkbox">
        <span>${taskText}</span>
        <div class="task-buttons">
            <button class="edit-btn"><i class="fa-solid fa-pen"></i></button>
            <button class="delete-btn"><i class="fa-solid fa-trash"></i></button>
        </div>`


        taskList.appendChild(li);
        taskInput.value = '';
        toggleEmptySatate();
    };

    addTaskBtn.addEventListener('click', addTask);
    taskInput.addEventListener('Keypress', (e) => {
        if(e.key === 'Enter') {
            addTask(e);
        }
    });

});

