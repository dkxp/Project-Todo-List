import './style.css';
import { createNewFolderObject } from './domNewFolderFunction';
import {
  appendToFolderList,
  addDeleteButtonEventListener,
} from './domAppendProjectNameToFolderList';
import { appendToTaskList } from './addTaskToDOMTaskList';
import {
  addTaskToFolder,
  folderNameArray,
} from './createNewProjectFolder';
import { Task, createTaskObject } from './createTaskObject';

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
/* document
  .getElementById('newTaskForm')
  .addEventListener('submit', appendToTaskList);
 */
document
  .getElementById('newTaskForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    // Get the task object from createTaskObject() function
    let taskObject = createTaskObject();

    // Pass the folderNameArray and taskObject to appendToTaskList function
    appendToTaskList(taskObject);
  });
