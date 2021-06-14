//#region ==== PROMISIFICATION

// TASK 1
// const delay = ms => {
//     // Твой код
//     return new Promise(resolve => {
//         setTimeout(() => resolve(ms), ms);
//     });
//   };
  
//   const logger = time => console.log(`Resolved after ${time}ms`);
  
//   // Вызовы функции для проверки
//   delay(2000).then(logger); // Resolved after 2000ms
//   delay(1000).then(logger); // Resolved after 1000ms
//   delay(1500).then(logger); // Resolved after 1500ms

// TASK 2
// const users = [
//     { name: 'Mango', active: true },
//     { name: 'Poly', active: false },
//     { name: 'Ajax', active: true },
//     { name: 'Lux', active: false },
//   ];

//   const toggleUserState = (allUsers, userName) => {
//     const updatedUsers = allUsers.map(user =>
//       user.name === userName ? { ...user, active: !user.active } : user,
//     );

//     return new Promise(resolve => {
//         resolve(updatedUsers);
//     });

//   };
//   const logger = updatedUsers => console.table(updatedUsers);

  
//   /*
//    * Сейчас работает так
//    */
// //   toggleUserState(users, 'Mango', logger);
// //   toggleUserState(users, 'Lux', logger);
  
//   /*
//    * Должно работать так
//    */
//   toggleUserState(users, 'Mango').then(logger);
//   toggleUserState(users, 'Lux').then(logger);



  

// TASK 3
// const randomIntegerFromInterval = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   };
  
//   const makeTransaction = (transaction) => {
//     const delay = randomIntegerFromInterval(200, 500);
  
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const canProcess = Math.random() > 0.3;
//             if(canProcess) {
//                 resolve({id: transaction.id, time: delay});
//             }
//             reject(transaction.id);
//         }, delay);
//     });
//   };
  
//   const logSuccess = ({id, time}) => {
//     console.log(`Transaction ${id} processed in ${time} ms`);
//   };
  
//   const logError = id => {
//     console.warn(`Error processing transaction ${id}. Please try again later.`);
//   };
  
//   /*
//    * Работает так
//    */
// //   makeTransaction({ id: 70, amount: 150 }, logSuccess, logError);
// //   makeTransaction({ id: 71, amount: 230 }, logSuccess, logError);
// //   makeTransaction({ id: 72, amount: 75 }, logSuccess, logError);
// //   makeTransaction({ id: 73, amount: 100 }, logSuccess, logError);
//   /*
//    * Должно работать так
//    */
//   makeTransaction({ id: 70, amount: 150 })
//     .then(logSuccess)
//     .catch(logError);
  
//   makeTransaction({ id: 71, amount: 230 })
//     .then(logSuccess)
//     .catch(logError);
  
//   makeTransaction({ id: 72, amount: 75 })
//     .then(logSuccess)
//     .catch(logError);
  
//   makeTransaction({ id: 73, amount: 100 })
//     .then(logSuccess)
//     .catch(logError);

//#endregion


//#region ====== COLOR-PICKER
const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

  const TIMEOUT = 1000;

  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  let timerHandler = null;

  const startButton = document.querySelector('[data-action="start"]');
  const stopButton = document.querySelector('[data-action="stop"]');
  
  stopButton.disabled = true;

  startButton.addEventListener('click', onStartButtonClick);
  stopButton.addEventListener('click', onStopButtonClick);

  function onStartButtonClick() {
      startButton.disabled = true;
      stopButton.disabled = false;
  
      timerHandler = setTimeout(changeBodyColor, TIMEOUT);
  }

  function onStopButtonClick() {
    startButton.disabled = false;
    stopButton.disabled = true;

    clearTimeout(timerHandler, TIMEOUT);
  }

  function changeBodyColor() {
    // document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)];
    
    // with animation
    const firstColor = colors[randomIntegerFromInterval(0, 5)];
    console.log(firstColor);
    const secondColor = colors[randomIntegerFromInterval(0, 5)];
    document.body.animate([
        {
            backgroundColor: `${firstColor}`
        },
        {
            backgroundColor: `${secondColor}`
        },
    ], TIMEOUT);
    timerHandler = setTimeout(changeBodyColor, TIMEOUT);
  }
//#endregion
