'use strict';

const slice = Array.prototype.slice;
const clientWrapper = require('laic').laic
  .getNamespace('sat5-xmlrpc').get('clientWrapper');

module.exports = {
  deleteXccdfScan: function deleteXccdfScan(key, scanId) {
    return clientWrapper(
      'system.scap.deleteXccdfScan',
      slice.call(arguments, 0)
    );
  },

  getXccdfScanDetails: function getXccdfScanDetails(key, scanId) {
    return clientWrapper(
      'system.scap.getXccdfScanDetails',
      slice.call(arguments, 0)
    );
  },

  getXccdfScanRuleResults: function getXccdfScanRuleResults(key, scanId) {
    return clientWrapper(
      'system.scap.getXccdfScanRuleResults',
      slice.call(arguments, 0)
    );
  },

  listXccdfScans: function listXccdfScans(key, serverId) {
    return clientWrapper(
      'system.scap.listXccdfScans',
      slice.call(arguments, 0)
    );
  },

  scheduleXccdfScan: function scheduleXccdfScan(key, serverIds, path, params) {
    return clientWrapper(
      'system.scap.scheduleXccdfScan',
      slice.call(arguments, 0)
    );
  }
};