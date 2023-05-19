import { createTaskObject } from './createTaskObject';
export const folderNameArray = [['Test Folder']];

// Take user input folder name and create it as an array inside a folder array. This nested array will hold the task objects.
export function folderFactory(name) {
  let folderName = [];
  folderName.push(name);
  folderNameArray.push(folderName);
  console.log(folderNameArray);
}

window.folderNameArray = folderNameArray;

// Find index of current folder
export function findFolderIndex(foldername) {
  for (let i = 0; i < folderNameArray.length; i++) {
    if (folderNameArray[i][0] === foldername) {
      console.log('foldernamearray', folderNameArray[i][0]);
      return i;
    }
  }
}

// Push task object into folder
export function addTaskToFolder() {
  let folderName = 'Test Folder';
  let folderIndex = findFolderIndex(folderName);
  console.log(folderIndex);
  folderNameArray[folderIndex].push(createTaskObject());
  console.log(folderNameArray[folderIndex]);
}

// Now we have an Array (folderNameArray) which holds another Array (individual folder) which holds
// the folder name as index[0]. The following indexes are the individual task objects
// Now when we switch between folders, we can have a function that checks
// if (folderNameArray[i][0] === 'document.textcontent.value') then, currentFolder = folderNameArray[i][0]!
