document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById ('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');
    const emptyImage = document.querySelector('.empty-image');
    
    const todosContainer = document.querySelector('.todos-container');

    const toggleEmptySatate = () => {
        emptyImage.style.display = taskList.children.length === 0 ? 'block' : 'none';
        todosContainer.style.width = taskList.children.length > 0 ? '100' : '50%'
    };


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


        const checkbox = li.querySelector('.checkbox');    
        const editBtn = li.querySelector('.edit-btn');

        if(compled) {
            li.classList.add('completed');
            editBtn.disabled = true;
            editBtn.style.opacity ='0.5';
            editBtn.style.pointerEvents = 'none';
        }

        checkbox.addEventListener('change', () => {
            const isChecked = checkbox.checked;
            li.classList.toggle('completed',isChecked);
            editBtn.disabled = isChecked;
            editBtn.style.opacity = isChecked ? '0.5' : '1';
            editBtn.style.pointerEvents = isChecked ? 'none' : 'auto'           
        })

        editBtn.addEventListener('Click', () => {
            if(!checkbox.checked) {
                taskInput.value = li.querySelector('span').textContent;
                li.remove();
                toggleEmptySatate();
            }
        });

        li.querySelector('.delete-btn').addEventListener('click', () => {
            li.remove();
            toggleEmptySatate();
        });

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

