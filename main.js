'use strict';

const selectEl = document.querySelector('.js-select');
const btnEl = document.querySelector('.js-btn');
const textEl = document.querySelector('.js-text');

const arrayMal = [
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
function getRandomNumberFromArray(array) {
  const randomNumber = Math.ceil(Math.random() * array.length);
  const result = array[randomNumber];
  return result;
}

const randomNumberMal = getRandomNumberFromArray(arrayMal);

function getValue() {
  const selectValue = selectEl.value;
  return selectValue;
}
function battleResultPaint() {
  if (selectValue > randomNumberMal.force) {
    textEl.innerHTML = '¡Ha ganado el Ejército del Bien!Enhorabuena.';
  } else if (selectValue < randomNumberMal.force) {
    textEl.innerHTML = '¡Ha ganado el Ejército del Mal!Vuelve a intentarlo.';
  } else if (selectValue === randomNumberMal.force) {
    textEl.innerHTML = '¡Empate!';
  }
}
function handleClick(event) {
  event.preventDefault();
  getValue();
  battleResultPaint();
}

btnEl.addEventListener('click', handleClick);
