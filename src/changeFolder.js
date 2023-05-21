import {
  folderState,
  folderNameArray,
} from './createNewProjectFolder';
function changeFolder() {
  // Get folders
  let folderNodeList =
    document.getElementsByClassName('folderContainer');
  // Add event listener to each folder
  for (let i = 0; i < folderNodeList.length; i++) {
    folderNodeList[i].addEventListener('click', function (event) {});
  }
}
// Get index of clicked folder element
export function currentFolderIndex(event) {
  // Clicked folder element
  const clickedFolderContainer = event.target.closest(
    '.folderContainer'
  );
  // Folder node list
  const folderContainers =
    document.getElementsByClassName('folderContainer');
  // Iterate over folder node list to find clicked element's index number
  for (let i = 0; i < folderContainers.length; i++) {
    if (folderContainers[i] === clickedFolderContainer) {
      return i;
    }
  }
}

// Change folderState.currentFolderIndex on click
export function changeFolderIndex(event) {
  // Get folder nodelist
  const clickedFolderContainer = event.target.closest(
    '.folderContainer'
  );
  // Match clicked folder to the index in nodelist and update folderState.currentFolderIndex
  if (clickedFolderContainer) {
    const folderContainers =
      document.getElementsByClassName('folderContainer');
    for (let i = 0; i < folderContainers.length; i++) {
      if (folderContainers[i] === clickedFolderContainer) {
        folderState.currentFolderIndex = i; // change currentFolderIndex variable
        console.log(
          'currentFolderIndex on folder click',
          folderState.currentFolderIndex
        );
        console.log(
          'folderNameArray on folder click',
          folderNameArray
        );
      }
    }
  }
}
//
