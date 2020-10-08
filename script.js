// Dependencies
var highScore = document.getElementById('view-highscores');
var counter = document.getElementById('counter');
var startQuiz = document.getElementById('start-quiz');
var startContainer = document.getElementById('startContainer');
var quizContainer = document.getElementById('quizContainer');

var questions = [
  {
    question: 'Commonly used data types DO NOT include:',
    choices: ['strings', 'booleans', 'alerts', 'numbers'],
    answer: 2,
  },

  {
    question:
      'The condition in an if / else statement is enclosed within _____.',
    choices: ['quotes', 'curly brackets', 'parentheses'],
    answer: 2,
  },

  {
    question: 'Arrays within Javascript can be used to store _____.',
    choices: [
      'numbers and strings',
      'other arrays',
      'booleans',
      'all of the above',
    ],
    answer: 2,
  },

  {
    question:
      'String values must be enclosed within _____ when be assigned to variables',
    choices: ['Javascript', 'terminal/bash', 'for loops', 'console log'],
    answer: 2,
  },
];
// timer start
var secondsLeft = 20;

startQuiz.addEventListener('click', startGame);

// Timer Function
function quizTimer() {
  counter.textContent = secondsLeft;
  var timerInterval = setInterval(function () {
    secondsLeft--;
    counter.textContent = secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}

function startGame() {
  console.log('click');
  quizTimer();
  startContainer.setAttribute('class', 'hide');
  quizContainer.classList.remove('hide');
  questions.question.forEach((question) => {});
  //quiz container needs to populate first question and first choices
  // steps to populate first question
  // iterate through question array
  // set current index
  // get question at index
  // get answers at index
}

function nextQuestion() {}
