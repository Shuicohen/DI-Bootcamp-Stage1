const express = require('express');
const router = express.Router();

const triviaQuestions = [
    {
      question: "What is the capital of France?",
      answer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      answer: "Mars",
    },
    {
      question: "What is the largest mammal in the world?",
      answer: "Blue whale",
    },
  ];

// Variable to track user progress
let currentQuestionIndex = 0;
let score = 0;

// Start the quiz
router.get('/', (req, res) => {
    if (currentQuestionIndex < triviaQuestions.length) {
      const currentQuestion = triviaQuestions[currentQuestionIndex].question;
      res.json({ question: currentQuestion });
    } else {
      res.json({ message: 'Quiz completed! You can check your score at /quiz/score' });
    }
});

// Submit an answer
router.post('/', (req, res) => {
    const userAnswer = req.body.answer;
    const correctAnswer = triviaQuestions[currentQuestionIndex].answer;
  
    if (userAnswer && userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
      score++;
      res.json({ message: 'Correct answer!' });
    } else {
      res.json({ message: `Incorrect answer! The correct answer was ${correctAnswer}.` });
    }
  
    // Move to the next question
    currentQuestionIndex++;
  
    // Check if there are more questions
    if (currentQuestionIndex < triviaQuestions.length) {
      const nextQuestion = triviaQuestions[currentQuestionIndex].question;
      res.json({ nextQuestion });
    } else {
      res.json({ message: 'Quiz completed! You can check your score at /quiz/score' });
    }
});
  
// Display final score
router.get('/score', (req, res) => {
    res.json({ score, totalQuestions: triviaQuestions.length });
});
  
  module.exports = router;