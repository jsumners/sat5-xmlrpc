'use strict';

const slice = Array.prototype.slice;
const clientWrapper = require('laic').laic
  .getNamespace('sat5-xmlrpc').get('clientWrapper');

module.exports = {
  deviceDescription: function deviceDescription(key, term) {
    return clientWrapper(
      'system.search.deviceDescription',
      slice.call(arguments, 0)
    );
  },

  deviceDriver: function deviceDriver(key, term) {
    return clientWrapper(
      'system.search.deviceDriver',
      slice.call(arguments, 0)
    );
  },

  deviceId: function deviceId(key, term) {
    return clientWrapper(
      'system.search.deviceId',
      slice.call(arguments, 0)
    );
  },

  deviceVendorId: function deviceVendorId(key, term) {
    return clientWrapper(
      'system.search.deviceVendorId',
      slice.call(arguments, 0)
    );
  },

  hostname: function hostname(key, term) {
    return clientWrapper(
      'system.search.hostname',
      slice.call(arguments, 0)
    );
  },

  ip: function ip(key, term) {
    return clientWrapper('system.search.ip', slice.call(arguments, 0));
  },

  nameAndDescription: function nameAndDescription(key, term) {
    return clientWrapper(
      'system.search.nameAndDescription',
      slice.call(arguments, 0)
    );
  },

  uuid: function uuid(key, term) {
    return clientWrapper('system.search.uuid', slice.call(arguments, 0));
  }
};