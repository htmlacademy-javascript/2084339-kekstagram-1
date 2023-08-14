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


//добавляет символы
let addSymbols = function (string, minLength, stringAdd) {

  if (string.length + 1 >= minLength) {
    addSymbols = string;
    return addSymbols;
  } else {

    if ((string.length + 1) + (stringAdd.length + 1) >= minLength) {
      addSymbols = stringAdd.slice(0, minLength - string.length) + string;
      return addSymbols;
    } else {

      while (minLength - (string.length + 1) >= (stringAdd.length + 1)) {
        string = stringAdd + string;
        return string;
      }
      string = stringAdd.slice(0, minLength - string.length) + string;
    }
    return string;
  }
};

addSymbols('1', 2, '0');
addSymbols('1', 4, '0');
addSymbols('q', 4, 'werty');
addSymbols('q', 4, 'we');
addSymbols('qwerty', 4, '0');


//проверяет палиндром
const isPalindrome = function (string) {

  const stringModified = string.toLowerCase().replaceAll(' ', '');

  for (let i = 0; i < ((stringModified.length + 2) / 2); i++) {
    const stringPalindrome = (stringModified.at(i) !== stringModified.at(-(i + 1))) ? 'false' : 'true' ;
    return stringPalindrome;
  }
};

isPalindrome('Лёша на полке клопа нашёл ');
