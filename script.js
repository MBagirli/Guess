let body = document.querySelector('body');
let screen__value = document.querySelector('.result__container__screen');
let guess = document.querySelector('.guess__checked__container__Start');
let result = document.querySelector('.guess__checked__container__score__span__result');
let highresult = document.querySelector('.guess__checked__container__score__best__result');
let check = document.querySelector('.guess__check__btn');
let again = document.querySelector('.header__btn');
let popup = document.querySelector('.popup');
let popup__h2 = document.querySelector('.popup__h2');
let Installation = function () {
  return Math.ceil(Math.random() * 19);
}
let Random__Number = Installation();
let allresults = [];
let repeatednumbers = [];
let score = 20;

check.addEventListener('click', function () {
  let input = document.querySelector('.guess__check__input');
  let input__value = input.value;
  if (input__value == '') {
    popup.classList.add('popup_show');
    popup__h2.textContent = 'You did not write anything!';
    setTimeout(function () {
      popup.classList.remove('popup_show');
    }, 2000);
  } else if (isNaN(input__value)) {
    popup.classList.add('popup_show');
    popup__h2.textContent = 'You did not write a number!';
    setTimeout(function () {
      popup.classList.remove('popup_show');
    }, 2000);
  } else if (repeatednumbers.indexOf(input__value) != -1) {
    popup.classList.add('popup_show');
    popup__h2.textContent = 'You have already wrote this number!';
    setTimeout(function () {
      popup.classList.remove('popup_show');
    }, 2000);
  } else if (Random__Number == input__value) {
    body.style.backgroundColor = '#2f9e44';
    screen__value.textContent = input__value;
    guess.textContent = 'Correct Number!';
    result.textContent = score;
    allresults.push(score);
    let temp = 0;
    for (let i = 0; i < allresults.length; i++) {
      if (temp < allresults[i]) {
        temp = allresults[i];
      }
    }
    highresult.textContent = temp;
  } else if (Random__Number < input__value) {
    guess.textContent = 'Too high!';
    score--;
    result.textContent = score;
    repeatednumbers.push(input__value);
  } else if (Random__Number > input__value) {
    guess.textContent = 'Too low!';
    score--;
    result.textContent = score;
    repeatednumbers.push(input__value);
  }
});

again.addEventListener('click', function () {
  body.style.backgroundColor = '#343a40';
  screen__value.textContent = '?';
  Random__Number = Installation();
  result.textContent = 20;
  document.querySelector('.guess__check__input').value = '';
  repeatednumbers = [];
  score = 20;
});