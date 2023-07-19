// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  startBtn: document.querySelector('button[data-start]'),
  spanDaysEl: document.querySelector('span[data-days]'),
  spanHoursEl: document.querySelector('span[data-hours]'),
  spanMinutesEl: document.querySelector('span[data-minutes]'),
  spanSecondsEl: document.querySelector('span[data-seconds]'),
};

refs.startBtn.addEventListener('click', e => {
  e.target.setAttribute('disabled', '');
  timer.start();
});

const timer = {
  intervalId: null,
  isActive: false,

  start() {
    const startTime = Date.now();
    console.log(startTime);

    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;
      const timerComponents = convertMs(deltaTime);
      console.log(timerComponents);
      const { days, hours, minutes, seconds } = timerComponents;
      timerValueUpdate(days, hours, minutes, seconds);
    }, 1000);
  },
};

function pad(value) {
  return String(value).padStart(2, '0');
}

function timerValueUpdate(days, hours, minutes, seconds) {
  refs.spanDaysEl.textContent = days;
  refs.spanHoursEl.textContent = hours;
  refs.spanMinutesEl.textContent = minutes;
  refs.spanSecondsEl.textContent = seconds;
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}
