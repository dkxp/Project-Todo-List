import { createTaskObject } from './createTaskObject';
export const folderNameArray = [['Test Folder']];
export const folderState = {
  currentFolderIndex: 0,
};
// Take user input folder name and create it as an array inside a folder array. This nested array will hold the task objects.
export function folderFactory(name) {
  // Create Nested Array
  let folderName = [name];
  // Add nested array into parent array
  folderNameArray.push(folderName);
  console.log(folderNameArray);
  return folderNameArray;
}

window.folderNameArray = folderNameArray;

// Push task object into folder
export function addTaskToFolder() {
  folderNameArray[folderState.currentFolderIndex].push(
    createTaskObject()
  );
  console.log(
    'Contents of folder on new task click',
    folderNameArray[folderState.currentFolderIndex]
  );
}
