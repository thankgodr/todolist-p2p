import '../css/style.css';

const taskListArr = [];
const demoData = () => {
  const singleTask = { description: 'Do action one', completed: false, index: 1 };
  taskListArr.push(singleTask);

  const singleTask1 = { description: 'Do action two', completed: false, index: 2 };
  taskListArr.push(singleTask1);

  const singleTask2 = { description: 'Do action three', completed: true, index: 0 };
  taskListArr.push(singleTask2);
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
  const sorted = taskListArr.sort(compare);
  sorted.forEach((task) => {
    const listViewItem = document.createElement('li');
    listViewItem.className = 'list-group-item d-flex justify-content-between align-items-center';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = 'name';

    checkbox.className = 'form-check-input pull-left';
    checkbox.style.marginRight = '17px';
    checkbox.checked = task.completed;

    const span = document.createElement('span');
    span.className = 'fas fa-ellipsis-v pull-right';
    listViewItem.appendChild(checkbox);
    listViewItem.appendChild(document.createTextNode(task.description));
    listViewItem.appendChild(span);
    taskList.appendChild(listViewItem);
  });
};
demoData();
printAllTasks();
