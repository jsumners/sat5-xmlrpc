'use strict';

const slice = Array.prototype.slice;
const clientWrapper = require('laic').laic
  .getNamespace('sat5-xmlrpc').get('clientWrapper');

module.exports = {
  createOrUpdate: function createOrUpdate(key, name, contents) {
    return clientWrapper(
      'kickstart.snippet.createOrUpdate',
      slice.call(arguments, 0)
    );
  },

  delete: function del(key, name) {
    return clientWrapper('kickstart.snippet.delete', slice.call(arguments, 0));
  },

  listAll: function listAll(key) {
    return clientWrapper('kickstart.snippet.listAll', [key]);
  },

  listCustom: function listCustom(key) {
    return clientWrapper('kickstart.snippet.listCustom', [key]);
  },

  listDefault: function listDefault(key) {
    return clientWrapper('kickstart.snippet.listDefault', [key]);
  }
};