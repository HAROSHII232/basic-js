const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  const separator = options.separator ? options.separator : "+";
  let addition = options.addition ? options.addition : "";
  if (options.addition === false || options.addition === null) {
    addition = String(options.addition)
  }

  const additionSeparator = options.additionSeparator
    ? options.additionSeparator
    : "|";
  const repeatTimes = options.repeatTimes ? options.repeatTimes : 1;
  const additionRepeatTimes = options.additionRepeatTimes
    ? options.additionRepeatTimes
    : 1;

  return Array(repeatTimes)
    .fill(
      `${String(str)}${Array(additionRepeatTimes)
        .fill(String(addition))
        .join(additionSeparator)}`
    )
    .join(separator);
}

module.exports = {
  repeater,
};
