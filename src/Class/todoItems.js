export class TodoItem {
  constructor(title, description, dueDate) {
    // the constructor...
    this._title = title;
    this._description = description;
    this._dueDate = dueDate;
    this._completedStatus = false;
  }

  set title(title) {
    this._title = title;
  }

  get title() {
    return this._title;
  }

  set description(description) {
    this._description = description;
  }

  get description() {
    return this._description;
  }

  set dueDate(dueDate) {
    this._dueDate = dueDate;
  }

  get dueDate() {
    return this._dueDate;
  }

  set priority(priority) {
    this._priority = priority;
  }

  get priority() {
    return this._priority;
  }

  set note(note) {
    this._note = note;
  }

  get note() {
    return this._note;
  }

  // Getter and setter for completedStatus
  set completedStatus(status) {
    this._completedStatus = status;
  }

  get completedStatus() {
    return this._completedStatus;
  }
}
