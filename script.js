let time = 15;
let timer = null;
let sessions = 0;

function updateDisplay() {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 10 ? "0" + seconds : seconds;

  document.getElementById("timer").innerText =
    minutes + ":" + seconds;
}

function startTimer() {

  if (timer !== null) return; // prevents multiple timers

  timer = setInterval(() => {

    time--;
    updateDisplay();

    if(time <= 0){

clearInterval(timer);
timer = null;

sessions++;
document.getElementById("sessions").innerText = sessions;

  let alarm = document.getElementById("alarm");
  alarm.play(); // start alarm

  alert("Focus session completed!"); // user clicks OK

  alarm.pause(); // stop alarm
  alarm.currentTime = 0; // reset audio

time = 1500;
updateDisplay();

}

  }, 1000);
}

function pauseTimer() {
  clearInterval(timer);
  timer = null;
}

function resetTimer() {
  clearInterval(timer);
  timer = null;

  time = 1500;
  updateDisplay();
}

updateDisplay();