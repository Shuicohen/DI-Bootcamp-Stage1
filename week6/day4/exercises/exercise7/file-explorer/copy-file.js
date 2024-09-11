const fs = require('fs');

// Function to copy file content
function copyFile(source, destination) {
    fs.readFile(source, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the source file:', err);
            return;
        }

        fs.writeFile(destination, data, 'utf8', (err) => {
            if (err) {
                console.error('Error writing the destination file:', err);
                return;
            }

            console.log('File copied successfully.');
        });
    });
}

copyFile('source.txt', 'destination.txt')