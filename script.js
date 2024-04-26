let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startStop() {
  if (isRunning) {
    clearInterval(timer);
    document.getElementById("startStopButton").innerText = "Start";
  } else {
    timer = setInterval(updateDisplay, 1000);
    document.getElementById("startStopButton").innerText = "Stop";
  }
  isRunning = !isRunning;
}

function reset() {
  clearInterval(timer);
  isRunning = false;
  seconds = -1;
  minutes = 0;
  hours = 0;
  updateDisplay();
  document.getElementById("startStopButton").innerText = "Start";
}

function updateDisplay() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  const display = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  document.getElementById("display").innerText = display;
}

function pad(value) {
  return value < 10 ? "0" + value : value;
}

document.getElementById("startStopButton").addEventListener("click", startStop);
document.getElementById("resetButton").addEventListener("click", reset);
