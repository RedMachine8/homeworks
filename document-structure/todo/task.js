const taskList = document.querySelector('.tasks__list');
const taskInput = document.querySelector('.tasks__input');

taskInput.addEventListener('keydown', (e) => {
    if(e.key === 'Enter' && taskInput.value.trim() !== '') {
        //Новая задача
        const newtask = document.createElement('div');
        newtask.classList.add('task');

        //Заголовок задачи
        const tittleTask = document.createElement('div');
        tittleTask.classList.add('task__title');
        tittleTask.textContent = taskInput.value;

        //Кнопка удаления
        const taskRemove = document.createElement('a');
        taskRemove.classList.add('task__remove');
        taskRemove.href = '#';
        taskRemove.innerHTML = `&times;`;

        taskRemove.addEventListener('click', (e) => {
            e.preventDefault();
            newtask.remove();
        });
        newtask.appendChild(tittleTask);
        newtask.appendChild(taskRemove);

        taskList.appendChild(newtask);

        taskInput.value = '';
    }
});