
// Set the time limit in seconds
var timeLimit = 60;

// Set the starting time
var timeLeft = timeLimit;

var displayQuiz = document.getElementById("highscores");
// Access start button
var startQuiz = document.getElementById("start-quiz");

// Listen for a click event on start button
startQuiz.addEventListener("click", function() {
    var x = setInterval(function() {

        // Decrement the time left
        timeLeft--;
      
        // Output the result in an element with id="countdown"
        document.getElementById("countdown").innerHTML = timeLeft + "s ";
      
        // If the countdown is over, display a message
        if (timeLeft <= 0) {
          clearInterval(x);
          document.getElementById("countdown").innerHTML = "TIME'S UP!";
        }
      }, 1000);

});




startQuiz.addEventListener("click", function() {
    var showQuiz= document.getElementById("quiz-question");
    showQuiz.style.display = "block";
    var showQuiz= document.getElementById("intro");
    showQuiz.style.display = "none";
    
    
   });

console.log(showQuiz)

/*startQuiz.addEventListener("click", function() {
    var showQuiz= document.getElementById("quiz-question");
    showQuiz.style.display = "block";
    
   });*/




