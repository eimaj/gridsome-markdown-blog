---
title: 'What is the `Arguments` object?'
date: 2019-09-12 00:00:00
description: ""
slug: what-is-the-arguments-object
tags: javascript
length: 2 minute read
---

At my day job we have been slowly linting a legacy project. One of the rules that ESLint enforces is [prefer-rest-params].

This is a pretty reasonable rule. But we ran into some issues in some of the legacy code which resulted in a little research on my part. Here's what I found.

## The `Arguments` object?

[`arguments`] is an iterable object provided inside all ([non-arrow](#arrow-functions)) function. It is a catch-all for anything that was passed to your function. It has a `length`, but doesn't have the usual [`Array.prototype`] methods you might expect it to have.

What this means in practice is you will have to find other ways to interact with `arguments`.

Prior to ES6 and [`...rest` parameters] you might have used `arguments` in a situation where you don't know what was going to be sent to the function.

_**Aside:** There are some cases where I might consider this a code smell.. If you don't know what is going to be passed to your function you might want to look into it. On the other hand, sometimes the API you are working with is out of your control._ 🤷‍♂️

For example:

``` javascript
const argumentsFn = function() {
  console.log(arguments);
  console.log(arguments.length);
  console.log(arguments[1]);
  console.log(arguments[2]);
  // ... how many more?
}

argumentsFn('hello', 'there');
// The arguments object:
=> Arguments(2) ["hello", "there", callee: ƒ, Symbol(Symbol.iterator): ƒ]
// The length:
=> 2
// The first two arguments that were passed to the fn:
=> hello
=> there
```

If you wanted to then loop over the `arguments` you would have to do something like this:

``` javascript
const argumentsFn = function() {
  for(i = 0, i < arguments.length, i += 1) {
    console.log(arguments[i]);
  }
}

argumentsFn('hello', 'there');
=> hello
=> there
```

Now, what if you wanted to use [`filter`], [`reduce`], [`findIndex`] or any of the other iteration methods [`Array.prototype`] provides? You'll have to change `arguments` into an `Array` first:

``` javascript
const argumentsFn = function() {
  Object.keys(arguments)
    .forEach(key => console.log(arguments[key]));
}

argumentsFn('hello', 'there');
=> hello
=> there
```

## `...rest` to the rescue

With [`...rest` parameters] we can avoid the custom transformation (and appease ESLint!).

``` javascript
const argumentsFn = function(...args) {
  console.log(args);
}

argumentsFn('hello', 'there');
// Our arguments in Array form:
=> ["hello", "there"]
```

But you can also name the first argument and catch everything else in a `...rest` Array:

``` javascript
const argumentsFn = function(greeting, ...args) {
  console.log(greeting);
  console.log(args);
}

argumentsFn('hello', 'there', 'human');
// The first named argument:
=> hello
// Everything that follows the first argument:
=> ["there", "human"]
```

## Arrow Functions

If you needed another reason to start using `...rest` params over `arguments`, `arguments` is not available inside an arrow function.

``` javascript
const argumentsFn = (greeting, ...args) => {
  console.log(arguments);
}

argumentsFn('hello', 'there');
=> Uncaught ReferenceError: arguments is not defined
```

## Bonus Round

This is more of a fun fact than a useful tip. There is _literally nothing_ stopping you from passing a millions of arguments to a function.

I'm not sure where you might want to use this knowledge in a real-world situation, but `...rest` params can handle it for you!

``` javascript
const argumentsFn = (...args) => {
  args.forEach(arg => console.log(arg));
}

argumentsFn('a', 'l', 'l', 't', 'h', 'e', 't', 'h', 'i', 'n', 'g', 's');
=> a
=> l
=> l
=> t
=> h
=> e
=> t
=> h
=> i
=> n
=> g
=> s
```

[`arguments`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
[prefer-rest-params]: https://eslint.org/docs/rules/prefer-rest-params
[`...rest` parameters]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
[`filter`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
[`reduce`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
[`findIndex`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
[`Array.prototype`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype
