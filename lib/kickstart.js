'use strict';

const slice = Array.prototype.slice;
const clientWrapper = require('laic').laic
  .getNamespace('sat5-xmlrpc').get('clientWrapper');

module.exports = {
  cloneProfile: function cloneProfile(key, toCloneLabel, newLabel) {
    return clientWrapper('kickstart.cloneProfile', slice.call(arguments, 0));
  },

  createProfile: function createProfile(key, label, virtType, treeLabel, host, rootpass, updateType) {
    return clientWrapper('kickstart.createProfile', slice.call(arguments, 0));
  },

  createProfileWithCustomUrl: function createProfileWithCustomUrl(key, label, virtType, treeLabel, url, rootpass) {
    return clientWrapper(
      'kickstart.createProfileWithCustomUrl',
      slice.call(arguments, 0)
    );
  },

  deleteProfile: function deleteProfile(key, label) {
    return clientWrapper('kickstart.deleteProfile', slice.call(arguments, 0));
  },

  disableProfile: function disableProfile(key, label, disabled) {
    return clientWrapper('kickstart.disableProfile', slice.call(arguments, 0));
  },

  findKickstartForIp: function findKickstartForIp(key, ipAddress) {
    return clientWrapper(
      'kickstart.findKickstartForIp',
      slice.call(arguments, 0)
    );
  },

  importFile: function importFile(key, label, virtType, treeLabel, contents) {
    return clientWrapper('kickstart.importFile', slice.call(arguments, 0));
  },

  importRawFile: function importRawFile(key, label, virtType, treeLabel, contents) {
    return clientWrapper(
      'kickstart.importRawFile',
      slice.call(arguments, 0)
    );
  },

  isProfileDisabled: function isProfileDisabled(key, label) {
    return clientWrapper(
      'kickstart.isProfileDisabled',
      slice.call(arguments, 0)
    );
  },

  listAllIpRanges: function listAllIpRanges(key) {
    return clientWrapper('kickstart.listAllIpRanges', [key]);
  },

  listKickstartableChannels: function listKickstartableChannels(key) {
    return clientWrapper('kickstart.listKickstartableChannels', [key]);
  },

  listKickstarts: function listKickstarts(key) {
    return clientWrapper('kickstart.listKickstarts', [key]);
  },

  renameProfile: function renameProfile(key, oldLabel, newLabel) {
    return clientWrapper('kickstart.renameProfile', slice.call(arguments, 0));
  }
};