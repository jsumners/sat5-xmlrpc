'use strict';

const slice = Array.prototype.slice;
const clientWrapper = require('laic').laic
  .getNamespace('sat5-xmlrpc').get('clientWrapper');

module.exports = {
  addIpRange: function addIpRange(key, label, min, max) {
    return clientWrapper(
      'kickstart.profile.addIpRange',
      slice.call(arguments, 0)
    );
  },

  addScript: function addScript(key, ksLabel, name, contents, interpreter, type, chroot) {
    return clientWrapper(
      'kickstart.profile.addScript', slice.call(arguments, 0)
    );
  },

  compareActivationKeys: function compareActivationKeys(key, label1, label2) {
    return clientWrapper(
      'kickstart.profile.compareActivationKeys',
      slice.call(arguments, 0)
    );
  },

  compareAdvancedOptions: function compareAdvancedOptions(key, label1, label2) {
    return clientWrapper(
      'kickstart.profile.compareAdvancedOptions',
      slice.call(arguments, 0)
    );
  },

  comparePackages: function comparePackages(key, label1, label2) {
    return clientWrapper(
      'kickstart.profile.comparePackages',
      slice.call(arguments, 0)
    );
  },

  downloadKickstart: function downloadKickstart(key, label, host) {
    return clientWrapper(
      'kickstart.profile.downloadKickstart',
      slice.call(arguments, 0)
    );
  },

  downloadRenderedKickstart: function downloadRenderedKickstart(key, label) {
    return clientWrapper(
      'kickstart.profile.downloadRenderedKickstart',
      slice.call(arguments, 0)
    );
  },

  getAdvancedOptions: function getAdvancedOptions(key, label) {
    return clientWrapper(
      'kickstart.profile.getAdvancedOptions',
      slice.call(arguments, 0)
    );
  },

  getAvailableRepositories: function getAvailableRepositories(key, label) {
    return clientWrapper(
      'kickstart.profile.getAvailableRepositories',
      slice.call(arguments, 0)
    );
  },

  getCfgPreservation: function getCfgPreservation(key, label) {
    return clientWrapper(
      'kickstart.profile.getCfgPreservation',
      slice.call(arguments, 0)
    );
  },

  getChildChannels: function getChildChannels(key, label) {
    return clientWrapper(
      'kickstart.profile.getChildChannels',
      slice.call(arguments, 0)
    );
  },

  getCustomOptions: function getCustomOptions(key, label) {
    return clientWrapper(
      'kickstart.profile.getCustomOptions',
      slice.call(arguments, 0)
    );
  },

  getKickstartTree: function getKickstartTree(key, label) {
    return clientWrapper(
      'kickstart.profile.getKickstartTree',
      slice.call(arguments, 0)
    );
  },

  getRepositories: function getRepositories(key, label) {
    return clientWrapper(
      'kickstart.profile.getRepositories',
      slice.call(arguments, 0)
    );
  },

  getUpdateType: function getUpdateType(key, label) {
    return clientWrapper(
      'kickstart.profile.getUpdateType',
      slice.call(arguments, 0)
    );
  },

  getVariables: function getVariables(key, label) {
    return clientWrapper(
      'kickstart.profile.getVariables',
      slice.call(arguments, 0)
    );
  },

  getVirtualizationType: function getVirtualizationType(key, label) {
    return clientWrapper(
      'kickstart.profile.getVirtualizationType',
      slice.call(arguments, 0)
    );
  },

  listIpRanges: function listIpRanges(key, label) {
    return clientWrapper(
      'kickstart.profile.listIpRanges',
      slice.call(arguments, 0)
    );
  },

  listScripts: function listScripts(key, label) {
    return clientWrapper(
      'kickstart.profile.listScripts',
      slice.call(arguments, 0)
    );
  },

  orderScripts: function orderScripts(key, label, preIds, postIds, regIds) {
    return clientWrapper(
      'kickstart.profile.orderScripts',
      slice.call(arguments, 0)
    );
  },

  removeIpRange: function removeIpRange(key, label, ipAddress) {
    return clientWrapper(
      'kickstart.profile.removeIpRange',
      slice.call(arguments, 0)
    );
  },

  removeScript: function removeScript(key, label, scriptId) {
    return clientWrapper(
      'kickstart.profile.removeScript',
      slice.call(arguments, 0)
    );
  },

  setAdvancedOptions: function setAdvancedOptions(key, label, options) {
    return clientWrapper(
      'kickstart.profile.setAdvancedOptions',
      slice.call(arguments, 0)
    );
  },

  setCfgPreservation: function setCfgPreservation(key, label, preserve) {
    return clientWrapper(
      'kickstart.profile.setCfgPreservation',
      slice.call(arguments, 0)
    );
  },

  setChildChannels: function setChildChannels(key, label, channels) {
    return clientWrapper(
      'kickstart.profile.setChildChannels',
      slice.call(arguments, 0)
    );
  },

  setCustomOptions: function setCustomOptions(key, label, options) {
    return clientWrapper(
      'kickstart.profile.setCustomOptions',
      slice.call(arguments, 0)
    );
  },

  setKickStartTree: function setKickStartTree(key, label, treeLabel) {
    return clientWrapper(
      'kickstart.profile.setKickStartTree',
      slice.call(arguments, 0)
    );
  },

  setLogging: function setLogging(key, label, pre, post) {
    return clientWrapper(
      'kickstart.profile.setLogging',
      slice.call(arguments, 0)
    );
  },

  setRepositories: function setRepositories(key, label, repos) {
    return clientWrapper(
      'kickstart.profile.setRepositories',
      slice.call(arguments, 0)
    );
  },

  setUpdateType: function setUpdateType(key, label, updateType) {
    return clientWrapper(
      'kickstart.profile.setUpdateType',
      slice.call(arguments, 0)
    );
  },

  setVariables: function setVariables(key, label, variable) {
    return clientWrapper(
      'kickstart.profile.setVariables',
      slice.call(arguments, 0)
    );
  },

  setVirtualizationType: function setVirtualizationType(key, label, type) {
    return clientWrapper(
      'kickstart.profile.setVirtualizationType',
      slice.call(arguments, 0)
    );
  }
};