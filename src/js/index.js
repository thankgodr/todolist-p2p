import TaskManager from './controllers/taskmanager';
import Todo from './models/todo';
import '../css/style.css';
import StatusController from './controllers/statuscontroller';

const taskmanager = new TaskManager();
const statusController = new StatusController();

const compare = (current, next) => {
  if (current.index < next.index) {
    return -1;
  }
  if (current.index < next.index) {
    return 1;
  }
  return 0;
};
const printAllTasks = () => {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';
  const sorted = taskmanager.taskList.sort(compare);
  sorted.forEach((task) => {
    const listViewItem = document.createElement('li');
    listViewItem.className = 'list-group-item d-flex justify-content-between align-items-center';
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = 'name';

    checkbox.className = 'form-check-input pull-left';
    checkbox.style.marginRight = '17px';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', (event) => {
      statusController.changeStatus(event, task);
    });

    const span = document.createElement('span');
    span.className = 'fas fa-ellipsis-v pull-right';

    const deleteIcon = document.createElement('span');
    deleteIcon.className = 'fa fa-trash-o pull-right deleteIcon';
    deleteIcon.addEventListener('click', (event) => {
      event.preventDefault();
      taskmanager.remveTask(task);
      printAllTasks();
    });

    span.addEventListener('click', (event) => {
      event.preventDefault();
      span.style = 'display:none';
      deleteIcon.style = 'display: block';
    });

    listViewItem.appendChild(checkbox);
    const ptag = document.createElement('span');
    ptag.setAttribute('contenteditable', 'true');
    ptag.setAttribute('class', 'single-line');
    ptag.appendChild(document.createTextNode(task.description));
    ptag.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        task.updateDescription(ptag.innerText);
        if (ptag.innerText.length > 0) {
          taskmanager.editTask(task);
        }
        ptag.setAttribute('contenteditable', 'false');
        ptag.setAttribute('contenteditable', 'true');
      }
    });
    listViewItem.appendChild(ptag);
    listViewItem.appendChild(deleteIcon);
    listViewItem.appendChild(span);

    taskList.appendChild(listViewItem);
  });

  // Add a new task
  document.getElementById('newTask').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      const description = document.getElementById('newTask').value;
      event.preventDefault();
      if (description.length > 0) {
        const newTodo = new Todo(description, false, 0);

        taskmanager.addTask(newTodo);
        document.getElementById('newTask').value = '';
        printAllTasks();
      }
    }
  });

  // clear all task
  document.getElementById('delete_btn').addEventListener('click', (event) => {
    event.preventDefault();
    taskmanager.clearAllCompleted();
    printAllTasks();
  });
};

printAllTasks();
