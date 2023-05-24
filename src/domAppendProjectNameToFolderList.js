import { folderState, folderNameArray } from './folderFunctions';

import {
  appendTaskPropertyDivsToContainer,
  removeAllTasks,
} from './addTaskToDOM';
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
// Add event listener to delete button to remove folder from DOM
export function addDeleteButtonEventListener(button) {
  button.addEventListener('click', (event) => {
    removeTaskDivs(event);
    button.closest('.folderContainer').remove();
  });
}
// Delete folder from array
export function removeFolderFromArray(event) {
  // Get index of clicked folder element
  let folderIndex = currentFolderIndex(event);
  // Remove index from folderNameArray (delete that folder)
  folderNameArray.splice(folderIndex, 1);
}
// Delete tasks from dom, if current folder is deleted
export function removeTaskDivs(event) {
  let folderIndex = currentFolderIndex(event);
  if (folderIndex === folderState.currentFolderIndex) {
    removeAllTasks();
  }
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
  folderContainer.addEventListener('click', function () {
    removeAllTasks();
  });
  // Change folderState.currentFolderIndex on click
  folderContainer.addEventListener('click', function (event) {
    changeFolderIndex(event);
  });
  // Delete clicked folder from array on delete button click
  deleteButton.addEventListener('click', function (event) {
    event.stopPropagation();
    removeFolderFromArray(event);
  });
  // Delete folder from DOM folder list on delete button click
  addDeleteButtonEventListener(deleteButton);
  // Populate tasklist with stored tasks when new folder is clicked
  folderContainer.addEventListener('click', populateTasks);
}
// When new folder is clicked, populate domlist with previous tasks
export function populateTasks() {
  // Load tasklist (dom) with folderNameArray[folderState.currentFolderIndex]
  for (
    let i = 1;
    i < folderNameArray[folderState.currentFolderIndex].length;
    i++
  ) {
    let taskObject =
      folderNameArray[folderState.currentFolderIndex][i];
    appendTaskPropertyDivsToContainer(taskObject);
  }
}
// Get index of clicked folder element
export function currentFolderIndex(event) {
  // Get clicked folder element
  const clickedFolder = getClickedFolderElement(event);
  // Get Folder node list
  const folderNodeList = getFolderNodeList();
  // Iterate over folder node list to find clicked element's index number
  return getFolderIndex(folderNodeList, clickedFolder);
}
// Get the dom element of the clicked folder
function getClickedFolderElement(event) {
  return event.target.closest('.folderContainer');
}
// Get .folderContainer NodeList
function getFolderNodeList() {
  return document.getElementsByClassName('folderContainer');
}
// Get folder index
function getFolderIndex(nodeList, folder) {
  for (let i = 0; i < nodeList.length; i++) {
    if (nodeList[i] === folder) {
      return i;
    }
  }
}
// Change folderState.currentFolderIndex on click
export function changeFolderIndex(event) {
  // Get clicked folder
  const clickedFolder = getClickedFolderElement(event);
  // Get folder nodelist
  const folderNodeList = getFolderNodeList();
  // Match clicked folder to the index in nodelist and update folderState.currentFolderIndex
  folderState.currentFolderIndex = getFolderIndex(
    folderNodeList,
    clickedFolder
  );
}
