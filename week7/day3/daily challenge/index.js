const express = require('express');
const bcrypt = require('bcryptjs');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;
const FILE_PATH = path.join(__dirname, 'users.json');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Helper function to read the users.json file
const readUsersFile = () => {
    if (!fs.existsSync(FILE_PATH)) {
        fs.writeFileSync(FILE_PATH, JSON.stringify([]));
    }
    return JSON.parse(fs.readFileSync(FILE_PATH));
};

// Helper function to write to the users.json file
const writeUsersFile = (data) => {
    fs.writeFileSync(FILE_PATH, JSON.stringify(data, null, 2));
};

// Register route
app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    console.log('Registering user with:', { username, password });

    const users = readUsersFile();
    const userExists = users.some(user => user.username === username);

    if (userExists) {
        return res.send('username already exists');
    }

    try {
        console.log('Hashing password:', password);
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log('Hashed password:', hashedPassword);
        users.push({ username, password: hashedPassword });
        writeUsersFile(users);
        res.send('hello your account is now created.');
    } catch (error) {
        console.error('Error hashing password:', error);
        res.status(500).send('Internal server error');
    }
});


// Login route
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const users = readUsersFile();

    const user = users.find(user => user.username === username);
    if (!user) {
        return res.send('username is not registered');
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        return res.send('incorrect password');
    }

    res.send('hi user welcome back again');
});

// Get all users
app.get('/users', (req, res) => {
    const users = readUsersFile();
    res.json(users);
});

// Get user by ID
app.get('/users/:id', (req, res) => {
    const users = readUsersFile();
    const user = users[req.params.id];
    if (!user) {
        return res.status(404).send('User not found');
    }
    res.json(user);
});

// Update user by ID
app.put('/users/:id', (req, res) => {
    const users = readUsersFile();
    const user = users[req.params.id];
    if (!user) {
        return res.status(404).send('User not found');
    }

    const { username, password } = req.body;
    if (username) user.username = username;
    if (password) user.password = bcrypt.hashSync(password, 10);

    writeUsersFile(users);
    res.send('User updated');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
