import { Task } from './createTaskObject';
// Create Task Object With User Input
export function createTaskObject() {
  let description = document.getElementById('taskDescription').value;
  let duedate = document.getElementById('dueDate').value;
  let priority = document.getElementById('priority').value;
  let task = new Task(description, duedate, priority);
  return task;
}
// Create Task Row Functions
export function createTaskCompleteInfoDiv() {
  let container = document.createElement('div');
  container.setAttribute('class', 'taskDescription');
  return container;
}
// Create Div with Task Description
export function createTaskDescriptionDiv(taskobject) {
  let task = document.createElement('div');
  task.setAttribute('class', 'taskDescription');
  task.textContent = taskobject.description;
  return task;
}
// Create Div With Due Date
export function createDueDateDiv(taskobject) {
  let task = document.createElement('div');
  task.setAttribute('class', 'taskDueDate');
  task.textContent = taskobject.duedate;
  return task;
}
// Create Div with Priority
export function createPriorityDiv(taskobject) {
  let task = document.createElement('div');
  task.setAttribute('class', 'taskPriority');
  task.textContent = taskobject.priority;
  return task;
}
// Create Task Row Div
function createNewTaskDiv() {
  let containerDiv = document.createElement('div');
  containerDiv.setAttribute('class', 'newTask');
  return containerDiv;
}
// Append task description, duedate, priority, delete button to Task Row Div
function appendTaskPropertyDivsToContainer() {
  let taskObject = createTaskObject();
  let taskDescription = createTaskDescriptionDiv(taskObject);
  let taskDueDate = createDueDateDiv(taskObject);
  let taskPriority = createPriorityDiv(taskObject);
  let containerDiv = createNewTaskDiv();
  let deleteButton = createDeleteButtonDiv();
  addDeleteButtonEventListener(deleteButton);
  containerDiv.appendChild(taskDescription);
  containerDiv.appendChild(taskDueDate);
  containerDiv.appendChild(taskPriority);
  containerDiv.appendChild(deleteButton);
  console.log(taskObject);
  return containerDiv;
}
// Append Task Row Div to Task List Parent Div
export function appendToTaskList(event) {
  event.preventDefault();
  let taskDiv = appendTaskPropertyDivsToContainer();
  document.getElementById('taskList').appendChild(taskDiv);
}
// Create Delete Button Div
function createDeleteButtonDiv() {
  let deleteButton = document.createElement('button');
  deleteButton.innerHTML =
    '<i id="deleteBtn" class="material-icons">delete</i>';
  return deleteButton;
}
// Add event listener to delete button
function addDeleteButtonEventListener(button) {
  button.addEventListener('click', () => {
    button.closest('.newTask').remove();
    // **BELOW SHOULD REMOVE OBJECT FROM INDEX TOO LATER
    /* delete myLibrary[index]; */
  });
}
