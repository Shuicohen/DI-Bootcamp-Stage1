let currentEmoji = '';
let currentScore = 0;
let playerName = prompt("Enter your name:");

// Fetch a random emoji with options
async function getEmoji() {
    const response = await fetch('http://localhost:3000/emoji');
    const data = await response.json();
    currentEmoji = data.emoji;
    document.getElementById('emoji-display').textContent = currentEmoji;
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';

    data.options.forEach(option => {
        const label = document.createElement('label');
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'option';
        radio.value = option;
        label.appendChild(radio);
        label.appendChild(document.createTextNode(option));
        optionsDiv.appendChild(label);
        optionsDiv.appendChild(document.createElement('br'));
    });
}

// Handle form submission
document.getElementById('guess-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (!selectedOption) {
        alert('Please select an option!');
        return;
    }

    const guess = selectedOption.value;
    const response = await fetch('http://localhost:3000/guess', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ emoji: currentEmoji, guess, playerName, score: currentScore })
    });

    const result = await response.json();
    if (result.correct) {
        currentScore = result.score;
        document.getElementById('feedback').textContent = 'Correct!';
    } else {
        document.getElementById('feedback').textContent = 'Wrong!';
    }
    document.getElementById('score').textContent = `Score: ${currentScore}`;
    getEmoji(); // Get a new emoji
});

// Fetch the leaderboard
async function getLeaderboard() {
    const response = await fetch('http://localhost:3000/leaderboard');
    const leaderboard = await response.json();
    const leaderboardElement = document.getElementById('leaderboard');
    leaderboardElement.innerHTML = '';
    leaderboard.forEach(player => {
        const li = document.createElement('li');
        li.textContent = `${player.playerName}: ${player.score}`;
        leaderboardElement.appendChild(li);
    });
}

// Submit score to leaderboard
async function submitScore() {
    await fetch('http://localhost:3000/leaderboard', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ playerName, score: currentScore })
    });
    getLeaderboard();
}

// Start the game
getEmoji();
getLeaderboard();

// Submit score on window close
window.addEventListener('beforeunload', submitScore);