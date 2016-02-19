'use strict';

const slice = Array.prototype.slice;
const clientWrapper = require('laic').laic
  .getNamespace('sat5-xmlrpc').get('clientWrapper');

module.exports = {
  createKey: function createKey(sessKey, keyLabel, keyDescription) {
    return clientWrapper(
      'system.custominfo.createKey',
      slice.call(arguments, 0)
    );
  },

  deleteKey: function deleteKey(sessKey, keyLabel) {
    return clientWrapper(
      'system.custominfo.deleteKey',
      slice.call(arguments, 0)
    );
  },

  listAllKeys: function listAllKeys(sessKey) {
    return clientWrapper('system.custominfo.listAllKeys', [sessKey]);
  },

  updateKey: function updateKey(sessKey, keyLabel, keyDescription) {
    return clientWrapper(
      'system.custominfo.updateKey',
      slice.call(arguments, 0)
    );
  }
};