// Task Factory Function
export function Task(description, duedate, priority) {
  this.description = description;
  this.duedate = duedate;
  this.priority = priority;
  this.completed = false;
}
