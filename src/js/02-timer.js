// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';
// all modules
import Notiflix from 'notiflix';

const refs = {
  inputEl: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('button[data-start]'),
  spanDaysEl: document.querySelector('span[data-days]'),
  spanHoursEl: document.querySelector('span[data-hours]'),
  spanMinutesEl: document.querySelector('span[data-minutes]'),
  spanSecondsEl: document.querySelector('span[data-seconds]'),
};

// === Add button reset ===
refs.startBtn.insertAdjacentHTML(
  'afterend',
  '<button type="button" data-reset>Reset</button>'
);
const resetBtnEl = document.querySelector('button[data-reset]');
//=========================

refs.startBtn.setAttribute('disabled', '');

let finishDateTime;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    finishDateTime = selectedDates[0].getTime();
    if (finishDateTime > Date.now()) {
      refs.startBtn.removeAttribute('disabled');
    } else {
      Notiflix.Notify.failure('Please shoose a date in the future');
    }
  },
};
flatpickr(refs.inputEl, options);

refs.startBtn.addEventListener('click', e => {
  e.target.setAttribute('disabled', '');
  e.target.previousElementSibling.setAttribute('disabled', '');
  timer.start();
});

const timer = {
  intervalId: null,
  timerComponents: {},
  start() {
    const intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = finishDateTime - currentTime;
      const timerComponents = convertMs(deltaTime);
      timerValueUpdate(timerComponents);
      resetBtnEl.addEventListener('click', e => this.reset(intervalId));
      this.finish(intervalId, timerComponents);
    }, 1000);
  },
  finish(intervalId, timerComponents) {
    const { days, hours, minutes, seconds } = timerComponents;
    if (
      days === '00' &&
      hours === '00' &&
      minutes === '00' &&
      seconds === '00'
    ) {
      clearInterval(intervalId);
      refs.inputEl.removeAttribute('disabled');
    }
  },
  reset(intervalId) {
    clearInterval(intervalId);
    refs.inputEl.removeAttribute('disabled');
    refs.spanDaysEl.textContent = '00';
    refs.spanHoursEl.textContent = '00';
    refs.spanMinutesEl.textContent = '00';
    refs.spanSecondsEl.textContent = '00';
    flatpickr(refs.inputEl, options);
  },
};

function timerValueUpdate(timerComponents) {
  const { days, hours, minutes, seconds } = timerComponents;
  refs.spanDaysEl.textContent = days;
  refs.spanHoursEl.textContent = hours;
  refs.spanMinutesEl.textContent = minutes;
  refs.spanSecondsEl.textContent = seconds;
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );
  return { days, hours, minutes, seconds };
}
