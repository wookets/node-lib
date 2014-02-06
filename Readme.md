
# lib

This package makes loading project libs easier.

## Install

In package.json, you can do...

```"lib": "https://github.com/wookets/node-lib/0.1.0"```

## Usage

```
// assuming this exists in {project_root}/lib/sessionManager.js
var lib = require('lib');
lib.sessionManager();
```

If you use harmony destructuring or coffeescript, you can more easily do...

```
{sessionManager} = require('lib');
```

Assuming your {project_root}/lib/index.js is...

```
module.exports = {
  sessionManager: require('./sessionManager');
}
```
