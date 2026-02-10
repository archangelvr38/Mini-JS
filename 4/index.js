let secondsElapsed = 0;
let interval = null;
const time = document.getElementById("time");

function padStart(value) {
    // We use Math.floor to ensure we don't pad decimals
    return String(Math.floor(value)).padStart(2, "0");
}

function setTime() {
    const minutes = Math.floor(secondsElapsed / 60);
    const seconds = Math.floor(secondsElapsed % 60);
    // Multiply the remainder by 100 to get a 0-99 range
    const milliseconds = Math.floor((secondsElapsed % 1) * 100);
    
    time.innerHTML = `${padStart(minutes)}:${padStart(seconds)}:${padStart(milliseconds)}`;
}

function timer() {
    // Increment by 0.01 (10 milliseconds)
    secondsElapsed += 0.01;
    setTime();
}

function startClock() {
    if (interval) stopClock();
    // Run the timer every 10 milliseconds
    interval = setInterval(timer, 10);
}

function stopClock() {
    clearInterval(interval);
    interval = null; // Reset interval variable
}

function resetClock() {
    stopClock();
    secondsElapsed = 0;
    setTime();
}
