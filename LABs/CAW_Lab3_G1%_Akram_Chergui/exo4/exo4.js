const fs = require('fs');

const fileName = process.argv[2];
const textToWrite = process.argv[3];

const filePath = fileName;


fs.writeFile(filePath, textToWrite, 'utf8', (err) => {
  
    console.log("the file has been saved");
    console.log('text to be saved to destination file... '+filePath);
  });

  