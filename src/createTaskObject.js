// Create task object with user input
export function createTaskObject(description, duedate, priority) {
  return {
    description,
    duedate,
    priority,
    completed: false,
  };
}
