'use strict';

const slice = Array.prototype.slice;
const clientWrapper = require('laic').laic
  .getNamespace('sat5-xmlrpc').get('clientWrapper');

module.exports = {
  getCertificateExpirationDate: function getCertExpDate(key) {
    return clientWrapper('satellite.getCertificateExpirationDate', [key]);
  },

  isMonitoringEnabled: function isMonitoringEnabled(key) {
    return clientWrapper('satellite.isMonitoringEnabled', [key]);
  },

  isMonitoringEnabledBySystemId: function isMonitoringEnabledBySystemId(sysId) {
    return clientWrapper('satellite.isMonitoringEnabledBySystemId', [sysId]);
  },

  listEntitlements: function listEntitlements(key) {
    return clientWrapper('satellite.listEntitlements', [key]);
  },

  listProxies: function listProxies(key) {
    return clientWrapper('satellite.listProxies', [key]);
  }
};