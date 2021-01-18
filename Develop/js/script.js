var questionEl = document.querySelector('#question');
var choicesEl = document.querySelectorAll('.choices');
var timerEl = document.querySelector('#timer');

var score;
var timer;
var timerCount;
var currentQuestion;
var shuffledQuestions;
var gamePlay = true;

var quizQuestions = [
    {
        question: "Is Java short for JavaScript?",
        answer1: "yes",
        answer2: "no",
        answer3: "maybe",
        answer4: "I dont know",
        correctAnswer: 2,
    },
    {
        question: "Who invented JavaScript?",
        answer1: "Håkon Wium Lie",
        answer2: "Bill Gates",
        answer3: "Tim Berners-Lee",
        answer4: "Brendan Eich",
        correctAnswer: 4,
    },
    {
        question: "What is JavaScript used for?",
        answer1: "Making interactive webpages",
        answer2: "Cooking a 5 star meal",
        answer3: "Prepares your body for exercise",
        answer4: "Calls the police",
        correctAnswer: 1,
    },
    {
        question: "Which JavaScript data type does NOT belong?",
        answer1: "String",
        answer2: "Boolean",
        answer3: "Yarn",
        answer4: "Object",
        correctAnswer: 3,
    },
    {
        question: "What does NAN stand for?",
        answer1: "Never ate nachos",
        answer2: "Need a number",
        answer3: "Not again Nicholas",
        answer4: "Not a number",
        correctAnswer: 4,
    },
];

// Game Functions
function startGame() {
    score = 0;
    timerCount = 100;
    nextQuestion();
};

function nextQuestion() {
    for (var i = 0; i < quizQuestions.length; i++) {
    currentQuestion = quizQuestions[i].question;
    questionEl.textContent = currentQuestion;
    }
};

function startTimer() {
    timer = setInterval(function () {
        timerCount --;
        timerEl.textContent = timerCount;
    }, 1000);

};

function selectAnswer() {

};

// Event Listener
startGame();
startTimer();
