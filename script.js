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

// increment count on timer when start button is clicked
var counter = document.getElementById('counter');
counter.textContent = '22';
document.body.span.appendChild(counter);
// access question from question array
var question = document.createElement('h2');
question.textContent(questionsArray[0]);
document.body.appendChild(question);
// place question
