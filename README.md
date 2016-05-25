
# cross-style

 [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/cross-style.svg)](https://www.npmjs.com/package/cross-style) [![Downloads](https://img.shields.io/npm/dt/cross-style.svg)](https://www.npmjs.com/package/cross-style) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Get cross-browser CSS properties for a given input.

## :cloud: Installation

```sh
$ npm i --save cross-style
```


## :clipboard: Example



```js
// Dependencies
var CrossStyle = require("cross-style");

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
```

## :memo: Documentation


### `CrossStyle(input)`
Returns an array of cross-browser CSS properties for given input.

#### Params
- **String** `input`: The CSS property (e.g. `"transform"` or `"transformOrigin"`).

#### Return
- **Array** An array of strings representing the cross-browser CSS properties for the given input.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`crossy`](https://github.com/IonicaBizau/crossy.js)—Modify cross-browser CSS properties with one JavaScript call.
 - [`css-cross-transform`](https://github.com/IonicaBizau/css.cross-transform.js)—Modify CSS transform properties with one JavaScript call.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
