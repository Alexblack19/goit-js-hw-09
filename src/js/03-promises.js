// all modules
import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');
formEl.reset();

formEl.addEventListener('input', onVerifyValueInput);
function onVerifyValueInput(e) {
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

formEl.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  let delay = Number(e.target.elements.delay.value);
  const step = Number(e.target.elements.step.value);
  const amount = Number(e.target.elements.amount.value);

  for (let position = 1; position <= amount; position += 1) {
    createPromise(position, delay);
    delay = delay + step;
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve('Success! Value passed to resolve function');
      } else {
        reject('Error! Error passed to reject function');
      }
    }, delay);
  });
}

createPromise(position, delay)
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
