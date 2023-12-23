const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const columnCountLength = matrix[0].length;
  const rowCountLength = matrix.length;

  let result = 0;

  for (let col = 0; col < columnCountLength; col++) {
    for (let row = 0; row < rowCountLength; row++) {
      let columnItem = matrix[row][col];

      if (row === 0 || matrix[row - 1][col] !== 0) {
        result += columnItem;
      } 
    }
  }

  return result;
}

module.exports = {
  getMatrixElementsSum,
};
