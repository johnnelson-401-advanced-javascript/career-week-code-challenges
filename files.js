// - this will have to be done either as a linked list, or async, or both in order to avoid errors while changing file names / pathing. 
// - Read the directory/folder and get all the current file names into an array as a key:value pair.
// - Write a script to read the contents of a file.
// - loop through the array
// - call readFile on each.
// - create a { content: value } key value pair with the file content word as the value in our array.
// - create a { lastModified: value } key value pair calling the lastModified on each file.
// - create a function to rename each file using the key : value pairs from the array created.
// - set the file name as ${content}-${old-file-name}-${$lastModified}.txt

const fs = require('fs').promises;

const getPaths = path => {
  return fs.readdir(path)
    .then((results) => {
      return results.map(body => './__tests__/testFiles/' + body);
    });
};

const readFile = path => {
  return fs.readFile(path).map(fileArray);
};

module.exports = {
  readFile,
  getPaths
};

let testPath = ('./__tests__/testFiles');

console.log(getPaths(testPath));

const fileArray = getPaths(testPath);

// console.log(readFile(fileArray[0]));
