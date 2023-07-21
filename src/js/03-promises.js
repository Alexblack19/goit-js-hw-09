// all modules
import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');

formEl.addEventListener('input', onValueInput);
function onValueInput(e) {  
  console.log(e.target.value);
  if (e.target.value < 0) {
    Notiflix.Notify.failure('❌ Values must be positive');
    formEl.lastElementChild.setAttribute('disabled', '');
  } else {
    formEl.lastElementChild.removeAttribute('disabled');
  }
}

formEl.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  const position = Number(e.target.elements.delay.value);
  const delay = Number(e.target.elements.step.value);
  const amount = Number(e.target.elements.amount.value);
  for (let i = 1; i <= amount; i += 1) {
    createPromise(position, delay);
  }
  e.currentTarget.reset();
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  } else {
    // Reject
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  }
}
