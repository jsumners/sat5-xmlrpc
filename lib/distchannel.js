'use strict';

const slice = Array.prototype.slice;
const clientWrapper = require('laic').laic
  .getNamespace('sat5-xmlrpc').get('clientWrapper');

module.exports = {
  listDefaultMaps: function listDefaultMaps(key) {
    return clientWrapper('distchannel.listDefaultMaps', [key]);
  },

  listMapsForOrg: function listMapsForOrg(key, orgId) {
    return clientWrapper(
      'distchannel.listMapsForOrg',
      slice.call(arguments, 0)
    );
  },

  setMapForOrg: function setMapForOrg(key, os, release, arch, chanLabel) {
    return clientWrapper(
      'distchannel.setMapForOrg',
      slice.call(arguments, 0)
    );
  }
};