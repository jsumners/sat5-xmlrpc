'use strict';

const slice = Array.prototype.slice;
const clientWrapper = require('laic').laic
  .getNamespace('sat5-xmlrpc').get('clientWrapper');

module.exports = {
  addToMaster: function addToMaster(key, id, details) {
    return clientWrapper('sync.master.addToMaster', slice.call(arguments, 0));
  },

  create: function create(key, label) {
    return clientWrapper('sync.master.create', slice.call(arguments, 0));
  },

  delete: function del(key, id) {
    return clientWrapper('sync.master.delete', slice.call(arguments, 0));
  },

  getDefaultMaster: function getDefaultMaster(key) {
    return clientWrapper('sync.master.getDefaultMaster', [key]);
  },

  getMaster: function getMaster(key, id) {
    return clientWrapper('sync.master.getMaster', slice.call(arguments, 0));
  },

  getMasterByLabel: function getMasterByLabel(key, label) {
    return clientWrapper(
      'sync.master.getMasterByLabel',
      slice.call(arguments, 0)
    );
  },

  getMasterOrgs: function getMasterOrgs(key, id) {
    return clientWrapper(
      'sync.master.getMasterOrgs',
      slice.call(arguments, 0)
    );
  },

  getMasters: function getMasters(key) {
    return clientWrapper('sync.master.getMasters', [key]);
  },

  makeDefault: function makeDefault(key, id) {
    return clientWrapper('sync.master.makeDefault', slice.call(arguments, 0));
  },

  mapToLocal: function mapToLocal(key, masterId, masterOrgId, localOrgId) {
    return clientWrapper('sync.master.mapToLocal', slice.call(arguments, 0));
  },

  setCaCert: function setCaCert(key, id, certName) {
    return clientWrapper('sync.master.setCaCert', slice.call(arguments, 0));
  },

  setMasterOrgs: function setMasterOrgs(key, id, details) {
    return clientWrapper(
      'sync.master.setMasterOrgs',
      slice.call(arguments, 0)
    );
  },

  unsetDefaultMaster: function unsetDefaultMaster(key) {
    return clientWrapper('sync.master.unsetDefaultMaster', [key]);
  },

  update: function update(key, id, label) {
    return clientWrapper('sync.master.update', slice.call(arguments, 0));
  }
};