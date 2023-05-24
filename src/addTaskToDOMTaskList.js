import { folderNameArray, folderState } from './folderFunctions';

// Current Folder Name
let currentFolderName = 'Test Folder';

// Create Task Row Functions
export function createTaskContainerDiv() {
  let container = document.createElement('div');
  container.setAttribute('class', 'taskDescription');
  return container;
}
// Create Div with Task Description
export function createTaskDescriptionDiv(taskObject) {
  let task = document.createElement('div');
  task.setAttribute('class', 'taskDescription');
  task.textContent = taskObject.description;
  return task;
}
// Create Div With Due Date
export function createDueDateDiv(taskObject) {
  let task = document.createElement('div');
  task.setAttribute('class', 'taskDueDate');
  task.textContent = taskObject.duedate;
  return task;
}
// Create Div with Priority
export function createPriorityDiv(taskObject) {
  let task = document.createElement('div');
  task.setAttribute('class', 'taskPriority');
  task.textContent = taskObject.priority;
  return task;
}
// Create container div with index number
function createContainerDiv() {
  let containerDiv = document.createElement('div');
  containerDiv.setAttribute('class', 'newTask');
  // Give task div ID matching it's index number
  assignIndexToContainer(containerDiv);
  return containerDiv;
}
// Container callback index function
function assignIndexToContainer(taskList) {
  let taskCount =
    document.getElementById('taskList').childElementCount;
  taskCount += 1;
  return taskList.setAttribute('id', taskCount);
}
// Append tasks to dom
function appendTaskPropertyDivsToContainer(taskObject) {
  let taskDescription = createTaskDescriptionDiv(taskObject);
  let taskDueDate = createDueDateDiv(taskObject);
  let taskPriority = createPriorityDiv(taskObject);
  let containerDiv = createContainerDiv();
  let deleteButton = createDeleteButtonDiv();
  let checkBox = createCheckBoxDiv();
  let editButton = createEditDiv();
  deleteTaskFromDOMEventListener(deleteButton);
  containerDiv.appendChild(checkBox);
  containerDiv.appendChild(taskDescription);
  containerDiv.appendChild(taskDueDate);
  containerDiv.appendChild(taskPriority);
  containerDiv.appendChild(deleteButton);
  containerDiv.appendChild(editButton);
  deleteTaskFromArrayEventListener(deleteButton);
  updateIndexEventListener(deleteButton);
  toggleTextStrikethrough(checkBox, taskDescription);

  // Current edit button shenanigans
  editEventListener(editButton);

  return containerDiv;
}
// Append Task Row Div to Task List Parent Div
export function appendToTaskList(taskObject) {
  let taskDiv = appendTaskPropertyDivsToContainer(taskObject);
  document.getElementById('taskList').appendChild(taskDiv);
}
// Create Delete Button Div
function createDeleteButtonDiv() {
  let deleteButton = document.createElement('button');
  deleteButton.innerHTML =
    '<i id="deleteBtn" class="material-icons">delete</i>';
  return deleteButton;
}
// Update index ID when a task is deleted
function updateIndex() {
  const taskNodes = document.getElementsByClassName('newTask');
  for (let i = 0; i < taskNodes.length; i++) {
    const currentTask = taskNodes[i];
    currentTask.id = i + 1;
  }
}
// Update index event listener
function updateIndexEventListener(button) {
  button.addEventListener('click', updateIndex);
}

// Remove task from task array callback
function deleteTaskFromArray(button) {
  // If no folder is selected
  if (folderNameArray.length === 0) {
    return;
  }
  folderNameArray[folderState.currentFolderIndex].splice(
    folderState.currentFolderIndex,
    1
  );
}

function deleteTaskFromArrayEventListener(button) {
  button.addEventListener('click', () => deleteTaskFromArray(button));
}
// Add event listener to delete button to remove div from dom
function deleteTaskFromDOMEventListener(button) {
  button.addEventListener('click', () => {
    button.closest('.newTask').remove();
    // **BELOW SHOULD REMOVE OBJECT FROM INDEX TOO LATER
    /* delete myLibrary[index]; */
  });
}
// Remove all child nodes
export function removeAllTasks() {
  let element = document.getElementById('taskList');
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}
// Create div with checkbox
function createCheckBoxDiv() {
  let checkBox = document.createElement('input');
  checkBox.setAttribute('type', 'checkbox');
  return checkBox;
}
// Checkbox eventlistener callback
function toggleTextStrikethrough(checkBox, taskDescription) {
  checkBox.addEventListener('change', function () {
    // Check if the checkbox is checked
    if (checkBox.checked) {
      // Apply strikethrough style to the text
      taskDescription.style.textDecoration = 'line-through';
    } else {
      taskDescription.style.textDecoration = 'none';
    }
  });
}
// Create edit div
function createEditDiv() {
  let editButton = document.createElement('button');
  editButton.innerHTML =
    '<i id="editBtn" class="material-icons">edit</i>';
  return editButton;
}
// Edit eventlistener callback
function editEventListener(editButton) {
  editButton.addEventListener('click', function () {
    const newWindow = window.open(
      '',
      '_blank',
      'width=500,height=400'
    );
  });
}
