// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  inputEl: document.querySelector('#datetime-picker'),
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


let selectDateTime = null;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectDateTime = selectedDates[0].getTime();
    console.log(selectDateTime);
  },
};
flatpickr(refs.inputEl, options);





const timer = {
  start() {
    // const startTime = Date.now();
    console.log(selectDateTime);

    const intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;
      const timerComponents = convertMs(deltaTime);
      const { days, hours, minutes, seconds } = timerComponents;
      timerValueUpdate(days, hours, minutes, seconds);
    }, 1000);
  },
};

function timerValueUpdate(days, hours, minutes, seconds) {
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
