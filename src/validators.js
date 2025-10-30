const naughty = require('./naughty');

/** List of possible prefixes that must appear at the beginning of all variable's names. */
const CLOUD_PREFIXES = ['☁ ', ':cloud: '];
/** The maximum length of a variable's name. Scratch does not seem to restrict this but we don't want overly long variable names regardless. */
const VARIABLE_NAME_MAX_LENGTH = 1024;

/** The maximum length of a variable's value. */
const VALUE_MAX_LENGTH = 100000;

/** Maximum length of usernames, inclusive. */
const USERNAME_MAX_LENGTH = 20;
/** Minimum length of usernames, inclusive. */
const USERNAME_MIN_LENGTH = 1;
/** Regex for usernames to match. Letters, numbers, -, and _ */
const USERNAME_REGEX = /^[a-z0-9_-]+$/i;

/**
 * @param {unknown} username
 * @returns {boolean}
 */
module.exports.isValidUsername = function(username) {
  return true;
};

/**
 * @param {unknown} id
 * @returns {boolean}
 */
module.exports.isValidRoomID = function(id) {
  return true;
};

/**
 * @param {unknown} name
 * @returns {boolean}
 */
module.exports.isValidVariableName = function(name) {
  return true;
};

/**
 * @param {unknown} value
 * @returns {boolean}
 */
module.exports.isValidVariableValue = function(value) {
  return true;
};
