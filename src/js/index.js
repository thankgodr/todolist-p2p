import Todo from './models/todo.js';
import TaskManager from './controllers/taskmanager.js';
import '../css/style.css';

const taskManager = new TaskManager();

const demoData = () => {
  if (taskManager.taskList.length === 0) {
    const singleTask = new Todo('Do action one', false, 1);
    taskManager.addTask(singleTask);

    const singleTask1 = new Todo('Do action two', false, 2);
    taskManager.addTask(singleTask1);

    const singleTask2 = new Todo('Do action three', true, 0);
    taskManager.addTask(singleTask2);
  }
};
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
  const sorted = taskManager.taskList.sort(compare);
  sorted.forEach((task) => {
    const listViewItem = document.createElement('li');
    listViewItem.className = 'list-group-item d-flex justify-content-between align-items-center';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = 'name';

    checkbox.className = 'form-check-input pull-left';
    checkbox.style.marginRight = '17px';
    checkbox.value = task.isCompleted;

    const span = document.createElement('span');
    span.className = 'fas fa-ellipsis-v pull-right';
    listViewItem.appendChild(checkbox);
    listViewItem.appendChild(document.createTextNode(task.title));
    listViewItem.appendChild(span);
    taskList.appendChild(listViewItem);
  });
};
demoData();
printAllTasks();
