const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  let counter = 1;

  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];
    const nextChar = str[i + 1];

    if (currentChar === nextChar) {
      counter++;
    } else {
      result += counter + currentChar;
      counter = 1;
    }
  }
  return result.replace(/1/g, '');
}

module.exports = {
  encodeLine
};
