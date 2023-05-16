// Task Factory Function
export function Task(title, description, duedate, priority) {
  this.title = title;
  this.description = description;
  this.duedate = duedate;
  this.priority = priority;
  this.completed = false;
}
