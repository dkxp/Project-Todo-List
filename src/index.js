import './style.css';
import { createNewFolderObject } from './domNewFolderFunction';
import {
  appendToFolderList,
  removeAllChildNodes,
} from './domAppendProjectNameToFolderList';
import { appendToTaskList } from './addTaskToDOMTaskList';

// Take user input folder name and create an object
document
  .getElementById('newFolderForm')
  .addEventListener('submit', createNewFolderObject);
// Add folder name to list on screen
document
  .getElementById('newFolderForm')
  .addEventListener('submit', appendToFolderList);
// Add Task
document
  .getElementById('newTaskForm')
  .addEventListener('submit', appendToTaskList);
