var questionEl = document.querySelector('#question');
var timerEl = document.querySelector('#timer');

var score;
var timer;
var timerCount;
var userAnswer;

var quizQuestions = ["Is Java short for JavaScript?", "Who invented JavaScript?", "What is JavaScript used for?", "Which JavaScript data type does NOT belong?", "What does NAN stand for?"];
var quizAnswers = [
    ["yes", "no", "maybe", "I don't know"], 
    ["Håkon Wium Lie", "Bill Gates", "Tim Berners-Lee", "Brendan Eich"], 
    ["Making interactive webpages", "Cooking a 5 star meal", "Prepares your body for exercise", "Calls the police"], 
    ["String", "Boolean", "Yarn", "Object"], 
    ["Never ate nachos", "Need a number", "Not again Nichola", "Not a number"]
];
var correctAnswers = ["no", "Brendan Eich", "Making interactive webpages", "Yarn", "Not a number"];

// Game Functions
function startGame() {
    score = 0;
    timerCount = 100;
    startTimer();
    nextQuestion();
    nextAnswers();
};

function nextQuestion() {
    var i = 0;
    var currentQuestion = quizQuestions[i];
    questionEl.innerHTML = currentQuestion;

    if (userAnswer === correctAnswers) {
        i++;
        score++;
    } else {
        timerCount - 10;
    }
};

function nextAnswers() {
    var j = 0;

    if (userAnswer === correctAnswers) {
        j++;
    }

    for (var k = 0; k < quizAnswers[j].length; k++) {
        var currentAnswers = document.getElementById("buttons");
            quizAnswers.forEach(function() {
                var button = document.createElement("button");
                button.innerHTML = quizAnswers[j][k];
                currentAnswers.appendChild(button);
            });
    }
}

function startTimer() {
    timer = setInterval(function () {
        timerCount --;
        timerEl.textContent = timerCount;
    }, 1000);

};


startGame();


