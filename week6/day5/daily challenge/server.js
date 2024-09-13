const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Create the app
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Sample emoji data
const emojis = [
    { emoji: '😀', name: 'Smile' },
    { emoji: '🐶', name: 'Dog' },
    { emoji: '🌮', name: 'Taco' },
    { emoji: '🍕', name: 'Pizza' },
    { emoji: '🚗', name: 'Car' },
    { emoji: '🎸', name: 'Guitar' }
];

// Track the leaderboard
let leaderboard = [];

// Helper function to generate random emoji options
function getRandomOptions(correctEmoji) {
    const options = [correctEmoji];
    const shuffledEmojis = emojis
        .filter(e => e.name !== correctEmoji.name)
        .sort(() => 0.5 - Math.random());

    // Select 3 distractors
    const distractors = shuffledEmojis.slice(0, 3);
    return [...options, ...distractors].sort(() => 0.5 - Math.random());
}

// Route to get a random emoji with options
app.get('/emoji', (req, res) => {
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    const options = getRandomOptions(randomEmoji);
    res.json({ emoji: randomEmoji.emoji, options: options.map(opt => opt.name) });
});

// Route to handle the player's guess
app.post('/guess', (req, res) => {
    const { emoji, guess, playerName, score } = req.body;
    const correctEmoji = emojis.find(e => e.emoji === emoji);

    if (correctEmoji.name === guess) {
        res.json({ correct: true, score: score + 1 });
    } else {
        res.json({ correct: false, score });
    }
});

// Route to submit score to leaderboard
app.post('/leaderboard', (req, res) => {
    const { playerName, score } = req.body;
    leaderboard.push({ playerName, score });
    leaderboard = leaderboard.sort((a, b) => b.score - a.score).slice(0, 10); // Top 10 scores
    res.json(leaderboard);
});

// Route to get the leaderboard
app.get('/leaderboard', (req, res) => {
    res.json(leaderboard);
});

// Start the server
app.listen(port, () => {
    console.log(`Emoji guessing game running on http://localhost:${port}`);
});
