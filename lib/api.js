'use strict';

const slice = Array.prototype.slice;
const clientWrapper = require('laic').laic
  .getNamespace('sat5-xmlrpc').get('clientWrapper');

module.exports = {
  getApiCallList: function getApiCallList(key) {
    return clientWrapper('api.getApiCallList', [key]);
  },

  getApiNamespaceCallList: function getApiNamespaceCallList(key, namespace) {
    return clientWrapper(
      'api.getApiNamespaceCallList',
      slice.call(arguments, 0)
    );
  },

  getApiNamespaces: function getApiNamespaces(key) {
    return clientWrapper('api.getApiNamespaces', [key]);
  },

  getVersion: function getVersion() {
    return clientWrapper('api.getVersion');
  },

  systemVersion: function systemVersion() {
    return clientWrapper('api.systemVersion');
  }
};