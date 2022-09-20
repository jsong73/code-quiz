var quizQuestions = [
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answers: "alerts",
    },
    {
        question: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parenthesis", "square brackets"],
        answers: "parenthesis",
    },
    {
        question: "Arrays in JavaScript can be used to store ____",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answers: "all the above",
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answers: "quotes",
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "terminal / bash", "for loops", "console.log"],
        answers: "console.log",
    },
    ];

//var to show quiz starting point
var currentQuestionIndex = 0;

//variables to reference DOM
var startButton = document.getElementById("start-btn")
var containerEl = document.getElementsByClassName("container")
var timerEl = document.getElementsByClassName("timer")
var questions = document.getElementById("questions")


// click start button to start game
startButton.addEventListener("click", startGame);

// when start quiz is clicked, the page will dissapear
function startGame(){
    containerEl[0].style.display = "none";
//to display firstQuestion AFTER user clicks start quiz
    getQuestion()
}

function getQuestion(){
   var currentQuestion = quizQuestions[0];
   var firstQuestion =  document.createElement("h2");
   
   firstQuestion.textContent = quizQuestions[0].question
   questions.appendChild(firstQuestion);

}


