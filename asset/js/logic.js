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
var choices = document.getElementById("choices")


// click start button to start game
startButton.addEventListener("click", startGame);

// when start quiz is clicked, the page will dissapear
function startGame(){
    containerEl[0].style.display = "none";

//to display firstQuestion AFTER user clicks start quiz
    getQuestion()
}

//to get the first question from the quizQuestion array
function getQuestion(){
   var currentQuestion = quizQuestions[0];
   
//to show the text of the first question in quizQuestions on the screen and style it 
   var firstQuestion =  document.createElement("h2");
   firstQuestion.textContent = quizQuestions[0].question
   firstQuestion.setAttribute("style", "font-family:Arial, Helvetica, sans-serif");
   questions.appendChild(firstQuestion);


//created ol so that the list will show as numbered instead of bullet points
   var ol = document.createElement("ol");

//to show the array of choices from first quizQuestions as a list 
   for (var i=0; i < quizQuestions[0].choices.length; i++){

//to show the text of the array of first choices in quizQuestions on the screen and style it 
   var firstChoices=document.createElement("li");
   firstChoices.classList.add("optionButton");
   firstChoices.textContent = quizQuestions[0].choices[i]
   firstChoices.setAttribute("style", "font-family:Arial, Helvetica, sans-serif");

//append ol and li element together
   ol.appendChild(firstChoices);
   questions.appendChild(ol);


// function to store when user CLICKS one of the answer choices
    firstChoices.addEventListener("click", function(){
    choices.textContent = "Correct!"
    choices.setAttribute("style", "font-family:Arial, Helvetica, sans-serif; font-weight: bold; color: grey; font-size: 20px");  
    
   })
}
}

// event.target
// data*
// data attribute in js
// data attribute to revise from line 52 down to store data so i dont have to rewrite the fnction