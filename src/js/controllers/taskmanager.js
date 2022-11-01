export default class TaskManager {
  constructor() {
    this.taskList = JSON.parse(localStorage.getItem('tasksListDb'));
    if (this.taskList == null) {
      this.taskList = [];
    }
  }

  addTask(task) {
    this.taskList.push(task);
    this.#updateTaskStorage();
  }

  remveTask(task) {
    this.taskList = this.taskList.filter((currentTask) => currentTask.id !== task.id);
    this.#updateTaskStorage();
  }

    #updateTaskStorage() {
    localStorage.setItem('tasksListDb', JSON.stringify(this.taskList));
  }
}