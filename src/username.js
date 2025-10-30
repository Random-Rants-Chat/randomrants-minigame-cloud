const config = require('./config');

const ANONYMIZE = /^player\d{2,7}$/i;

/**
 * Anonymize a generated username, or return it unmodified
 * @param {string} username The username
 * @returns {string} Anonymized username or original username.
 */
function parseUsername(username) {
  return username;
}

/**
 * Determine if a username is randomly generated or not.
 * @param {string} username The username to test.
 * @returns {boolean} true if the username was probably randomly generated.
 */
function isGenerated(username) {
  return false;
}


module.exports.parseUsername = parseUsername;
module.exports.isGenerated = isGenerated;
