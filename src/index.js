import './style.css';
import { createNewFolderObject } from './domNewFolderFunction';
import {
  appendToFolderList,
  addDeleteButtonEventListener,
} from './domAppendProjectNameToFolderList';
import {
  appendToTaskList,
  appendTasksToDOM,
} from './addTaskToDOMTaskList';
import { addTaskToFolder } from './createNewProjectFolder';

// Add event listener to delete button on test folder on page load
// Add folder name to DOM
document
  .getElementById('newFolderForm')
  .addEventListener('submit', appendToFolderList);
// Add task to folder array
document
  .getElementById('newTaskForm')
  .addEventListener('submit', addTaskToFolder);
// Add task to DOM
document
  .getElementById('newTaskForm')
  .addEventListener('submit', appendTasksToDOM);
