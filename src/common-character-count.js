const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;
  let comparedString = s2;

  for (let i = 0; i < s1.length; i++) {
    let currentCharS1 = s1[i];

    for (let j = 0; j < comparedString.length; j++) {
      let currentCharS2 = comparedString[j];

      if (currentCharS1 === currentCharS2) {
        count++;
        comparedString = comparedString.replace(currentCharS1, "");
        break;
      }
    }
  }

  return count;
}

module.exports = {
  getCommonCharacterCount,
};
