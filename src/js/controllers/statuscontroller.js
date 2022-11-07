import TaskManager from './taskmanager';

export default class StatusController {
  constructor() {
    this.taskManger = new TaskManager();
  }

  changeStatus(event, task) {
    if (event.currentTarget.checked) {
      task.updateStatus(true);
    } else {
      task.updateStatus(false);
    }
    this.taskManger.editTask(task);
  }
}