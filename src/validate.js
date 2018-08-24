/**
 * @typedef {Error} ValidationError
 * @property {String} message - error message
 * @property {String} name - name of error
 */

/**
 * Checks if param is number
 * @param {*} x - variable to check
 * @throws {ValidationError} when is not a number
 */
export function validateNumber(x) {
  if (typeof x !== 'number') {
    throw new Error(`ValidationError, "${x}" is not a Number`);
  }
}
