function countingDown() {
    let timeNumber = parseInt(document.querySelector(".timerInput").value); // Get the time inputted by the user
    let timerDisplay = document.querySelector(".timer");

    let countdown = setInterval(function() {
        if (timeNumber > 0) {
            timerDisplay.textContent = timeNumber; // Display the current time
            timeNumber--; // Decrement the time by 1 second
        } else {
            clearInterval(countdown); // Stop the countdown when it reaches 0
            timerDisplay.textContent = "Countdown finished!";
        }
    }, 1000)
}


document.querySelector(".startButton").addEventListener("click", function () {
    countingDown ()
} )