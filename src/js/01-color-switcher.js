const bodyEl = document.querySelector('body');
const btnStartEl = document.querySelector('button[data-start]');
const btnStopEl = document.querySelector('button[data-stop]');
let timerId = null;

btnStartEl.addEventListener('click', handleBtnStartClick);
btnStopEl.addEventListener('click', handleBtnStopClick);

function handleBtnStartClick(e) {  
  e.target.setAttribute('disabled', '');
  e.target.nextElementSibling.removeAttribute('disabled');
  timerId = setInterval(() => {
    const color = getRandomHexColor();
    bodyEl.style.backgroundColor = color;
  }, 1000);
}

function handleBtnStopClick(e) {
  clearInterval(timerId);
  e.target.setAttribute('disabled', '');
  e.target.previousElementSibling.removeAttribute('disabled');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
