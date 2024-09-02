const gameInfo = [
    { username: "john", team: "red", score: 5, items: ["ball", "book", "pen"] },
    { username: "becky", team: "blue", score: 10, items: ["tape", "backpack", "pen"] },
    { username: "susy", team: "red", score: 55, items: ["ball", "eraser", "pen"] },
    { username: "tyson", team: "green", score: 1, items: ["book", "pen"] },
  ];
// 1. Array with usernames ending in "!"
const usernames = [];
gameInfo.forEach(player => {
    usernames.push(`${player.username}!`);
});
console.log(usernames);

// 2. Array with usernames of players with a score greater that 5
const winners = [];
gameInfo.forEach(player => {
    if (player.score > 5) {
        winners.push(player.username);
    }
});
console.log(winners);

// 3. Calculate the total score of all players
let totalScore = 0;
gameInfo.forEach(player => {
    totalScore += player.score;
});
console.log(totalScore)