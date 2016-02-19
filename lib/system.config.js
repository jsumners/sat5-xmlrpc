'use strict';

const slice = Array.prototype.slice;
const clientWrapper = require('laic').laic
  .getNamespace('sat5-xmlrpc').get('clientWrapper');

module.exports = {
  addChannels: function addChannels(key, systemIds, labels, addToTop) {
    return clientWrapper('system.config.addChannels', slice.call(arguments, 0));
  },

  createOrUpdatePath: function createOrUpdatePath(key, serverId, path, isDir, info, commitToLocal) {
    return clientWrapper(
      'system.config.createOrUpdatePath',
      slice.call(arguments, 0)
    );
  },

  createOrUpdateSymlink: function createOrUpdateSymlink(key, serverId, path, info, commitToLocal) {
    return clientWrapper(
      'system.config.createOrUpdateSymlink',
      slice.call(arguments, 0)
    );
  },

  deleteFiles: function deleteFiles(key, serverId, paths, deleteFromLocal) {
    return clientWrapper('system.config.deleteFiles', slice.call(arguments, 0));
  },

  deployAll: function deployAll(key, systemIds, date) {
    return clientWrapper('system.config.deployAll', slice.call(arguments, 0));
  },

  listChannels: function listChannels(key, serverId) {
    return clientWrapper(
      'system.config.listChannels',
      slice.call(arguments, 0)
    );
  },

  listFiles: function listFiles(key, serverId, listLocal) {
    return clientWrapper('system.config.listFiles', slice.call(arguments, 0));
  },

  lookupFileInfo: function lookupFileInfo(key, serverId, paths, searchLocal) {
    return clientWrapper(
      'system.config.lookupFileInfo',
      slice.call(arguments, 0)
    );
  },

  removeChannels: function removeChannels(key, systemIds, labels) {
    return clientWrapper(
      'system.config.removeChannels',
      slice.call(arguments, 0)
    );
  },

  setChannels: function setChannels(key, systemIds, labels) {
    return clientWrapper(
      'system.config.setChannels',
      slice.call(arguments, 0)
    );
  }
};