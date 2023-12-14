let usedNames = [];
let currentCity = "";
let message;

theGame();

function theGame() {
  if (currentCity === "") {
    message = "";
  } else {
    message = `(последний город: ${currentCity})`;
  }

  let enteredName = prompt(`Введите название города ${message}`);

  let lastUserSymbol;
  let lastAISymbol;
  if (enteredName.slice(-1) === "ы" || enteredName.slice(-1) === "ь") {
    lastUserSymbol = enteredName.slice(-2, -1);
  } else {
    lastUserSymbol = enteredName.slice(-1);
  }

  if (
    usedNames.indexOf(enteredName) === -1 &&
    cities.indexOf(enteredName) !== -1
  ) {
    usedNames.push(enteredName);
  } else if (cities.indexOf(enteredName) === -1) {
    alert("Я такого города не знаю. Попробуйте еще.");
    theGame();
  } else {
    alert("Такой город уже использовался!");
    theGame();
  }

  for (i = 0; i <= cities.length; i++) {
    if (i === cities.length) {
      alert("Не удалось найти подходящий город. Вы победили!");
      currentCity = "";
      usedNames = [];
      theGame();
    } else if (
      cities[i].slice(0, 1) === lastUserSymbol &&
      usedNames.indexOf(cities[i]) === -1
    ) {
      usedNames.push(cities[i]);
      alert(cities[i]);
      currentCity = cities[i];
      break;
    }
  }

  if (currentCity.slice(-1) === "ы" || currentCity.slice(-1) === "ь") {
    lastAISymbol = currentCity.slice(-2, -1);
  } else {
    lastAISymbol = currentCity.slice(-1);
  }

  for (i = 0; i <= cities.length; i++) {
    if (i === cities.length) {
      alert("Доступных городов не осталось. Вы проиграли!");
      currentCity = "";
      usedNames = [];
    } else if (
      cities[i].slice(0, 1) === lastAISymbol &&
      usedNames.indexOf(cities[i]) === -1
    ) {
      break;
    }
  }

  theGame();
}
