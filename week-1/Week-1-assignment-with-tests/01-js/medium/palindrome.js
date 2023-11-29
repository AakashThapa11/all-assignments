/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function transform(str) {
  let word = str.toLowerCase();
  let answer = "";
  for (let i = 0; i < word.length; i++) {
    if (!/[.,!? ]/.test(word[i])) {
      answer += word[i];
    }
  }
  return answer;
}

function isPalindrome(str) {
  let answer = transform(str);
  console.log(answer);
  let start = 0;
  let end = answer.length - 1;
  while (start < end) {
    if (answer[start] !== answer[end]) return false;
    start++;
    end--;
  }
  return true;
}

console.log(isPalindrome("Able, was I ere I saw Elba!"));

module.exports = isPalindrome;
