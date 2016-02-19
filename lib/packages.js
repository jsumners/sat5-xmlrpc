'use strict';

const slice = Array.prototype.slice;
const clientWrapper = require('laic').laic
  .getNamespace('sat5-xmlrpc').get('clientWrapper');

module.exports = {
  findByNvrea: function findByNvrea(key, name, version, release, epoch, arch) {
    return clientWrapper('packages.findByNvrea', slice.call(arguments, 0));
  },

  getDetails: function getDetails(key, packageId) {
    return clientWrapper('packages.getDetails', slice.call(arguments, 0));
  },

  getPackage: function getPackage(key, packageId) {
    return clientWrapper('packages.getPackage', slice.call(arguments, 0));
  },

  getPackageUrl: function getPackageUrl(key, packageId) {
    return clientWrapper('packages.getPackageUrl', slice.call(arguments, 0));
  },

  listChangelog: function listChangelog(key, packageId) {
    return clientWrapper('packages.listChangelog', slice.call(arguments, 0));
  },

  listDependencies: function listDependencies(key, packageId) {
    return clientWrapper(
      'packages.listDependencies',
      slice.call(arguments, 0)
    );
  },

  listFiles: function listFiles(key, packageId) {
    return clientWrapper('packages.listFiles', slice.call(arguments, 0));
  },

  listProvidingChannels: function listProvidingChannels(key, packageId) {
    return clientWrapper(
      'packages.listProvidingChannels',
      slice.call(arguments, 0)
    );
  },

  listProvidingErrata: function listProvidingErrata(key, packageId) {
    return clientWrapper(
      'packages.listProvidingErrata',
      slice.call(arguments, 0)
    );
  },

  removePackage: function removePackage(key, packageId) {
    return clientWrapper(
      'packages.removePackage',
      slice.call(arguments, 0)
    );
  }
};