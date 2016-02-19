'use strict';

const slice = Array.prototype.slice;
const clientWrapper = require('laic').laic
  .getNamespace('sat5-xmlrpc').get('clientWrapper');

module.exports = {
  addActivationKey: function addActivationKey(sessKey, label, key) {
    return clientWrapper(
      'kickstart.profile.keys.addActivationKey',
      slice.call(arguments, 0)
    );
  },

  getActivationKeys: function getActivationKeys(sessKey, label) {
    return clientWrapper(
      'kickstart.profile.keys.getActivationKeys',
      slice.call(arguments, 0)
    );
  },

  removeActivationKey: function removeActivationKey(sessKey, label, key) {
    return clientWrapper(
      'kickstart.profile.keys.removeActivationKey',
      slice.call(arguments, 0)
    );
  }
};