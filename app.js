const userAnswers = {
    "screen2": {
      "fears": [],
      "desires": [],
      "annoyances": []
    },
    "screen3": {
      "fears": [],
      "desires": [],
      "annoyances": []
    },
    "screen4": {
      "fears": [],
      "desires": [],
      "annoyances": []
    },
    "screen5": {
      "fears": [],
      "desires": [],
      "annoyances": []
    },
    "screen6": {
      "fears": [],
      "desires": [],
      "annoyances": []
    },
    "screen7": {
      "fears": [],
      "desires": [],
      "annoyances": []
    }
  };


const checkbox = event.target;
const screenId = checkbox.dataset.screenId;
const blockType = checkbox.dataset.blockType;
const text = checkbox.nextSibling.textContent;

if (checkbox.checked) {
  userAnswers[screenId][blockType].push(text);
} else {
  const index = userAnswers[screenId][blockType].indexOf(text);
  userAnswers[screenId][blockType].splice(index, 1);
}











// const resultsContainer = document.getElementById("results");

// for (const screenId in userAnswers) {
//   const screenResults = userAnswers[screenId];
//   const screenTitle = document.createElement("h2");
//   screenTitle.textContent = `Результаты для экрана "${screenId}"`;
//   resultsContainer.appendChild(screenTitle);

//   for (const blockType in screenResults) {
//     const blockResults = screenResults[blockType];
//     const blockTitle = document.createElement("h3");
//     blockTitle.textContent = `Блок "${blockType}"`;
//     resultsContainer.appendChild(blockTitle);

//     const blockList = document.createElement("ul");
//     blockResults.forEach((text) => {
//       const listItem = document.createElement("li");
//       listItem.textContent = text;
//       blockList.appendChild(listItem);
//     });
//     resultsContainer.appendChild(blockList);
//   }
// }





const getResultsBtn = document.getElementById('get-results-btn');
getResultsBtn.addEventListener('click', function() {
  // Получить все выбранные чекбоксы и их значения из объекта userAnswers
  const results = {};
  for (const screenId in userAnswers) {
    for (const blockType in userAnswers[screenId]) {
      const blockValues = userAnswers[screenId][blockType];
      if (blockValues.length > 0) {
        if (!results[screenId]) {
          results[screenId] = {};
        }
        results[screenId][blockType] = blockValues;
      }
    }
  }

  // Создать HTML-разметку для отображения результатов
  let html = '';
  for (const screenId in results) {
    const screenName = getScreenName(screenId); // Функция для получения названия экрана по его идентификатору
    html += `<h2>${screenName}</h2>`;
    for (const blockType in results[screenId]) {
      const blockName = getBlockName(blockType); // Функция для получения названия блока по его типу
      html += `<h3>${blockName}</h3>`;
      html += '<ul>';
      results[screenId][blockType].forEach((value) => {
        html += `<li>${value}</li>`;
      });
      html += '</ul>';
    }
  }

  // Отобразить результаты на экране результатов
  const resultsContainer = document.getElementById('results-container');
  resultsContainer.innerHTML = html;
});