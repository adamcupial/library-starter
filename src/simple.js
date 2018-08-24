import { validateNumber } from './validate.js';

/**
 * Adds two numbers
 * @param {Number} x - first number
 * @param {Number} y - second number
 * @returns {Number} sum of x and y
 */
export function add(x, y) {
  validateNumber(x);
  validateNumber(y);

  return x + y;
}

/**
 * Substract number from another
 * @param {Number} x - first number
 * @param {Number} y - second number
 * @returns {Number} substraction of x and y
 */
export function substract(x, y) {
  validateNumber(x);
  validateNumber(y);

  return x - y;
}
