import { createTaskObject } from './createTaskObject';
export const folderNameArray = [['Test Folder']];
export const folderState = {
  currentFolderIndex: 0,
};
// Create nested array with first index being the name of the folder, and the following indexes being the tasks within that folder.
// Add this folder to the parent folder array
export function folderFactory(name) {
  // Create Nested Array
  let folderName = [name];
  // Add nested array into parent array
  folderNameArray.push(folderName);
  console.log(folderNameArray);
}
// Add task to folder array
export function addTaskToFolder() {
  let description = document.getElementById('taskDescription').value;
  let dueDate = document.getElementById('dueDate').value;
  let priority = document.getElementById('priority').value;
  // Add task to folder array
  if (folderNameArray[folderState.currentFolderIndex] !== undefined) {
    folderNameArray[folderState.currentFolderIndex].push(
      createTaskObject(description, dueDate, priority)
    );
  }
}
