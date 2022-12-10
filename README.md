Code-quiz  
Code quiz is a website built to render questions about the basics of JavaScript. Users will be provided with multiple-choice answers and have a time limit. The quiz will generate a score based on the user's data and append the user's score to a scoreboard. This application was built solely using HTML, CSS, and Javascript.  

Features  
o	A ‘Start Quiz’ button.  
o	A timer decreasing in 1-second intervals starting at 75 seconds.  
o	(5) questions each with (4) multiple-choice answers.  
o	If questions are answered incorrectly, 15 seconds are deducted from the allocated time.  
o	An alert displayed as text content on the screen to show if the user has answered correctly/incorrectly.  
o	A final score which is calculated based on the remaining time.  
o	A ‘Highscore’ page that can be accessed once the game is completed or at the top left corner of the website.  
o	An input area to document initials.  
o	A ‘Submit’ button.  
o	A ‘Highscore’ page that saves initials and score to local storage.  
o	A ‘Clear Highscores’ button to clear data from local storage.  
o	A ‘Go back’ button that leads back to the initial quiz home page.  

Execution  
This website can be cloned from its GitHub repository and opened with live server.  

Pseudo Code  
HTML:  
o I will need to create a header with an h1 tag called Coding Quiz Challenge.  
o I will need create a start button.
o I will need to create a time button at the top right.  
o I will need to create a highscore button at the top left.  

CSS:  
o I will need to create buttons that change color when hovering.  

JAVASCRIPT:  
o I will need to create mutiple choice answers using an array.  
o I will need to create a timer that counts down from 75 seconds using set interval.  
o I will need to deduct 15 seconds everytime a user answers incorrectly.  
o I will need to create an alert displaying if the answer chosen is correct or incorrect using text content and if else.  
o I will need to create a scoreboard that persists.  
o I will need to create a submit form when game is over to enter initials using onclick.  
o I will need to create a score board that lists highscores in order using sort function.  

![code-quiz](https://user-images.githubusercontent.com/111620893/206830765-05e8385d-09b6-42a0-ac14-eeda35055b4a.png)   
![code-quiz-questions](https://user-images.githubusercontent.com/111620893/206830936-e3cc3459-cbf1-4155-9c27-16b985ef1c3c.png)      
![final-score](https://user-images.githubusercontent.com/111620893/206830972-cc4146d2-2372-4770-ba9d-93094042cea4.png)   
![highscore](https://user-images.githubusercontent.com/111620893/206831000-f2d67d34-c1ac-4290-b742-6a930f69424f.png)  
