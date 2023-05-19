// Task Factory Function
export function Task(description, duedate, priority) {
  this.description = description;
  this.duedate = duedate;
  this.priority = priority;
  this.completed = false;
}
// Create Task Object With User Input
export function createTaskObject() {
  let description = document.getElementById('taskDescription').value;
  let duedate = document.getElementById('dueDate').value;
  let priority = document.getElementById('priority').value;
  let task = new Task(description, duedate, priority);
  return task;
}
