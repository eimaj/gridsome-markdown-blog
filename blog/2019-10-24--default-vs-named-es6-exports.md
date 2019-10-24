---
title: 'default vs. named ES6 exports'
date: 2019-10-24 00:00:00
description: ""
slug: default-vs-named-es6-exports
tags: javascript
length: 2 minute read
---

How do you use `export` in your files?

Our goal here is to only import what we are going to use using a destructured `import`.

The reason is that with [Webpack's tree shaking](https://webpack.js.org/guides/tree-shaking/), any unused `exports` will never be compiled.

## Export everything as an named object

``` javascript
// source.js
const a = () => {};
const b = () => {};
const c = () => {};

export const allTheThings {
  a,
  b,
  c,
};

// destination.js
import { a, b } from 'source'; // Nope!
```

This doesn't work because the object is exported as a whole and doesn't satisfy our tree shaking requirement. You also can't destructure named exports with `import` like that.

To successfully import and destructure `allTheThings` you would do this:

``` javascript
// destination.js
import { allTheThings } from 'source';

const { a, b } = allTheThings;
```

## Export the everything object as default

``` javascript
// source.js
const a = () => {};
const b = () => {};
const c = () => {};

export default {
  a,
  b,
  c,
};

// destination.js
import { a, b } from 'source'; // Nope!
```

This also doesn't work because you cannot destructure a default export. This makes sense though because this pattern is the same as the first without the name. We're importing everything as an object, but we have to assign our own name to it.

To successfully `import` and destructure an `export default` you would do this:

``` javascript
// destination.js
import allTheThings from 'source';

const { a, b } = allTheThings;
```

## Export everything as named exports

``` javascript
// source.js
export const a = () => {};
export const b = () => {};
export const c = () => {};

// destination.js
import { a, b } from 'source'; // Yup!
```

Here we are exporting everything separately as named exports.

In the first two examples we're creating our methods, building our object, then destructuring that object.

In this example we're skipping two of those step and exporting things where they are defined. Then, from `destination.js` we can just `import` each method as required. Just like assigning something as a variable, we have access to each individually. This is how it clicked for me.
