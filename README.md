# cross-style [![Support this project][donate-now]][paypal-donations]

Get cross-browser CSS properties for a given input.

## Installation

```sh
$ npm i -g cross-style
```

## Example

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

## Documentation

### `CrossStyle(input)`
Returns an array of cross-browser CSS properties for given input.

#### Params
- **String** `input`: The CSS property (e.g. `"transform"` or `"transformOrigin"`).

#### Return
- **Array** An array of strings representing the cross-browser CSS properties for the given input.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

 - [`crossy`](https://github.com/IonicaBizau/crossy.js)

 - [`css-cross-transform`](https://github.com/IonicaBizau/css.cross-transform.js)

## License

[KINDLY][license] © [Ionică Bizău][website]

[license]: http://ionicabizau.github.io/kindly-license/?author=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica@gmail.com%3E&year=2015

[website]: http://ionicabizau.net
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md