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
// Update index ID when a task is deleted
function updateIndex() {
  const folderNodes =
    document.getElementsByClassName('folderContainer');
  for (let i = 0; i < folderNodes.length; i++) {
    const folderNode = folderNodes[i];
    // Add ID folder0, folder1, etc (have to differentiate from ID of tasks)
    folderNode.id = `folder${i}`;
  }
}
// Add event listener to delete button
export function addDeleteButtonEventListener(button) {
  button.addEventListener('click', () => {
    button.closest('.folderContainer').remove();
    updateIndex();
  });
}
// Append Folder Name Div and Delete Button Div to folderList
export function appendToFolderList() {
  let folderList = document.getElementById('folderList');
  let folderContainer = createFolderContainerDiv();
  let folderNameDiv = createFolderNameDiv();
  let deleteButton = createDeleteButtonDiv();
  addDeleteButtonEventListener(deleteButton);
  folderContainer.appendChild(folderNameDiv);
  folderContainer.appendChild(deleteButton);
  folderList.appendChild(folderContainer);
  updateIndex();
}
