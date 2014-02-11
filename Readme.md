
This package makes loading project libs easier.

## Install

In package.json,

```"lib": "https://github.com/wookets/node-lib/0.2.0"```

## Usage

```
// assuming this exists in {project_root}/lib/session-manager.js
var sessionManager = require('lib')('session-manager');
sessionManager();
```

* if no arguments are passed in, it will look for an index.js or index.coffee in the /lib folder.