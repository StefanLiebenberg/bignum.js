

/**
 * @author stefan@artspace44.com (Stefan Liebenberg)
 * @fileoverview Exports Bignumber functions to a standalone API,.
 */
goog.provide('sage.bignumb.EXPORT');
goog.require('sage.bignum');
goog.require('sage.bignum.BigNumber');

goog.exportSymbol('BigNumber', sage.bignum.BigNumber);
goog.exportSymbol('BigNumber.add', sage.bignum.add);
goog.exportSymbol('BigNumber.subtract', sage.bignum.subtract);
goog.exportSymbol('BigNumber.multiply', sage.bignum.multiply);
goog.exportSymbol('BigNumber.divide', sage.bignum.divide);
