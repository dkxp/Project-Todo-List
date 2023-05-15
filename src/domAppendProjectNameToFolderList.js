import { folderNameArray } from './createNewProjectFolder';

// Refresh List with New Project Name
export function appendProjectNameToFolderList() {
  let folderNameList = document.querySelector('.folderList');
  removeAllChildNodes(folderNameList);
  folderNameArray.forEach((element) => {
    let folderDiv = document.createElement('div');
    folderDiv.textContent = element;
    folderNameList.appendChild(folderDiv);
  });
}

// Clear list
export function removeAllChildNodes(parent) {
  for (let i = parent.children.length - 1; i >= 0; i--) {
    parent.removeChild(parent.children[i]);
  }
}
