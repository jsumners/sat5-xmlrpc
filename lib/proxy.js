'use strict';

const slice = Array.prototype.slice;
const clientWrapper = require('laic').laic
  .getNamespace('sat5-xmlrpc').get('clientWrapper');

module.exports = {
  activateProxy: function foo(systemId, version) {
    return clientWrapper('proxy.activateProxy', slice.call(arguments, 0));
  },

  createMonitoringScout: function createMonitoringScout(systemId) {
    return clientWrapper(
      'proxy.createMonitoringScout',
      slice.call(arguments, 0)
    );
  },

  deactivateProxy: function deactivateProxy(systemId) {
    return clientWrapper('proxy.deactivateProxy', slice.call(arguments, 0));
  },

  isProxy: function isProxy(systemId) {
    return clientWrapper('proxy.isProxy', slice.call(arguments, 0));
  },

  listAvailableProxyChannels: function listAvailableProxyChannels(systemId) {
    return clientWrapper(
      'proxy.listAvailableProxyChannels',
      slice.call(arguments, 0)
    );
  }
};