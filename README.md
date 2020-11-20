1. `npm i`
2. `npm run build:dev`

```
$ npm run build:dev

> @ build:dev /home/kieran/PhpstormProjects/babel-test
> webpack --config webpack.dev.cjs

[webpack-cli] Compilation finished
asset main.bundle.js 18.4 KiB [emitted] (name: main)
runtime modules 695 bytes 3 modules
cacheable modules 3.43 KiB
  ./src/page.js 1.84 KiB [built] [code generated]
  ./node_modules/@babel/runtime/helpers/classCallCheck.js 196 bytes [built] [code generated]
  ./node_modules/@babel/runtime/helpers/createClass.js 596 bytes [built] [code generated]
  ./node_modules/@babel/runtime/helpers/classPrivateFieldGet.js 342 bytes [built] [code generated]
  ./node_modules/@babel/runtime/helpers/classPrivateFieldSet.js 489 bytes [built] [code generated]

ERROR in ./src/page.js 1:0-37
Module not found: Error: Can't resolve 'core-js/modules/es.weak-set' in '/home/kieran/PhpstormProjects/babel-test/src'
Did you mean 'es.weak-set.js'?
BREAKING CHANGE: The request 'core-js/modules/es.weak-set' failed to resolve only because it was resolved as fully specified
(probably because the origin is a '*.mjs' file or a '*.js' file where the package.json contains '"type": "module"').
The extension in the request is mandatory for it to be fully specified.
Add the extension to the request.

webpack 5.6.0 compiled with 1 error in 750 ms
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! @ build:dev: `webpack --config webpack.dev.cjs`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the @ build:dev script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/kieran/.npm/_logs/2020-11-20T14_34_45_590Z-debug.log

```