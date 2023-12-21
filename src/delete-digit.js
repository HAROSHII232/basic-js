const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arrayOfNumbers = [];
  let stringOfNumber = String(n);

  for (let i = 0; i < stringOfNumber.length; i++) {
    const intermediateNumber = Number(
      stringOfNumber.replace(stringOfNumber[i], "")
    );
    arrayOfNumbers.push(intermediateNumber);
  }

  return arrayOfNumbers.sort((a, b) => b - a)[0];
}

module.exports = {
  deleteDigit,
};
