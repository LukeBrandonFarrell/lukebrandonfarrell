---
path: /javascript-switch-alt
date: '2018-06-25'
title: A replacement for switch statements in Javascript
excerpt: >-
  Switch statements are pretty ugly... here is an alternative to provide
  switch-like functionality using object literals.
feature: "./feature.jpg"
author: Luke Brandon Farrell
tags:
  - z
type: article
external: null  
---

This is the one!

In Javascript, one can replace a switch statement using object literal lookups like so:

```javascript
  return {
  0 : () => setDefaultAddress(),
  1 : () => editAddress(),
  2 : () => deleteAddress(),
  }[index]();
```
Instead of:


```javascript
switch (index) {
  case 1:
    setDefaultAddress()  
  break;

  case 2:
    editAddress()      
  break;

  case 3:
    deleteAddress()    
  break;
}
```

Much more readable, don’t you think?


<small>Feature Photo by [Hannah Troupe](https://unsplash.com/@htroupe) on Unsplash.</small>
