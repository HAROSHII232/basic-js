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

  for (let i = 0; i < columnCountLength; i++) {
    for (let j = 0; j < rowCountLength; j++) {
      let columnItem = matrix[j][i];
      
      if (columnItem === 0) {
        break;
      } else {
        result += columnItem;
      }
    }
  }

  return result;
}

console.log(
  getMatrixElementsSum([
    [0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3],
  ])
);

module.exports = {
  getMatrixElementsSum,
};
