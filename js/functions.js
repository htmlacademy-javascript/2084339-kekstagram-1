let isPalindrome = function (string) {

  let stringLower = string.toLowerCase();
  let stringReplace = stringLower.replaceAll(' ', '');

  for (let i = 0; i < stringReplace.length / 2; i++) {
    if (stringReplace.at(i) === stringReplace.at(-i)) {
      isPalindrome = true;
    }
  }
};

isPalindrome('ДовОд');
