import './style.css';
import { createNewFolderObject } from './domNewFolderFunction';
import {
  appendToFolderList,
  addDeleteButtonEventListener,
  removeFolderFromArray,
  populateTasks,
} from './domAppendProjectNameToFolderList';
import {
  appendToTaskList,
  removeAllTasks,
} from './addTaskToDOMTaskList';
import {
  addTaskToFolder,
  folderNameArray,
  folderFactory,
} from './createNewProjectFolder';
import { Task, createTaskObject } from './createTaskObject';
import {
  changeFolderIndex,
  currentFolderIndex,
} from './changeFolder';
import { folderState } from './createNewProjectFolder';
// When test folder is clicked, remove preexisting task list on screen (event listener)
document
  .getElementById('folder0')
  .addEventListener('click', function (event) {
    if (
      folderState.currentFolderIndex !== currentFolderIndex(event)
    ) {
      removeAllTasks();
    }
  });
// Change folderState.currentFolderIndex when test folder is clicked
document
  .getElementById('folder0')
  .addEventListener('click', changeFolderIndex);
// Delete test folder from domlist
document
  .getElementById('deleteBtn')
  .addEventListener('click', function (event) {
    event.target.closest('.folderContainer').remove();
  });
// Delete test folder from array
document
  .getElementById('deleteBtn')
  .addEventListener('click', function (event) {
    removeFolderFromArray(event);
  });
// Populate tasklist when testfolder clicked
document
  .getElementById('folder0')
  .addEventListener('click', populateTasks);
// Add new folder to folderNameArray
document
  .getElementById('newFolderForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    let newFolder = document.getElementById('folderName').value;
    folderFactory(newFolder);
  });

// Add folder name to DOM
document
  .getElementById('newFolderForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    appendToFolderList();
  });
// Select current folder

// Add task to folder array
document
  .getElementById('newTaskForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    addTaskToFolder();
  });
// Add task to dom
document
  .getElementById('newTaskForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    // Get the task object from createTaskObject() function
    let taskObject = createTaskObject();

    // Pass the folderNameArray and taskObject to appendToTaskList function
    appendToTaskList(taskObject);
  });
