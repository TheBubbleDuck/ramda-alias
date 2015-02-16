ramda-alias
=============

The alias temporary fix for a practical functional library for Javascript programmers.

Why ramda-alias?
----------
Because things keep changing and deprecating prior to the big 1.0.0 release. People are having issues with loss/replaced functions without warning. Here is a decorator for the aliases. 

Add to your package.json as ramda-alias 
```
"ramda-alias" : git+ssh://git@github.com:Aourin/ramda-alias.git
```
This is temporary until I can get an npm package released.

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
