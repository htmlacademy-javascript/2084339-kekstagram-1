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

//addSymbols('1', 2, '0');
addSymbols('1', 4, '0');
//addSymbols('q', 4, 'werty');
//addSymbols('q', 4, 'we');
//addSymbols('qwerty', 4, '0');


let checkLength = function (string, maxLength) {
  checkLength = string.length <= maxLength ? 'true' : 'false';
  return checkLength;
};

checkLength('проверяемая строка', 20);


let isPalindrome = function (string) {

  const stringModified = string.toLowerCase().replaceAll(' ', '');

  for (let i = 0; i < stringModified.length - 1; i++) {
    isPalindrome = (stringModified.at(i) === stringModified.at(-(i + 1))) ? 'true' : 'false';
  }
  return isPalindrome;
};

isPalindrome('Лёша на полке клопа нашёл ');


let checkPalindrome = function (string) {

  const stringAdapt = string.toLowerCase().replaceAll(' ', '');
  let stringReverse = '';

  for (let i = stringAdapt.length - 1; i >= 0 ; i--) {
    stringReverse += stringAdapt[i];
    checkPalindrome = stringReverse === stringAdapt ? 'true' : 'false';
  }
  return checkPalindrome;
};

checkPalindrome('Лёша на полке клопа нашёл ');


let getNumbers = function (string) {
  let stringNew = '';

  string = string.toString();

  for (let i = 0; i <= string.length - 1; i++) {

    if (!isNaN(parseInt(string[i], 10))) {
      stringNew += parseInt(string[i], 10);
    }

    getNumbers = parseInt(stringNew, 10);
  }
  return getNumbers;
};

getNumbers(-20);
getNumbers('2023 год');
getNumbers('ECMAScript 2022');
getNumbers('1 кефир, 0.5 батона');
getNumbers('агент 007');
getNumbers('а я томат');



