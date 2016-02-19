'use strict';

const slice = Array.prototype.slice;
const clientWrapper = require('laic').laic
  .getNamespace('sat5-xmlrpc').get('clientWrapper');

module.exports = {
  addChildChannels: function addChildChannels(sessKey, key, channelLabels) {
    return clientWrapper(
      'activationkey.addChildChannels',
      slice.call(arguments, 0)
    );
  },

  addConfigChannels: function addConfChans(sessKey, keys, channelLables, addToTop) {
    return clientWrapper(
      'activationkey.addConfigChannels',
      slice.call(arguments, 0)
    );
  },

  addEntitlements: function addEntitlements(sessKey, key, entitlements) {
    return clientWrapper(
      'activationkey.addEntitlements',
      slice.call(arguments, 0)
    );
  },

  addPackages: function addPackages(sessKey, key, packages) {
    return clientWrapper(
      'activationkey.addPackages',
      slice.call(arguments, 0)
    );
  },

  addServerGroups: function addServerGroups(sessKey, key, groupIds) {
    return clientWrapper(
      'activationkey.addServerGroups',
      slice.call(arguments, 0)
    );
  },

  checkConfigDeployment: function checkConfigDeployment(sessKey, key) {
    return clientWrapper(
      'activationkey.checkConfigDeployment',
      slice.call(arguments, 0)
    );
  },

  clone: function clone(sessKey, key, description) {
    return clientWrapper('activationkey.clone', slice.call(arguments, 0));
  },

  create: function create(sessKey, key, desc, baseChanLable, limit, entitlements, uniDef) {
    return clientWrapper('activationkey.create', slice.call(arguments, 0));
  },

  delete: function del(sessKey, key) {
    return clientWrapper('activationkey.delete', slice.call(arguments, 0));
  },

  disableConfigDeployment: function disableConfigDeployment(sessKey, key) {
    return clientWrapper(
      'activationkey.disableConfigDeployment',
      slice.call(arguments, 0)
    );
  },

  enableConfigDeployment: function enableConfigDeployment(sessKey, key) {
    return clientWrapper(
      'activationkey.enableConfigDeployment',
      slice.call(arguments, 0)
    );
  },

  getDetails: function getDetails(sessKey, key) {
    return clientWrapper('activationkey.getDetails', slice.call(arguments, 0));
  },

  listActivatedSystems: function listActivatedSystems(sessKey, key) {
    return clientWrapper(
      'activationkey.listActivatedSystems',
      slice.call(arguments, 0));
  },

  listActivationKeys: function listActivationKeys(sessKey) {
    return clientWrapper('activationkey.listActivationKeys', [sessKey]);
  },

  listConfigChannels: function listConfigChannels(sessKey, key) {
    return clientWrapper(
      'activationkey.listConfigChannels', slice.call(arguments, 0)
    );
  },

  removeChildChannels: function removeChildChannels(sessKey, key, chanLables) {
    return clientWrapper(
      'activationkey.removeChildChannels',
      slice.call(arguments, 0)
    );
  },

  removeConfigChannels: function removeConfiChannels(sessKey, key, chanLables) {
    return clientWrapper(
      'activationkey.removeConfigChannels',
      slice.call(arguments, 0)
    );
  },

  removeEntitlements: function removeEntitlements(sessKey, key, lables) {
    return clientWrapper(
      'activationkey.removeEntitlements',
      slice.call(arguments, 0)
    );
  },

  removePackages: function removePackages(sessKey, key, packages) {
    return clientWrapper(
      'activationkey.removePackages',
      slice.call(arguments, 0)
    );
  },

  removeServerGroups: function removeServerGroups(sessKey, key, groupIds) {
    return clientWrapper(
      'activationkey.removeServerGroups',
      slice.call(arguments, 0)
    );
  },

  setConfigChannels: function setConfigChannels(sessKey, key, labels) {
    return clientWrapper(
      'activationkey.setConfigChannels',
      slice.call(arguments, 0)
    );
  },

  setDetails: function setDetails(sessKey, key, details) {
    return clientWrapper('activationkey.setDetails', slice.call(arguments, 0));
  }
};