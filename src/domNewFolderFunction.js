import {
  folderFactory,
  folderNameArray,
} from './createNewProjectFolder';

export function createNewFolder(event) {
  event.preventDefault();

  const folderName = document.getElementById('folderName').value;
  const newFolder = folderFactory(folderName);
  return newFolder;
}
