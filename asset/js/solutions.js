
  var currentQuestionIndex = 0;
  var time = 75;
  var timerId; // variable not assigned yet

  var timerEl = document.getElementbyId("time")
  var questionsEl = document.getElementById("questions")
\

  function startQuiz(){
    //hides the start screen
    var startScreenEl = document.getElementById("start-screen");
     //giving the startScreenEl a CLASS of HIDE in CSS = .hide{ display: none} in CSS
    startScreenEl.setAttribute("class", "hide");

    //removing the class of hide from questionId in HTML so that questions will show again
    questionsEl.removeAttribute("class")

    //sets a timer at 1 second and refers to the clockTik function
    timerId = setInterval(clockTik, 1000)

    //shows the 75 second starting time on screen
    timerEl.textContent = time;

    //starts the getQuestion function after user presses Start Quiz
    getQuestion()
 }

  function getQuestion(){
    //will display the first question from the question array 
    var currentQuestion = questions[currentQuestionIndex]

    //will update the question title on screen
    var titleEl = document.getElementById("question-title")
    titleEl.textContent = currentQuestion.title;

    //will display nothing and clear out any of the old question choices on the screen
    choicesEl.innerHTML = " ";

    //creating a for loop for the question choices
    for (var i = 0; i < currentQuestion.choices.length; i++){
    //create a new button element for each choice
        var choice = currentQuestion.choices[i];
        var choiceNode = document. createElement("button");
    
        //setting the button element to a class of hide in CSS = .hide{ display: none} in CSS 
        choiceNode.setAttribute("class", "hide");
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
    } // if the value of the button does not equal the ANSWER from the array
        if (buttonEl.value != questions[currentQuestionIndex].answer){
            time -= 15;

        if (time < 0 ){
                time = 0;

        }


        }


    }  

  function quizEnd(){
    // this function will stop the timer
    clearInterval(timerId)
    //removes the class (of hide) from the end-screen Id in HTML so that the end screen displays
    var endScreenEl = document.getElementById("end-screen");
    endScreenEl.removeAttribute("class")

  }

  function clockTik(){
    time--; //75 second time going down one second
    timerEl.textContent = time; // time is showing as text on the screen
    //if time is less than or equal to 0 seconds then quiz will end
    if (time <= 0){
        quizEnd();
    }
  }