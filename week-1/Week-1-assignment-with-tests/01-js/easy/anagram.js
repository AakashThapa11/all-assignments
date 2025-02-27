/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  let frqC1 = {};
  let frqC2 = {};

  for (let char of str1.toLowerCase()) {
    frqC1[char] = (frqC1[char] || 0) + 1;
  }

  for (let char of str2.toLowerCase()) {
    frqC2[char] = (frqC2[char] || 0) + 1;
  }

  for (let i of str2.toLowerCase()) {
    if (frqC1[i] !== frqC2[i]) return false;
  }
  return true;
}

module.exports = isAnagram;
