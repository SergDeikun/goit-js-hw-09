const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
};

let intervalId = null;
let isActive = true;

refs.startBtn.addEventListener('click', handleStartClick);
refs.stopBtn.addEventListener('click', handleStopClick);

function handleStartClick() {
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);

  refs.startBtn.disabled = true;
  refs.stopBtn.disabled = false;
}

function handleStopClick() {
  clearInterval(intervalId);

  refs.stopBtn.disabled = true;
  refs.startBtn.disabled = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
