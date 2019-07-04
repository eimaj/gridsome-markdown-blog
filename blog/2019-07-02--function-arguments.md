---
title: 'Passing arguments to a function'
date: 2019-07-02 00:00:00
description: "I've been exploring two different ways of passing arguments to a function. Here's what I've found."
slug: function-arguments
tags: javascript
length: 8 minute read
---

I've been exploring two different ways of passing arguments to a function and I've come to a conclusion.

```
// Passing arguments as an object:
const fnWithObject = ({ email, name }) =>
  `Hello ${name}, is your email ${email}?`

// Passing arguments individually:
const fnWithArgs = (email, name) =>
  `Hello ${name}, is your email ${email}?`
```

## tl;dr

I prefer using individual arguments for three reason.

1. You the ability to type check each argument,
2. You can set defaults and,
3. You will understand what is happening when the function is invoked (self documentation).

I think in most cases the benefits of individual arguments outweigh the convenience of object destructuring.

## Passing arguments as an object

Accepting a single object as the argument in a function can be convenient. It allows you to extract only the params you want to use from the object. It also doesn't matter what order the arguments are set in the object because object properties are unordered.

In the `fnWithObject` method above, we could pass in an entire `user` object, then we can specify only the pieces of the object we need.

```
const user = {
  id: 42,
  name: 'Jamie',
  email: 'jamie@email.com,
  role: 'dad',
  potato: 'scalloped',
  numberOfFriends: 3,
};

fnWithObject(user);
=> `Hello Jamie, is your email jamie@email.com?`
```

Some benefits of the object approach:

- Object destructuring.
- Pass arguments in any order.
- Only extract the arguments you need.

Some drawbacks.

- It is not obvious what the function is actually doing when you invoke it.
- You can't set defaults.
- If the object you pass in doesn't have the value it will be `undefined`.
- You can't type check each argument.

## Passing arguments individually

Accepting individual arguments gives you a little more control over the input you receive. The biggest benefits I see with individual arguments are that you can check the type of each and set defaults.

```
// Same function with types and defaults:

const fnWithArgs = (
  email: Email = 'not set',
  name: String = 'Anonymous'
) => `Hello ${name}, is your email ${email}?`
```

So, for `fnWithArgs` you would do the following:

```
const user = {
  id: 42,
  name: 'Jamie',
  email: 'jamie@email.com,
  role: 'dad',
  potato: 'scalloped',
  numberOfFriends: 3,
};
const {email, name} = user;

fnWithObject(email, name);
=> `Hello Jamie, is your email jamie@email.com?`
```

And invoking the same function making use of the set defaults:

```
fnWithObject();
=> `Hello Anonymous, is your email not set?`
```

Some benefits of the this approach:

- It is self documenting and you can see what is happening when it is invoked.
- You can set defaults.
- You can type check each argument.
- You can guarentee what you are getting.

Some drawbacks.

- You have to pass arguments in a set order.
