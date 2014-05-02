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
--- development.json
--- production.js
--- staging.json
--- test.js
```

e.g. ```NODE_ENV=development``` would result in a merge of ```all```'s exports object and the ```development``` object.
i.e. you can use module.exports or a JSON file.

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
