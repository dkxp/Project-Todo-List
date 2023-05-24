import './style.css';
import {
  appendToFolderList,
  removeFolderFromArray,
  populateTasks,
  removeTaskDivs,
  changeFolderIndex,
} from './domAppendProjectNameToFolderList';
import {
  appendTaskPropertyDivsToContainer,
  removeAllTasks,
} from './addTaskToDOM';
import { addTaskToFolder, folderFactory } from './folderFunctions';
import { createTaskObject } from './createTaskObject';

// When test folder is clicked, remove preexisting task list on screen (event listener)
document
  .getElementById('folder0')
  .addEventListener('click', function (event) {
    removeAllTasks();
  });
// Change folderState.currentFolderIndex when test folder is clicked
document
  .getElementById('folder0')
  .addEventListener('click', changeFolderIndex);
// Delete test folder from array
document
  .getElementById('deleteBtn')
  .addEventListener('click', function (event) {
    event.stopPropagation();
    removeFolderFromArray(event);
  });
// Delete test folder from dom
document
  .getElementById('deleteBtn')
  .addEventListener('click', function (event) {
    removeTaskDivs(event);
    event.target.closest('.folderContainer').remove();
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
// Add task to folder array
document
  .getElementById('newTaskForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    addTaskToFolder();
  });
// Create task and append to dom
document
  .getElementById('newTaskForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    let description =
      document.getElementById('taskDescription').value;
    let dueDate = document.getElementById('dueDate').value;
    let priority = document.getElementById('priority').value;
    // Get the task object from createTaskObject() function
    let taskObject = createTaskObject(description, dueDate, priority);
    console.log('taskObject on task submission click', taskObject);
    // Pass the folderNameArray and taskObject to appendToTaskList function
    appendTaskPropertyDivsToContainer(taskObject);
  });
