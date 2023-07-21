// all modules
import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', onSubmit);

function onSubmit(e) {  
  e.preventDefault();  
  const position = e.target.elements.delay.value;
  const delay = e.target.elements.step.value;
  const amount = e.target.elements.amount.value; 
  for (let i = 1; i <= Number(amount); i += 1) {
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
