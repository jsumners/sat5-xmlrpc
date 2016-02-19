'use strict';

const slice = Array.prototype.slice;
const clientWrapper = require('laic').laic
  .getNamespace('sat5-xmlrpc').get('clientWrapper');

module.exports = {
  channelExists: function authLogin(key, chanLabel) {
    return clientWrapper(
      'configchannel.channelExists',
      slice.call(arguments, 0)
    );
  },

  create: function create(key, label, name, description) {
    return clientWrapper('configchannel.create', slice.call(arguments, 0));
  },

  createOrUpdatePath: function createOrUpdatePath(key, chanLabel, path, isDir, info) {
    return clientWrapper(
      'configchannel.createOrUpdatePath',
      slice.call(arguments, 0)
    );
  },

  createOrUpdateSymlink: function createOrUpdateSymlink(key, chanLabel, path, info) {
    return clientWrapper(
      'configchannel.createOrUpdateSymlink',
      slice.call(arguments, 0)
    );
  },

  deleteChannels: function deleteChannels(key, labels) {
    return clientWrapper(
      'configchannel.deleteChannels',
      slice.call(arguments, 0)
    );
  },

  deleteFileRevisions: function deleteFileRevisions(key, chanlabel, path, revs) {
    return clientWrapper(
      'configchannel.deleteFileRevisions',
      slice.call(arguments, 0)
    );
  },

  deleteFiles: function deleteFiles(key, chanLabel, paths) {
    return clientWrapper('configchannel.deleteFiles', slice.call(arguments, 0));
  },

  deployAllSystems: function deployAllSystems(key, chanLabel, date) {
    return clientWrapper(
      'configchannel.deployAllSystems',
      slice.call(arguments, 0)
    );
  },

  getDetails: function getDetails(key, chanLabel) {
    return clientWrapper('configchannel.getDetails', slice.call(arguments, 0));
  },

  getEncodedFileRevision: function getEncodedFileRevision(key, chanlabel, path, rev) {
    return clientWrapper(
      'configchannel.getEncodedFileRevision',
      slice.call(arguments, 0)
    );
  },

  getFileRevision: function getFileRevision(key, chanLabel, path, rev) {
    return clientWrapper(
      'configchannel.getFileRevision',
      slice.call(arguments, 0)
    );
  },

  getFileRevisions: function getFileRevisions(key, chanLabel, path) {
    return clientWrapper(
      'configchannel.getFileRevisions',
      slice.call(arguments, 0)
    );
  },

  listFiles: function listFiles(key, chanLabel) {
    return clientWrapper('configchannel.listFiles', slice.call(arguments, 0));
  },

  listGlobals: function listGlobals(key) {
    return clientWrapper('configchannel.listGlobals', [key]);
  },

  listSubscribedSystems: function listSubscribedSystems(key, chanLabel) {
    return clientWrapper(
      'configchannel.listSubscribedSystems',
      slice.call(arguments, 0)
    );
  },

  lookupChannelInfo: function lookupChannelInfo(key, labels) {
    return clientWrapper(
      'configchannel.lookupChannelInfo',
      slice.call(arguments, 0)
    );
  },

  lookupFileInfo: function lookupFileInfo(key, chanLabel, paths) {
    return clientWrapper(
      'configchannel.lookupFileInfo',
      slice.call(arguments, 0)
    );
  },

  scheduleFileComparisons: function scheduleFileComparisons(key, chanLabel, path, ids) {
    return clientWrapper(
      'configchannel.scheduleFileComparisons',
      slice.call(arguments, 0)
    );
  },

  update: function update(key, chanLabel, chanName, description) {
    return clientWrapper('configchannel.update', slice.call(arguments, 0));
  }
};