import { Task } from './createTaskObject';

// Create Task Object With User Input
export function createTaskObject() {
  let description = document.getElementById('taskDescription').value;
  let duedate = document.getElementById('dueDate').value;
  let priority = document.getElementById('priority').value;
  let task = new Task(description, duedate, priority);
  return task;
}

// Task Row Functions
export function createTaskCompleteInfoDiv() {
  let container = document.createElement('div');
  container.setAttribute('class', 'taskDescription');
  return container;
}

// Task Description Function
// Return Div with Task Description
export function createTaskDescriptionDiv(taskobject) {
  let task = document.createElement('div');
  task.setAttribute('class', 'taskDescription');
  task.textContent = taskobject.description;
  return task;
}

// Task Date Function
// Return Div With Due Date
export function createDueDateDiv(taskobject) {
  let task = document.createElement('div');
  task.setAttribute('class', 'taskDueDate');
  task.textContent = taskobject.duedate;
  return task;
}

// Task Priority Function
// Return Div with Priority
export function createPriorityDiv(taskobject) {
  let task = document.createElement('div');
  task.setAttribute('class', 'taskPriority');
  task.textContent = taskobject.priority;
  return task;
}

// Make Task Row Div with Task description, duedate, and priority
function appendTaskPropertyDivsToContainer() {
  let taskObject = createTaskObject();
  let taskDescription = createTaskDescriptionDiv(taskObject);
  let taskDueDate = createDueDateDiv(taskObject);
  let taskPriority = createPriorityDiv(taskObject);
  let containerDiv = document.createElement('div');
  containerDiv.appendChild(taskDescription);
  containerDiv.appendChild(taskDueDate);
  containerDiv.appendChild(taskPriority);
  console.log(taskObject);
  return containerDiv;
}
// Append Task Row Div to Task List Parent Div
export function appendToTaskList(event) {
  event.preventDefault();
  let taskDiv = appendTaskPropertyDivsToContainer();
  document.getElementById('taskList').appendChild(taskDiv);
}
