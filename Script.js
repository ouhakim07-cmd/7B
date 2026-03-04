let timer;
let seconds = 0;
let points = 0;

// TIMER FUNCTIONS
function updateDisplay() {
    let hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
    let mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    let secs = String(seconds % 60).padStart(2, '0');

    document.getElementById("timer").textContent = `${hrs}:${mins}:${secs}`;
}

function startTimer() {
    timer = setInterval(() => {
        seconds++;
        updateDisplay();
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

function resetTimer() {
    clearInterval(timer);
    seconds = 0;
    updateDisplay();
}

// POINTS + RANK
function addPoints() {
    points += 10;
    document.getElementById("points").textContent = points;
    updateRank();
}

function updateRank() {
    let rankEl = document.getElementById("rank");

    if (points < 50) rankEl.textContent = "Beginner 📘";
    else if (points < 100) rankEl.textContent = "Smart Student 📙";
    else if (points < 200) rankEl.textContent = "Advanced 📗";
    else rankEl.textContent = "Master Scholar 📕👑";
}

// Update points display
document.addEventListener("DOMContentLoaded", updateDisplay);