import { folderState } from './folderFunctions';
// Get index of clicked folder element
export function currentFolderIndex(event) {
  // Get clicked folder element
  const clickedFolder = getClickedFolderElement(event);
  // Get Folder node list
  const folderNodeList = getFolderNodeList();
  // Iterate over folder node list to find clicked element's index number
  return getFolderIndex(folderNodeList, clickedFolder);
}
// Get the dom element of the clicked folder
function getClickedFolderElement(event) {
  return event.target.closest('.folderContainer');
}
// Get .folderContainer NodeList
function getFolderNodeList() {
  return document.getElementsByClassName('folderContainer');
}
// Get folder index
function getFolderIndex(nodeList, folder) {
  for (let i = 0; i < nodeList.length; i++) {
    if (nodeList[i] === folder) {
      return i;
    }
  }
}
// Change folderState.currentFolderIndex on click
export function changeFolderIndex(event) {
  // Get clicked folder
  const clickedFolder = getClickedFolderElement(event);
  // Get folder nodelist
  const folderNodeList = getFolderNodeList();
  // Match clicked folder to the index in nodelist and update folderState.currentFolderIndex
  folderState.currentFolderIndex = getFolderIndex(
    folderNodeList,
    clickedFolder
  );
}
