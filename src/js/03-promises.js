// all modules
import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');

formEl.reset();
formEl.addEventListener('input', handleVerifyValueInput);
formEl.addEventListener('submit', handleFormSubmit);

function handleVerifyValueInput(e) {
  const { delay, step, amount } = e.currentTarget.elements;
  if (
    Number(delay.value) < 0 ||
    Number(step.value) < 0 ||
    Number(amount.value) < 0
  ) {
    Notiflix.Notify.failure('❌ Values must be positive');
    formEl.lastElementChild.setAttribute('disabled', '');
  } else {
    formEl.lastElementChild.removeAttribute('disabled');
  }
}

function handleFormSubmit(e) {
  e.preventDefault();
  let delay = Number(e.target.elements.delay.value);
  const step = Number(e.target.elements.step.value);
  const amount = Number(e.target.elements.amount.value);

  for (let position = 1; position <= amount; position += 1) {    
    createPromise(position, delay)
      .then(successfulPromisMessage)
      .catch(failurePromisMessage);
    delay += step;
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function successfulPromisMessage({ position, delay }) {
  Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
}

function failurePromisMessage({ position, delay }) {
  Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
}
