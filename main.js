'use strict';
let countLight = 0;
let countDark = 0;
let gamesCount = 0;

const selectEl = document.querySelector('.js-select');
const btnEl = document.querySelector('.js-btn');
const btnResetEl = document.querySelector('.js-btnReset');
const textEl = document.querySelector('.js-text');
const textCountLightEl = document.querySelector('.js-countLight');
const textCountDarkEl = document.querySelector('.js-countDark');

const arrayDark = [
  {
    nameBad: 'Sureños malos',
    force: 2,
  },
  {
    nameBad: 'Orcos malos',
    force: 2,
  },
  {
    nameBad: 'Goblins',
    force: 2,
  },
  {
    nameBad: 'Huargos',
    force: 3,
  },
  {
    nameBad: 'Trolls',
    force: 5,
  },
];
function getRandomNumberFromArray(arr) {
  const randomNumber = Math.floor(Math.random() * arr.length);
  const result = arr[randomNumber];
  return result;
}

function battleResultPaint(valueSelectedLight, valueDark) {
  if (valueSelectedLight > valueDark.force) {
    textEl.innerHTML = '¡Ha ganado el Ejército del Bien!Enhorabuena.';
    countLight += 1;
    textCountLightEl.innerHTML = countLight;
  } else if (valueSelectedLight < valueDark.force) {
    textEl.innerHTML = '¡Ha ganado el Ejército del Mal!Vuelve a intentarlo.';
    countDark += 1;
    textCountDarkEl.innerHTML = countDark;
  } else if (valueSelectedLight === valueDark.force) {
    textEl.innerHTML = '¡Empate!';
  }
}
function handleClick(event) {
  event.preventDefault();
  const randomNumberDark = getRandomNumberFromArray(arrayDark);
  const selectValue = parseInt(selectEl.value);
  battleResultPaint(selectValue, randomNumberDark);
  gamesCount++;
  if (gamesCount === 10) {
    btnEl.classList.add('hidden');
    btnResetEl.classList.remove('hidden');
    gameOver();
  }
}

function handleResetGame(event) {
  event.preventDefault();
  btnEl.classList.remove('hidden');
  btnResetEl.classList.add('hidden');
  countLight = 0;
  countDark = 0;
  gamesCount = 0;
  textCountLightEl.innerHTML = countLight;
  textCountDarkEl.innerHTML = countDark;
}
function gameOver() {
  if (countLight > countDark) {
    textEl.innerHTML = `FIN: ¡El ejécito del Bien ha ganado la guerra!`;
  } else if (countDark > countLight) {
    `FIN: ¡El ejécito del Mal ha ganado la guerra`;
  } else {
    textEl.innerHTML = `Empate`;
  }
}

btnEl.addEventListener('click', handleClick);
btnResetEl.addEventListener('click', handleResetGame);
