export default class Todo {
  constructor(title, isCompleted, index = 0) {
    this.description = title;
    this.completed = isCompleted;
    this.index = index;
    this.id = new Date().getTime();
  }

  updateStatus(status) {
    this.completed = status;
  }

  updateIndex(index){
    this.index = index;
  }

  updateDescription(description){
    this.description = description;
  }
}