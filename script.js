var start = document.getElementById('start');
var reset = document.getElementById('reset');

var hour =  document.getElementById('hour');
var minute =  document.getElementById('minute');
var second =  document.getElementById('second');

// Store a reference to the variable
var startTimer = null;

function timer() {
  if (hour.value == 0 && minute.value == 0 && second.value == 0) {
    hour.value == 0;
    minute.value == 0;
    second.value == 0;
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
  return;
}

function stopTimer() {
  clearInterval(startTimer);
}

start.addEventListener('click', function(){
  // Initilize the variable startTimer
  function startInterval() {
    startTimer = setInterval(function() {
      timer();
    }, 1000);
  }
  startInterval();
})

reset.addEventListener('click', function(){
  hour.value = 0;
  minute.value = 0;
  second.value = 0;
  stopTimer();
})
