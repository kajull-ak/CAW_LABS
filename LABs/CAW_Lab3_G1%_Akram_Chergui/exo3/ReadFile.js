const fs = require('fs');

const filePath = 'file.txt';

const data = fs.readFileSync(filePath, 'utf8'); // utf8 to specify file data type output
console.log('File content:', data);



