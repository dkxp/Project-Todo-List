import { folderNameArray } from './createNewProjectFolder';

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
    // **BELOW SHOULD REMOVE OBJECT FROM INDEX TOO LATER
    /* delete myLibrary[index]; */
  });
}
// Append Folder Name Div and Delete Button Div to folderList
export function appendToFolderList(event) {
  let folderList = document.getElementById('folderList');
  let folderContainer = createFolderContainerDiv();
  let folderNameDiv = createFolderNameDiv();
  let deleteButton = createDeleteButtonDiv();
  addDeleteButtonEventListener(deleteButton);
  folderContainer.appendChild(folderNameDiv);
  folderContainer.appendChild(deleteButton);
  folderList.appendChild(folderContainer);
}
