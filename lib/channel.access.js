'use strict';

const slice = Array.prototype.slice;
const clientWrapper = require('laic').laic
  .getNamespace('sat5-xmlrpc').get('clientWrapper');

module.exports = {
  disableUserRestrictions: function disableUserRestrictions(key, label) {
    return clientWrapper(
      'channel.access.disableUserRestrictions',
      slice.call(arguments, 0)
    );
  },

  enableUserRestrictions: function enableUserRestrictions(key, label) {
    return clientWrapper(
      'channel.access.enableUserRestrictions',
      slice.call(arguments, 0)
    );
  },

  getOrgSharing: function getOrgSharing(key, label) {
    return clientWrapper(
      'channel.access.getOrgSharing',
      slice.call(arguments, 0)
    );
  },

  setOrgSharing: function setOrgSharing(key, label, access) {
    return clientWrapper(
      'channel.access.setOrgSharing',
      slice.call(arguments, 0)
    );
  }
};