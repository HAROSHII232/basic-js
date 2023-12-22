const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = {};
  let reversedDomains = domains.map(elem => elem.split('.').reverse())

  for (let i = 0; i < reversedDomains.length; i++) {
    let dns = ''
    let reversedDomainsElem = reversedDomains[i]

    for (let j = 0; j < reversedDomainsElem.length; j++) {
      let subbdomain = `.${reversedDomainsElem[j]}`;
      dns += subbdomain

      result[dns] = result[dns] ? result[dns] + 1 : 1;
    }
  }

  return result
}

module.exports = {
  getDNSStats
};
