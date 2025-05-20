// Start the number of seconds from 0
let sessionSeconds = 0;
// Aquire the DOM element
const timerDisplay = document.getElementById('timer');

// on page load, begin timer
setInterval(() => {
    sessionSeconds++;
    updateTimer(sessionSeconds);
    
    // Update the sessionStorage
    sessionStorage.setItem('timeOnPage', sessionSeconds.toString());
}, 1000);

// update the display every function call
function updateTimer(SS)
{
    timerDisplay.textContent = `Time on page: ${SS}`;
}