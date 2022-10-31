'use strict';

const selectEl = document.querySelector('.js-select');
const btnEl = document.querySelector('.js-btn');
const textEl = document.querySelector('.js-text');

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
  console.log({ valueSelectedLight });
  console.log(valueDark.force);

  if (valueSelectedLight > valueDark.force) {
    textEl.innerHTML = '¡Ha ganado el Ejército del Bien!Enhorabuena.';
  } else if (valueSelectedLight < valueDark.force) {
    textEl.innerHTML = '¡Ha ganado el Ejército del Mal!Vuelve a intentarlo.';
  } else if (valueSelectedLight === valueDark.force) {
    textEl.innerHTML = '¡Empate!';
  }
}
function handleClick(event) {
  event.preventDefault();
  const randomNumberDark = getRandomNumberFromArray(arrayDark);
  const selectValue = parseInt(selectEl.value);
  battleResultPaint(selectValue, randomNumberDark);
}

btnEl.addEventListener('click', handleClick);
