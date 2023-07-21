const formEl = document.querySelector('.form');

formEl.addEventListener('submit', onSubmit);

function onSubmit(e) {  
  e.preventDefault();
  console.dir(e);
  const position = e.target.elements.delay.value;
  const delay = e.target.elements.step.value;
  const amount = e.target.elements.amount.value; 
  for (let i = 0; i < Number(amount); i += 1) {
    createPromise(position, delay);
  }
  e.currentTarget.reset();
}

function createPromise(position, delay) { 
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
