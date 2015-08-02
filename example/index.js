// Dependencies
var CrossStyle = require("../lib");

console.log(CrossStyle("transform"));
// =>
// [ 'webkitTransform',
//   'mozTransform',
//   'msTransform',
//   'oTransform',
//   'transform' ]

console.log(CrossStyle("transformOrigin"));
// =>
// [ 'webkitTransformOrigin',
//   'mozTransformOrigin',
//   'msTransformOrigin',
//   'oTransformOrigin',
//   'transformOrigin' ]
