const {readFile, writeFile} = require('./fileManager.js');

readFile('Hello World.txt')
    .then((data) => {
        console.log('Read from Hello World.txt:', data);
        // Write new content to "Bye World.txt"
        return writeFile('Bye World.txt', 'Writing to the file');
    })
    .then((result) => {
        console.log(result);
        // Verify by reading from "Bye World.txt"
        return readFile('Bye World.txt');
    })
    .then((data) => {
        console.log('Read from Bye World.txt after writing:', data);
    })
    .catch((err) => {
        console.log('Error:', err);
    })