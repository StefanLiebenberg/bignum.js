

/**
 * @author stefan@artspace44.com (Stefan Liebenberg)
 * @fileoverview Contains functions to calculate big number objects.
 */

goog.provide('sage.bignum');
goog.require('sage.bignum.BigNumber');


/**
 * @typedef {sage.bignum.BigNumber|number|string}
 */
sage.bignum.Convertable;


/**
 * Converts a number to bignum.
 *
 * @param {sage.bignum.Convertable} number
 *        A value convertable to bignumber format.
 *
 * @return {sage.bignum.BigNumber}
 *         A bignumber.
 */
sage.bignum.convert = function(number) {
  if (number instanceof sage.bignum.BigNumber) {
    return number;
  } else {
    return new sage.bignum.BigNumber(number);
  }
};


/**
 * Adds two bignumbers together.
 *
 *    EG.
 *       sage.bignum.add(a, b) would be similiar to (a + b).
 *
 * @param {sage.bignum.Convertable} a
 *        A bignumber.
 *
 * @param {sage.bignum.Convertable} b
 *        A bignumber.
 *
 * @return {sage.bignum.BigNumber}
 *         The resulting bignumber.
 */
sage.bignum.add = function(a, b) {
  a = sage.bignum.convert(a);
  b = sage.bignum.convert(b);
  return a.add(b);
};


/**
 * Subtracts two bignumbers.
 *
 *    EG.
 *       sage.bignum.subtract(a, b) would be similiar to (a - b).
 *
 * @param {sage.bignum.Convertable} a
 *        A bignumber.
 *
 * @param {sage.bignum.Convertable} b
 *        A bignumber.
 *
 * @return {sage.bignumb.BigNumber}
 *         The resulting bignumber.
 */
sage.bignum.subtract = function(a, b) {
  a = sage.bignum.convert(a);
  b = sage.bignum.convert(b);
  return a.subtract(b);
};


/**
 * Multiplies two bignumbers.
 *
 *    EG.
 *       sage.bignum.multiply(a, b) would be similiar to (a * b).
 *
 * @param {sage.bignum.Convertable} a
 *        A bignumber.
 *
 * @param {sage.bignum.Convertable} b
 *        A bignumber.
 *
 * @return {sage.bignumb.BigNumber}
 *         The resulting bignumber.
 */
sage.bignum.multiply = function(a, b) {
  a = sage.bignum.convert(a);
  b = sage.bignum.convert(b);
  return a.multiply(b);
};


/**
 * Divides two bignumbers.
 *
 *    EG.
 *       sage.bignum.devide(a, b) would be similiar to (a / b).
 *
 * @param {sage.bignum.Convertable} a
 *        A bignumber.
 *
 * @param {sage.bignum.Convertable} b
 *        A bignumber.
 *
 * @return {sage.bignumb.BigNumber}
 *         The resulting bignumber.
 */
sage.bignum.divide = function(a, b) {
  a = sage.bignum.convert(a);
  b = sage.bignum.convert(b);
  return a.divide(b);
};

