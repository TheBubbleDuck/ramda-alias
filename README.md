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

If a CommonJS environment isn't detected, the module will attempt to alias the methods on a global Ramda instance (on window.R).


Current Alias Map
```javascript
var ALIAS_MAP = {
    foldl : 'reduce',
    foldr : 'reduceRight',
    foldlIndexed : 'reduceIndexed',
    foldrIndexed : 'reduceRightIndexed',
    lPartial  : 'partial',
    mapAccumL : 'mapAccum',
    mapAccumR : 'mapAccumRight',
    mixin     : 'merge',
    pCompose  : 'composeP',
    pPipe     : 'pipeP',
    rPartial  : 'partialRight',
    scanl     : 'scan',
    unfoldr   : 'unfold'
  };
```
