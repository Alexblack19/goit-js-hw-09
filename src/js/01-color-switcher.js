const bodyEl = document.querySelector('body');
const btnStartEl = document.querySelector('button[data-start]');
const btnStopEl = document.querySelector('button[data-stop]');
let timerId = null;

btnStartEl.addEventListener('click', onBtnStartClick);
btnStopEl.addEventListener('click', onBtnStopClick);

function onBtnStartClick(e) {
  e.target.setAttribute('disabled', '');
  timerId = setInterval(() => {
    const color = getRandomHexColor();
    bodyEl.style.backgroundColor = color;
  }, 1000);
}

function onBtnStopClick(e) {  
  clearInterval(timerId); 
  e.target.previousElementSibling.removeAttribute('disabled');   
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
