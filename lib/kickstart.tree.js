'use strict';

const slice = Array.prototype.slice;
const clientWrapper = require('laic').laic
  .getNamespace('sat5-xmlrpc').get('clientWrapper');

module.exports = {
  create: function authLogin(key, label, path, chanLabel, type) {
    return clientWrapper('kickstart.tree.create', slice.call(arguments, 0));
  },

  delete: function del(key, label) {
    return clientWrapper('kickstart.tree.delete', slice.call(arguments, 0));
  },

  deleteTreeAndProfiles: function deleteTreeAndProfiles(key, label) {
    return clientWrapper(
      'kickstart.tree.deleteTreeAndProfiles',
      slice.call(arguments, 0)
    );
  },

  getDetails: function getDetails(key, label) {
    return clientWrapper(
      'kickstart.tree.getDetails',
      slice.call(arguments, 0)
    );
  },

  list: function list(key, label) {
    return clientWrapper('kickstart.tree.list', slice.call(arguments, 0));
  },

  listInstallTypes: function listInstallTypes(key) {
    return clientWrapper('kickstart.tree.listInstallTypes', [key]);
  },

  rename: function rename(key, oldLabel, newLabel) {
    return clientWrapper('kickstart.tree.rename', slice.call(arguments, 0));
  },

  update: function update(key, label, path, chanLabel, type) {
    return clientWrapper('kickstart.tree.update', slice.call(arguments, 0));
  }
};