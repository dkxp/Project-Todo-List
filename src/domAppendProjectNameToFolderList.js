import { folderNameArray } from './createNewProjectFolder';

// Refresh List with New Project Name
/* export function appendProjectNameToFolderList() {
  let folderList = document.querySelector('.folderList');
  let folderName = createNewTaskDiv();
  removeAllChildNodes(folderList);
  folderNameArray.forEach((element) => {
    let folderDiv = document.createElement('div');
    folderDiv.textContent = element;
    folderName.appendChild(folderDiv);
    let deleteButton = createDeleteButtonDiv();
    addDeleteButtonEventListener(deleteButton);
    folderName.appendChild(deleteButton);
    folderList.appendChild(folderName);
  });
} */

// Create Div with Task Description
export function createTaskDescriptionDiv(taskobject) {
  let task = document.createElement('div');
  task.setAttribute('class', 'taskDescription');
  task.textContent = taskobject.description;
  return task;
}

// Clear Folder names on website before re-adding all of them
function removeAllChildNodes(parent) {
  for (let i = parent.children.length - 1; i >= 0; i--) {
    parent.removeChild(parent.children[i]);
  }
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
    button.closest('.folderName').remove();
    // **BELOW SHOULD REMOVE OBJECT FROM INDEX TOO LATER
    /* delete myLibrary[index]; */
  });
}
// Make Folder Row Div
function createNewTaskDiv() {
  let containerDiv = document.createElement('div');
  containerDiv.setAttribute('class', 'folderName');
  return containerDiv;
}
