import {
  folderState,
  folderNameArray,
} from './createNewProjectFolder';
import {
  changeFolderIndex,
  currentFolderIndex,
} from './changeFolder';
import {
  removeAllTasks,
  appendToTaskList,
} from './addTaskToDOMTaskList';
// Create Folder Container Div
export function createFolderContainerDiv() {
  let containerDiv = document.createElement('div');
  containerDiv.setAttribute('class', 'folderContainer');
  return containerDiv;
}
// Create Div With Folder Name
export function createFolderNameDiv() {
  let folder = document.createElement('div');
  folder.setAttribute('class', 'folderName');
  folder.textContent = document.getElementById('folderName').value;
  return folder;
}
// Create Delete Button Div
export function createDeleteButtonDiv() {
  let deleteButton = document.createElement('button');
  deleteButton.innerHTML =
    '<i id="deleteBtn" class="material-icons">delete</i>';
  return deleteButton;
}

// Add event listener to delete button
export function addDeleteButtonEventListener(button) {
  button.addEventListener('click', () => {
    button.closest('.folderContainer').remove();
  });
}
// Remove folder index from array on delete press
export function removeFolderFromArray(event) {
  // Get index of clicked folder element
  let folderIndex = currentFolderIndex(event);
  // Remove index from folderNameArray (delete that folder)
  folderNameArray.splice(folderIndex, 1);
}
// Append Folder Name Div and Delete Button Div to folderList
export function appendToFolderList() {
  let folderList = document.getElementById('folderList');
  let folderContainer = createFolderContainerDiv();
  let folderNameDiv = createFolderNameDiv();
  let deleteButton = createDeleteButtonDiv();
  folderContainer.appendChild(folderNameDiv);
  folderContainer.appendChild(deleteButton);
  folderList.appendChild(folderContainer);
  // Clear dom task list, if different folder is clicked
  folderContainer.addEventListener('click', function (event) {
    if (
      folderState.currentFolderIndex !== currentFolderIndex(event)
    ) {
      removeAllTasks();
    }
  });
  // Change folderState.currentFolderIndex on click
  folderContainer.addEventListener('click', function (event) {
    changeFolderIndex(event);
  });
  // Delete clicked folder from array on delete button click
  deleteButton.addEventListener('click', function (event) {
    removeFolderFromArray(event);
  });
  addDeleteButtonEventListener(deleteButton);
  // Populate tasklist with stored tasks
  folderContainer.addEventListener('click', populateTasks);
}
// Change Folder Event Listener
function changeFolder() {
  const folderContainers =
    document.getElementsByClassName('folderContainer');
  for (let i = 0; i < folderContainers.length; i++) {
    folderContainers[i];
  }
}
// When new folder is clicked, populate domlist with previous tasks
export function populateTasks(event) {
  // Remove all tasks
  removeAllTasks();
  // If test folder deleted, lines below shouldn't matter
  if (folderNameArray.length === 0) {
    return;
  }
  // Load tasklist (dom) with folderNameArray[folderState.currentFolderIndex]
  for (
    let i = 1;
    i < folderNameArray[folderState.currentFolderIndex].length;
    i++
  ) {
    let taskObject =
      folderNameArray[folderState.currentFolderIndex][i];
    appendToTaskList(taskObject);
  }
}

// Check if clicked folder
