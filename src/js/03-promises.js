
const formRef = document.querySelector('.form');
// console.log(formRef);
function createPromise(position, delay) {
  
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    obj = {position, delay};
    setTimeout(() => {
      if (shouldResolve) {
        resolve(obj);
      } else {
        reject(obj);
      }
    }, delayValue);
    
  })
  
}

formRef.addEventListener('submit', event => {
  event.preventDefault();
  console.log(event);
  const {
    elements: { delay, step, amount },
  } = event.currentTarget;

  const delayValue = Number(delay.value);
  const stepValue = Number(step.value);
  const amountValue = Number(amount.value);
  console.log(delayValue, stepValue, amountValue);

  for (let position = 1; position <= amountValue; position += 1) {
    setTimeout(() => {
      console.log(position, delayValue, stepValue, amountValue);
      setTimeout(() => {
        createPromise(position, delayValue + stepValue * position)
          .then(res => onSuccess(res.position, res.delay))
          .catch(error => onReject(error.position, error.delay));
      }, delayValue);
    }, stepValue);
  }
});
//--------------------------------------------------------------

// createPromise(position, delayValue + stepValue * position)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });








//``````````````````````


// function createPromise(position, delay) {
  
//   return new Promise((resolve, reject) => {
//     const shouldResolve = Math.random() > 0.3;
//     obj = {position, delay};
//     setTimeout(() => {
//       if (shouldResolve) {
//         resolve(obj);
//       } else {
//         reject(obj);
//       }
//     }, delay);
    
//   })
  
// }


// formRef.addEventListener('submit', event => {
//   event.рreventDefault();
//   const {
//     elements: { delay, step, amount },
//   } = event.currentTarget;
//   const delayValue = Number(delay.value);
//   const stepValue = Number(step.value);
//   const amountValue = Number(amount.value);
//   console.log(delayValue, stepValue, amountValue);

//   for (let position = 1; position <= amountValue; position += 1) {
//     setTimeout(() => {
//       console.log(position, delayValue, stepValue, amountValue);
//       setTimeout(() => {
//         createPromise(position, delayValue + stepValue * position)
//           .then(res => onSuccess(res.position, res.delay))
//           .catch(error => onReject(error.position, error.delay));
//       }, delayValue);
//     }, stepValue)
//   }
// })
