import Todo from "../models/todo";
export default class TaskManager {
  constructor() {
    let tempArr = JSON.parse(localStorage.getItem('tasksListDb'));
    if (tempArr == null) {
      this.taskList = [];
    }else{
      this.taskList = [];
      tempArr.forEach(element => {
       this.taskList.push(Object.assign(new Todo, element))
      });
    }
  }


  addTask(task) {
    const nextIndex = this.taskList.length > 0 ? this.taskList.length == 1 ? 1 : this.taskList.length : 0
    task.updateIndex(nextIndex)
    this.taskList.push(task);
    this.#updateTaskStorage();
  }

  editTask(task){
    const index = this.taskList.findIndex(currentTask => {
      return currentTask.id === task.id;
    })
    this.taskList[index] = task;
    this.#updateTaskStorage();
  }

  remveTask(task) {
    this.taskList = this.taskList.filter((currentTask) => currentTask.id !== task.id);
    this.#updateIndexes();
    this.#updateTaskStorage();
  }

    #updateTaskStorage() {
    localStorage.setItem('tasksListDb', JSON.stringify(this.taskList));
  }

  #compare(current, next) {
    if (current.index < next.index) {
      return -1;
    }
    if (current.index < next.index) {
      return 1;
    }
    return 0;
  };
  #updateIndexes(){
    const sorted = this.taskList.sort(this.#compare)
    sorted.forEach((task, index) => {
      task.index = index
    })
    this.taskList = sorted
  }
}