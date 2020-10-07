// Dependencies
var counter = document.getElementById('counter');
var startQuiz = document.getElementById('start-quiz');
var startContainer = document.getElementById('startContainer');

var questionsArray = [
  'Commonly used data types DO NOT include:',
  'The condition in an if / else statement is enclosed within _____.',
  'Arrays within Javascript can be used to store _____.',
  'String values must be enclosed within _____ when be assigned to variables',
];
var answerArray = [
  [['strings'], ['booleans'], ['alerts'], ['numbers']],
  [['quotes'], ['curly brackets'], ['parentheses'], ['square brackets']],
  [
    ['numbers and strings'],
    ['other arrays'],
    ['booleans'],
    ['all of the above'],
  ],
  [['Javascript'], ['terminal/bash'], ['for loops'], ['console log']],
];

// timer start
var secondsLeft = 20;
startQuiz.addEventListener('click', function () {
  startContainer.setAttribute('style', 'display: none');
  counter.textContent = secondsLeft;
  var timerInterval = setInterval(function () {
    secondsLeft--;
    counter.textContent = secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      //   counter.textContent = ' ';
    }
  }, 1000);
});

var question = document.createElement('h2');
question.textContent(questionsArray[0]);
document.body.appendChild(question);
// place question
