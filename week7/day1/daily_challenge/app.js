const express = require('express');
const bodyParser = require('body-parser');
const quizRouter = require('./routes/quiz.js');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/quiz', quizRouter);

const port = 3000;

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});