'use strict';

const slice = Array.prototype.slice;
const clientWrapper = require('laic').laic
  .getNamespace('sat5-xmlrpc').get('clientWrapper');

module.exports = {
  disableAccess: function disableAccess(key, chanLabel, orgId) {
    return clientWrapper('channel.org.disableAccess', slice.call(arguments, 0));
  },

  enableAccess: function enableAccess(key, chanLabel, orgId) {
    return clientWrapper('channel.org.enableAccess', slice.call(arguments, 0));
  },

  list: function list(key, chanLabel) {
    return clientWrapper('channel.org.list', slice.call(arguments, 0));
  }
};