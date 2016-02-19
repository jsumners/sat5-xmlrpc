'use strict';

const slice = Array.prototype.slice;
const clientWrapper = require('laic').laic
  .getNamespace('sat5-xmlrpc').get('clientWrapper');

module.exports = {
  advanced: function advanced(key, query) {
    return clientWrapper('packages.search.advanced', slice.call(arguments, 0));
  },

  advancedWithActKey: function advancedWithActKey(key, query, actKey) {
    return clientWrapper(
      'packages.search.advancedWithActKey',
      slice.call(arguments, 0)
    );
  },

  advancedWithChannel: function advancedWithChannel(key, query, chanLabel) {
    return clientWrapper(
      'packages.search.advancedWithChannel',
      slice.call(arguments, 0)
    );
  },

  name: function name(key, name) {
    return clientWrapper('packages.search.name', slice.call(arguments, 0));
  },

  nameAndDescription: function nameAndDescription(key, query) {
    return clientWrapper(
      'packages.search.nameAndDescription',
      slice.call(arguments, 0)
    );
  },

  nameAndSummary: function nameAndSummary(key, query) {
    return clientWrapper(
      'packages.search.nameAndSummary',
      slice.call(arguments, 0)
    );
  }
};