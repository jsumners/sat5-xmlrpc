'use strict';

const slice = Array.prototype.slice;
const clientWrapper = require('laic').laic
  .getNamespace('sat5-xmlrpc').get('clientWrapper');

module.exports = {
  addConfigurationDeployment: function addConfDeply(key, chain, sysId, revIds) {
    return clientWrapper(
      'actionchain.addConfigurationDeployment',
      slice.call(arguments, 0)
    );
  },

  addPackageInstall: function addPackageInstall(key, sysId, packageIds, chain) {
    return clientWrapper(
      'actionchain.addPackageInstall',
      slice.call(arguments, 0)
    );
  },

  addPackageRemoval: function addPackageRemoval(key, sysId, packageIds, chain) {
    return clientWrapper(
      'actionchain.addPackageRemoval',
      slice.call(arguments, 0)
    );
  },

  addPackageUpgrade: function addPackageUpgrade(key, sysId, packageIds, chain) {
    return clientWrapper(
      'actionchain.addPackageUpgrade',
      slice.call(arguments, 0)
    );
  },

  addPackageVerify: function addPackageVerify(key, sysId, packageIds, chain) {
    return clientWrapper(
      'actionchain.addPackageVerify',
      slice.call(arguments, 0)
    );
  },

  addScriptRun: function addScriptRun(key, sysId, chain, uid, gid, timeout, script) {
    return clientWrapper('actionchain.addScriptRun', slice.call(arguments, 0));
  },

  addSystemReboot: function addSystemReboot(key, sysId, chain) {
    return clientWrapper(
      'actionchain.addSystemReboot',
      slice.call(arguments, 0)
    );
  },

  createChain: function createChain(key, chain) {
    return clientWrapper('actionchain.createChain', slice.call(arguments, 0));
  },

  deleteChain: function deleteChain(key, chain) {
    return clientWrapper('actionchain.deleteChain', slice.call(arguments, 0));
  },

  listChainActions: function listChainActions(key, chain) {
    return clientWrapper(
      'actionchain.listChainActions',
      slice.call(arguments, 0)
    );
  },

  listChains: function listChains(key) {
    return clientWrapper('actionchain.listChains', [key]);
  },

  removeAction: function removeAction(key, chain, actionId) {
    return clientWrapper('actionchain.removeAction', slice.call(arguments, 0));
  },

  renameChain: function renameChain(key, curLabel, newLabel) {
    return clientWrapper('actionchain.renameChain', slice.call(arguments, 0));
  },

  scheduleChain: function scheduleChain(key, chain, date) {
    return clientWrapper('actionchain.scheduleChain', slice.call(arguments, 0));
  }
};