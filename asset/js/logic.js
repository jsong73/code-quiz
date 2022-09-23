//quiz starting point
  var currentQuestionIndex = 0;
  var time = 75;
  var timerId; // variable not assigned yet

// variables to reference DOM elements
var questionsEl = document.getElementById('questions');
var timerEl = document.getElementById('time');
var choicesEl = document.getElementById('choices');
var submitBtn = document.getElementById('submit');
var startBtn = document.getElementById('start');
var initialsEl = document.getElementById('initials');
var feedbackEl = document.getElementById('feedback');

  function startQuiz(){
    //hides the start screen
    var startScreenEl = document.getElementById("start-screen");
     //giving the startScreenEl a CLASS of HIDE in CSS = .hide{ display: none} in CSS
    startScreenEl.setAttribute("class", "hide");

    //removing the class of hide from questionId in HTML so that questions will show again
    questionsEl.removeAttribute("class");

    //sets a timer at 1 second and refers to the clockTik function
    timerId = setInterval(clockTik, 1000);

    //shows the 75 second starting time on screen
    timerEl.textContent = time;

    //starts the getQuestion function after user presses Start Quiz
    getQuestion()
 }

  function getQuestion(){
    //will display the first question from the question array 
    var currentQuestion = questions[currentQuestionIndex];

    //will update the question title on screen
    var titleEl = document.getElementById("question-title")
    titleEl.textContent = currentQuestion.title;

    //will display nothing and clear out any of the old question choices on the screen
    choicesEl.innerHTML = '';

    //creating a for loop for the question choices
    for (var i = 0; i < currentQuestion.choices.length; i++){
    //create a new button element for each choice
        var choice = currentQuestion.choices[i];
        var choiceNode = document.createElement("button");
    
        //setting the button element to a class of choice in CSS = .hide{ display: none} in CSS 
        choiceNode.setAttribute("class", "choice");
        //setting the button element to a value of the variable choice
        choiceNode.setAttribute("value", choice);

        //shows the number in front of each choice (i.e 1. 2. 3. 4. etc)
        choiceNode.textContent = i + 1 + '.' + choice;
        //appendChild will display it to pace
        choicesEl.appendChild(choiceNode);

    }
 }
    //targets what the user clicked on - event.target only targets the child elements
    function questionClick(event){
        var buttonEl = event.target;
       
        //if the clicked element does not match a choice button, end quiz // ERROR HANDLER
        if (!buttonEl.matches(".choice")){ //! = opposite of 
         return; 
        } // if the value of the button does not equal the ANSWER from the questions array
        if (buttonEl.value !== questions[currentQuestionIndex].answer){
            time -= 15; // subtract 15 seconds
        // if the time is less than 0, then stop at 0
        if (time < 0 ){
            time = 0;
        }
        // displays the new time on the screen
        timerEl.textContent = time;

        //displays wrong! text on screen
        feedbackEl.textContent = "Wrong!";
        }else{
  
        //displays correct! text on screen
        feedbackEl.textContent = "Correct!";
        }
        // shows right or wrong feedback on the page for half a second
        feedbackEl.setAttribute("class", "feedback");
        setTimeout(function(){
        feedbackEl.setAttribute("class", "feedback hide");
        }, 1000);

        //moves to the next question
        currentQuestionIndex++;
        //if time is less than/equal to 0 OR there are no questions left, refer to quizend function and end game.
        if (time <= 0 || currentQuestionIndex === questions.length){
            quizEnd();
        //if not, start getQuestion function
        } else {
            getQuestion();
        }
    }

  function quizEnd(){
    // this function will stop the timer
    clearInterval(timerId)
    //removes the class (of hide) from the end-screen Id in HTML so that the end screen displays
    var endScreenEl = document.getElementById("end-screen");
    endScreenEl.removeAttribute("class")
    // show the final score on the screen
    var finalScoreEl = document.getElementById("final-score");
    finalScoreEl.textContent = time;
    //hide questions by setting questions to a class of hide in CSS = .hide{ display: none} in CSS 
    questionsEl.setAttribute("class", "hide");

  }

  function clockTik(){
    time--; //75 second time going down one second
    timerEl.textContent = time; // time is showing as text on the screen
    //if time is less than or equal to 0 seconds then quiz will end
    if (time <= 0){
        quizEnd();
    }
  }

  function saveHighscore(){
    //get the value (initials) of the input box - .trim makes sure spaces at front or end do not affect 
    var initials = initialsEl.value.trim();
    //if initials does not equal to anything (makes sure value is not empty)
    if (initials !== ""){
        //get saved score from local storage OR if none, set to an empty array
        var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
        //formats new score object for current user
        var newScore = {
            score: time,
            initials: initials,
        };
        //saves new score to the local storage
        highscores.push(newScore);
        window.localStorage.setItem("highscores", JSON.stringify(highscores));
        //redirects user to the highscore page
        window.location.href = "highscores.html";
    }
  }
    //if user clicks enter then save highscore
    function checkForEnter(event){
    if(event.key === "Enter"){
        saveHighscore();
    }
  }

// user clicks button to submit initials
  submitBtn.onclick = saveHighscore;
// user clicks button to start quiz
  startBtn.onclick = startQuiz;
// user clicks on element containing choices
  choicesEl.onclick = questionClick;

  initialsEl.onkeyup = checkForEnter;