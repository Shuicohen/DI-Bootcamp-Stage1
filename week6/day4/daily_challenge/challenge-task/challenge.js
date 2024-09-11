// daily-challenge/challenge-task/challenge.js
import { greet } from './greeting.js';
import { colorfulMessage } from './colorful-message.js';
import { readFile } from './files/read-file.js';

// Step 1: Greet the user
console.log(greet('User'));

// Step 2: Display the colorful message
colorfulMessage();

// Step 3: Read and display the file's content
readFile();
