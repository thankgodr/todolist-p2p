export default class Todo {
  constructor(title, isCompleted, index = 0) {
    this.title = title;
    this.isCompleted = isCompleted;
    this.index = index;
    this.id = new Date().getTime();
  }

  updateStatus(status) {
    this.isCompleted = status;
  }
}