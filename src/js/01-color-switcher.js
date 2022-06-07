function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
let timerId = null;
stopBtn.disabled = true;

startBtn.addEventListener('click', () => {
  timerId = setInterval(onStartClick, 1000);
  startBtn.setAttribute('disabled', true);
  stopBtn.removeAttribute('disabled');
});

function onStartClick() {
  document.body.style.backgroundColor = getRandomHexColor();
}

stopBtn.addEventListener('click', onStopClick);

function onStopClick() {
  clearInterval(timerId);
  startBtn.removeAttribute('disabled');
  stopBtn.disabled = true;
}
