const fs = require('fs');

// Function to read and list in a directory
function listFiles(directory) {
    fs.readdir(directory, (err, files) => {
        if (err) {
            console.error('Error reading the directory:', err);
            return;
        }

        console.log('Files in directory:');
        files.forEach(file => {
            console.log(file);
        });
    });
}

listFiles('./')