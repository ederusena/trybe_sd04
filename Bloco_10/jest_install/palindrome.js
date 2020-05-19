// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
//   let re = /[\W_]/g;
//   let lowRegStr = str.toLowerCase().replace(re, '');
//   let reverseStr = lowRegStr.split('').reverse().join(''); 
//   return reverseStr === lowRegStr;
// }

const palindrome = str => {
  for (let i = 0, j = str.length - 1; i <= j; i += 1, j -= 1) {
    if (str[i] !== str[j]) return false;
  }
  return true;
}

module.exports = palindrome;