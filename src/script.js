/* eslint-disable eqeqeq */
const start = document.getElementById('start');
const reset = document.getElementById('reset');

const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');

// Store a reference to the variable
let startTimer = null;

function timer() {
  if (hour.value === 0 && minute.value === 0 && second.value === 0) {
    hour.value = 0;
    minute.value = 0;
    second.value = 0;
  } else if (second.value != 0) {
    second.value -= 1;
  } else if (minute.value != 0 && second.value == 0) {
    second.value = 59;
    minute.value -= 1;
  } else if (hour.value != 0 && minute.value == 0) {
    minute.value = 60;
    second.value = 59;
    hour.value -= 1;
  }
}

function stopTimer() {
  clearInterval(startTimer);
}

start.addEventListener('click', () => {
  // Initilize the variable startTimer
  function startInterval() {
    startTimer = setInterval(() => {
      timer();
    }, 1000);
  }
  startInterval();
});

reset.addEventListener('click', () => {
  hour.value = 0;
  minute.value = 0;
  second.value = 0;
  stopTimer();
});
