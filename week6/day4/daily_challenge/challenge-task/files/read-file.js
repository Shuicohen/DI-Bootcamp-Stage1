// daily-challenge/files/read-file.js
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Handling paths in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function readFile() {
    try {
        const filePath = path.join(__dirname, 'file-data.txt');
        const data = await fs.readFile(filePath, 'utf8');
        console.log('File content:', data);
    } catch (err) {
        console.error('Error reading file:', err);
    }
}
