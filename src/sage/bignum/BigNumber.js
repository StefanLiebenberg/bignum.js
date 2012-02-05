

/**
 * @author stefan@artspace44.com (Stefan Liebenberg)
 * @fileoverview Exports Bignumber functions to a standalone API,.
 */
goog.provide('sage.bignum.BigNumber');
goog.require('sage.bignum.type');



/**
 * @constructor
 *
 * @param {sage.bignum.type.Convertable} number
 *        The initial value.
 */
sage.bignum.BigNumber = function(number) {
  this.value_ = number;
};


/**
 * @private
 * @type {sage.bignum.type.Convertable}
 */
sage.bignum.BigNumber.prototype.value_;


/**
 * @param {sage.bignum.BigNumber} number
 *        A big number.
 * @return {sage.bignum.BigNumber}
 *        A big number.
 */
sage.bignum.BigNumber.prototype.add = function(number) {
  return this.value_ + number;
};


/**
 * @param {sage.bignum.BigNumber} number
 *        A big number.
 * @return {sage.bignum.BigNumber}
 *        A big number.
 */
sage.bignum.BigNumber.prototype.subtract = function(number) {
  return this.value_ - number;
};


/**
 * @param {sage.bignum.BigNumber} number
 *        A big number.
 * @return {sage.bignum.BigNumber}
 *        A big number.
 */
sage.bignum.BigNumber.prototype.mulitply = function(number) {
  return this.value_ * number;
};


/**
 * @param {sage.bignum.BigNumber} number
 *        A big number.
 * @return {sage.bignum.BigNumber}
 *        A big number.
 */
sage.bignum.BigNumber.prototype.divide = function(number) {
  return this.value_ / number;
};
