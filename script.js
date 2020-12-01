const startingMinutes = 10;
let time = startingMinutes * 60;

const display = document.getElementById('display');

setInterval(updateDisplay, 1000);

function updateDisplay() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 10 ? '0' + seconds : seconds;

  display.innerHTML = `${minutes}:${seconds}`;
  time--;
}
