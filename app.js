<<<<<<< HEAD
// const userAnswers = {
//     "screen2": {
//       "fears": [],
//       "desires": [],
//       "annoyances": []
//     },
//     "screen3": {
//       "fears": [],
//       "desires": [],
//       "annoyances": []
//     },
//     "screen4": {
//       "fears": [],
//       "desires": [],
//       "annoyances": []
//     },
//     "screen5": {
//       "fears": [],
//       "desires": [],
//       "annoyances": []
//     },
//     "screen6": {
//       "fears": [],
//       "desires": [],
//       "annoyances": []
//     },
//     "screen7": {
//       "fears": [],
//       "desires": [],
//       "annoyances": []
//     }
//   };
=======
// // const userAnswers = {
// //     "screen2": {
// //       "fears": [],
// //       "desires": [],
// //       "annoyances": []
// //     },
// //     "screen3": {
// //       "fears": [],
// //       "desires": [],
// //       "annoyances": []
// //     },
// //     "screen4": {
// //       "fears": [],
// //       "desires": [],
// //       "annoyances": []
// //     },
// //     "screen5": {
// //       "fears": [],
// //       "desires": [],
// //       "annoyances": []
// //     },
// //     "screen6": {
// //       "fears": [],
// //       "desires": [],
// //       "annoyances": []
// //     },
// //     "screen7": {
// //       "fears": [],
// //       "desires": [],
// //       "annoyances": []
// //     }
// //   };
>>>>>>> 28a4b09f705275e432e04902210fdaf208809dc5


<<<<<<< HEAD
// const checkbox = event.target;
// const screenId = checkbox.dataset.screenId;
// const blockType = checkbox.dataset.blockType;
// const text = checkbox.nextSibling.textContent;
=======
// // const checkbox = event.target;
// // const screenId = checkbox.dataset.screenId;
// // const blockType = checkbox.dataset.blockType;
// // const text = checkbox.nextSibling.textContent;
>>>>>>> 28a4b09f705275e432e04902210fdaf208809dc5

// if (checkbox.checked) {
//   userAnswers[screenId][blockType].push(text);
// } else {
//   const index = userAnswers[screenId][blockType].indexOf(text);
//   userAnswers[screenId][blockType].splice(index, 1);
// }

// const getResultsBtn = document.getElementById('get-results-btn');
// getResultsBtn.addEventListener('click', function() {
//   // Получить все выбранные чекбоксы и их значения из объекта userAnswers
//   const results = {};
//   for (const screenId in userAnswers) {
//     for (const blockType in userAnswers[screenId]) {
//       const blockValues = userAnswers[screenId][blockType];
//       if (blockValues.length > 0) {
//         if (!results[screenId]) {
//           results[screenId] = {};
//         }
//         results[screenId][blockType] = blockValues;
//       }
//     }
//   }

//   // Создать HTML-разметку для отображения результатов
//   let html = '';
//   for (const screenId in results) {
//     const screenName = getScreenName(screenId); // Функция для получения названия экрана по его идентификатору
//     html += `<h2>${screenName}</h2>`;
//     for (const blockType in results[screenId]) {
//       const blockName = getBlockName(blockType); // Функция для получения названия блока по его типу
//       html += `<h3>${blockName}</h3>`;
//       html += '<ul>';
//       results[screenId][blockType].forEach((value) => {
//         html += `<li>${value}</li>`;
//       });
//       html += '</ul>';
//     }
//   }

//   // Отобразить результаты на экране результатов
//   const resultsContainer = document.getElementById('results-container');
//   resultsContainer.innerHTML = html;
// });















// function showScreen(id) {

//     console.log('Show screen:', id);
//     // Скрываем все экраны
//     var screens = document.getElementsByClassName('screen');
//     for (var i = 0; i < screens.length; i++) {
//         screens[i].classList.remove('active');
//     }
//     // Показываем нужный экран
//     var screen = document.getElementById(id);
//     if (screen) {
//         screen.classList.add('active');
//     } else {
//         console.log('Screen not found:', id);
//     }

//     // Если это экран результатов, отобразить результаты
//     if (id === 'screen8') {
//         // Получить все выбранные чекбоксы и их значения из объекта userAnswers
//         console.log('User answers:', userAnswers);
//         const results = {};
//         for (const screenId in userAnswers) {
//             for (const blockType in userAnswers[screenId]) {
//                 const blockValues = userAnswers[screenId][blockType];
//                 if (blockValues.length > 0) {
//                     if (!results[screenId]) {
//                         results[screenId] = {};
//                     }
//                     results[screenId][blockType] = blockValues;
//                 }
//             }
//         }

//         // Создать HTML-разметку для отображения результатов
//         let html = '';
//         for (const screenId in results) {
//             const screenName = getScreenName(screenId); // Функция для получения названия экрана по его идентификатору
//             html += `<h2>${screenName}</h2>`;
//             for (const blockType in results[screenId]) {
//                 const blockName = getBlockName(blockType); // Функция для получения названия блока по его типу
//                 html += `<h3>${blockName}</h3>`;
//                 html += '<ul>';
//                 results[screenId][blockType].forEach((value) => {
//                     html += `<li>${value}</li>`;
//                 });
//                 html += '</ul>';
//             }
//         }

//         // Отобразить результаты на экране результатов
//         const resultsContainer = document.getElementById('results-container');
//         resultsContainer.innerHTML = html;
//     }
// }




// const startTestBtn = document.getElementById('start-test-btn');
// startTestBtn.addEventListener('click', function() {
//   showScreen('screen2');
// });
