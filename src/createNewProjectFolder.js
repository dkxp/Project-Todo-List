export const folderNameArray = [];
// Take user input folder name and create it as an array inside a folder array. This nested array will hold the task objects.
export function folderFactory(name) {
  let folderName = [];
  folderName.push(name);
  folderNameArray.push(folderName);
  console.log(folderNameArray);
}

window.folderNameArray = folderNameArray;
