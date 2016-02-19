'use strict';

const slice = Array.prototype.slice;
const clientWrapper = require('laic').laic
  .getNamespace('sat5-xmlrpc').get('clientWrapper');

module.exports = {
  create: function create(key, description, type, content) {
    return clientWrapper('kickstart.keys.create', slice.call(arguments, 0));
  },

  delete: function del(key, description) {
    return clientWrapper('kickstart.keys.delete', slice.call(arguments, 0));
  },

  getDetails: function getDetails(key, description) {
    return clientWrapper('kickstart.keys.getDetails', slice.call(arguments, 0));
  },

  listAllKeys: function listAllKeys(key) {
    return clientWrapper('kickstart.keys.listAllKeys', [key]);
  },

  update: function update(key, description, type, content) {
    return clientWrapper('kickstart.keys.update', slice.call(arguments, 0));
  }
};