'use strict';

const slice = Array.prototype.slice;
const clientWrapper = require('laic').laic
  .getNamespace('sat5-xmlrpc').get('clientWrapper');

module.exports = {
  create: function create(key, slave, enabled, allowAllOrgs) {
    return clientWrapper('sync.slave.create', slice.call(arguments, 0));
  },

  delete: function del(key, id) {
    return clientWrapper('sync.slave.delete', slice.call(arguments, 0));
  },

  getAllowedOrgs: function getAllowedOrgs(key, id) {
    return clientWrapper(
      'sync.slave.getAllowedOrgs',
      slice.call(arguments, 0)
    );
  },

  getSlave: function getSlave(key, id) {
    return clientWrapper('sync.slave.getSlave', slice.call(arguments, 0));
  },

  getSlaveByName: function getSlaveByName(key, fqdn) {
    return clientWrapper(
      'sync.slave.getSlaveByName',
      slice.call(arguments, 0)
    );
  },

  getSlaves: function getSlaves(key) {
    return clientWrapper('sync.slave.getSlaves', [key]);
  },

  setAllowedOrgs: function setAllowedOrgs(key, id, orgs) {
    return clientWrapper(
      'sync.slave.setAllowedOrgs',
      slice.call(arguments, 0)
    );
  },

  update: function update(key, id, slave, enabled, allowAllOrgs) {
    return clientWrapper('sync.slave.update', slice.call(arguments, 0));
  }
};