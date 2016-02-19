'use strict';

const slice = Array.prototype.slice;
const clientWrapper = require('laic').laic
  .getNamespace('sat5-xmlrpc').get('clientWrapper');

module.exports = {
  appendToSoftwareList: function appendToSoftwareList(key, label, list) {
    return clientWrapper(
      'kickstart.profile.software.appendToSoftwareList',
      slice.call(arguments, 0)
    );
  },

  getSoftwareDetails: function getSoftwareDetails(key, label) {
    return clientWrapper(
      'kickstart.profile.software.getSoftwareDetails',
      slice.call(arguments, 0)
    );
  },

  getSoftwareList: function getSoftwareList(key, label) {
    return clientWrapper(
      'kickstart.profile.software.getSoftwareList',
      slice.call(arguments, 0)
    );
  },

  setSoftwareDetails: function setSoftwareDetails(key, label, details) {
    return clientWrapper(
      'kickstart.profile.software.setSoftwareDetails',
      slice.call(arguments, 0)
    );
  },

  setSoftwareList: function setSoftwareList(key, label, list) {
    return clientWrapper(
      'kickstart.profile.software.setSoftwareList',
      slice.call(arguments, 0)
    );
  }
};