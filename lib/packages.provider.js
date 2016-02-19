'use strict';

const slice = Array.prototype.slice;
const clientWrapper = require('laic').laic
  .getNamespace('sat5-xmlrpc').get('clientWrapper');

module.exports = {
  associateKey: function associateKey(sessKey, name, key, type) {
    return clientWrapper(
      'packages.provider.associateKey', slice.call(arguments, 0)
    );
  },

  list: function list(key) {
    return clientWrapper('packages.provider.list', [key]);
  },

  listKeys: function listKeys(key, providerName) {
    return clientWrapper(
      'packages.provider.listKeys',
      slice.call(arguments, 0)
    );
  }
};