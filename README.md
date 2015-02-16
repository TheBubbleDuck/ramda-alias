ramda-alias
=============

The alias temporary fix for a practical functional library for Javascript programmers.

Why ramda-alias?
----------
Because things keep changing and deprecating prior to the big 1.0.0 release. People are having issues with loss/replaced functions without warning. Here is a decorator for the aliases. 

Installation
------------

To use with node:

```bash
$ npm install ramda-alias
```

Then in the console:

```javascript
var ramda = require('ramda');
require('ramda-alias')(ramda);
```
