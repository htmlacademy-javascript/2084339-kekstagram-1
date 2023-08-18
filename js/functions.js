//добавляет символы
const addSymbols = function (string, minLength, stringAdd) {
  let newString;

  if (string.length >= minLength) {
    newString = string;
  } else {

    if ((string.length) + (stringAdd.length) >= minLength) {
      newString = stringAdd.slice(0, minLength - string.length) + string;
    } else {

      while (minLength - (string.length) >= (stringAdd.length)) {
        string = stringAdd + string;
      }
      newString = stringAdd.slice(0, minLength - string.length) + string;
    }
  }
  return newString;
};

addSymbols('1', 2, '0');
addSymbols('1', 4, '0');
addSymbols('q', 4, 'werty');
addSymbols('q', 4, 'we');
addSymbols('qwerty', 4, '0');


//извлекает цифры
const getNumbers = function (string) {
  let stringNew = '';

  string = string.toString();

  for (let i = 0; i <= string.length - 1; i++) {

    if (!isNaN(parseInt(string[i], 10))) {
      stringNew += parseInt(string[i], 10);
    }

    const newNumbers = parseInt(stringNew, 10);
    return newNumbers;
  }
};

getNumbers(-20);
getNumbers('2023 год');
getNumbers('ECMAScript 2022');
getNumbers('1 кефир, 0.5 батона');
getNumbers('агент 007');
getNumbers('а я томат');


//проверяет длину
const checkLength = (string, maxLength) => string.length <= maxLength;

checkLength('проверяемая строка', 20);


//проверяет палиндром
const isPalindrome = function (string) {

  const stringModified = string.toLowerCase().replaceAll(' ', '');
  let stringPalindrome;

  for (let i = 0; i < (stringModified.length / 2); i++) {
    stringPalindrome = (stringModified.at(i) !== stringModified.at(-(i + 1))) ? 'false' : 'true' ;
  }
  return stringPalindrome;
};

isPalindrome('Лёша на полке клопа нашёл ');
isPalindrome('Лёша на полке нашёл ');
