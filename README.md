## figr

Autobootstrap your config.  Looks for $CWD/config and loads the config files into a config object.

# Installation

```bash
npm install figr
```

# File Tree

```
- /config
--- all.js
--- development.js
--- production.js
--- staging.js
--- test.js
```

e.g. ```NODE_ENV=development``` would result in a merge of ```all``` and ```development``` exports.

# API

```javascript
var figr = require('figr');
var config = figr();
```

You can also pass in a configurable object (i.e. supports #get and #set)

e.g.

```javascript
var express = require('express'),
    app = express(),
    figr = require('figr'),
    config = figr(app);

console.log(config.someProp == app.get('someProp'); //true
```
