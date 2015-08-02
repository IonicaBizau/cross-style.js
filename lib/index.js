// Dependencies
var UFirst = require("ucfirst");

/**
 * CrossStyle
 * Returns an array of cross-browser CSS properties for given input.
 *
 * @name CrossStyle
 * @function
 * @param {String} input The CSS property (e.g. `"transform"` or `"transformOrigin"`).
 * @return {Array} An array of strings representing the cross-browser CSS properties for the given input.
 */
function CrossStyle(input) {
    var uInput = UFirst(input);
    return [
        "webkit" + uInput
      , "moz" + uInput
      , "ms" + uInput
      , "o" + uInput
      , input
    ]
}

module.exports = CrossStyle;
