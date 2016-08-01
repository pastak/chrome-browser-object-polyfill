# chrome-browser-object-polyfill

Polyfill `chrome` and `browser` object on Browser Extension.

You can use `chrome` or `browser` object on any browsers.

- Chrome has no `browser`
- MSEdge has no `chrome`

So it enables you to use `browser` keyword on Chrome or `chrome` keyword on MSEdge.

## Usage

```
$ npm install --save chrome-browser-object-polyfill
```

On first line of `content.js` or `background.js` or any scripts.

```
require('chrome-browser-object-polyfill')
```
