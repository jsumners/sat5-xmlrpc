'use strict';

const slice = Array.prototype.slice;
const clientWrapper = require('laic').laic
  .getNamespace('sat5-xmlrpc').get('clientWrapper');

module.exports = {
  foo: function foo(key) {
    return clientWrapper('foo.foo', slice.call(arguments, 0));
  }
};