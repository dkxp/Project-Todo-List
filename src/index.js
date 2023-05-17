import './style.css';
import { createNewFolderObject } from './domNewFolderFunction';
import {
  appendToFolderList,
  addDeleteButtonEventListener,
} from './domAppendProjectNameToFolderList';
import { appendToTaskList } from './addTaskToDOMTaskList';
import { addTaskToFolder } from './createNewProjectFolder';

// Add event listener to delete button on test folder on page load
addDeleteButtonEventListener(document.getElementById('deleteBtn'));
// Add folder name to DOM
document
  .getElementById('newFolderForm')
  .addEventListener('submit', appendToFolderList);
// Add task to DOM
document
  .getElementById('newTaskForm')
  .addEventListener('submit', appendToTaskList);
// Add task to folder
document
  .getElementById('newTaskForm')
  .addEventListener('submit', addTaskToFolder);
