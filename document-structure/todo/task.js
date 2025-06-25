const taskList = document.querySelector('.tasks__list');
const taskInput = document.querySelector('.tasks__input');
const buttonAdd = document.querySelector('.tasks__add');

buttonAdd.addEventListener('click', (e) => {
    e.preventDefault();
    const buttonRemove = `&times;`;
    taskList.insertAdjacentHTML('afterbegin', `
        <div class="task">
            <div class="task__title">
                ${taskInput.value}
            </div>
            <a href="#" class="task__remove">${buttonRemove}</a>
        </div>            
    `);

    const taskRemove = document.querySelector('.task__remove');
    taskRemove.addEventListener('click', (e) => {
        e.preventDefault();
        const task = taskRemove.closest('.task');
        task.remove();
    });    
    taskInput.value = '';
});