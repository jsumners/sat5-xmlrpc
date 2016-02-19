'use strict';

const slice = Array.prototype.slice;
const clientWrapper = require('laic').laic
  .getNamespace('sat5-xmlrpc').get('clientWrapper');

module.exports = {
  addPackages: function addPackages(key, chanLabel, packageIds) {
    return clientWrapper('' +
      'channel.software.addPackages',
      slice.call(arguments, 0)
    );
  },

  addRepoFilter: function addRepoFilter(key, label, filterMap) {
    return clientWrapper(
      'channel.software.addRepoFilter',
      slice.call(arguments, 0)
    );
  },

  associateRepo: function associateRepo(key, chanLabel, repoLabel) {
    return clientWrapper(
      'channel.software.associateRepo',
      slice.call(arguments, 0)
    );
  },

  availableEntitlements: function availableEntitlements(key, name) {
    return clientWrapper(
      'channel.software.availableEntitlements',
      slice.call(arguments, 0)
    );
  },

  clearRepoFilters: function clearRepoFilters(key, repoLabel) {
    return clientWrapper(
      'channel.software.clearRepoFilters',
      slice.call(arguments, 0)
    );
  },

  clone: function clone(key, origLabel, details, origState) {
    return clientWrapper('channel.software.clone', slice.call(arguments, 0));
  },

  create: function create(key, label, name, summary, archLbl, parntLbl, chksumType, gpgKey) {
    return clientWrapper('channel.software.create', slice.call(arguments, 0));
  },

  createRepo: function createRepo(key, label, type, url) {
    return clientWrapper(
      'channel.software.createRepo',
      slice.call(arguments, 0)
    );
  },

  delete: function del(key, chanLabel) {
    return clientWrapper('channel.software.delete', slice.call(arguments, 0));
  },

  disassociateRepo: function disassociateRepo(key, chanLabel, repoLabel) {
    return clientWrapper('channel.software.disassociateRepo', slice.call(arguments, 0));
  },

  getChannelLastBuildById: function getChannelLastBuildById(key, id) {
    return clientWrapper(
      'channel.software.getChannelLastBuildById',
      slice.call(arguments, 0)
    );
  },

  getDetails: function getDetails(key, chanLabel) {
    return clientWrapper(
      'channel.software.getDetails',
      slice.call(arguments, 0)
    );
  },

  getRepoDetails: function getRepoDetails(key, repoLabel) {
    return clientWrapper(
      'channel.software.getRepoDetails',
      slice.call(arguments, 0)
    );
  },

  getRepoSyncCronExpression: function getRepoSyncCronExpression(key, chanLabel) {
    return clientWrapper(
      'channel.software.getRepoSyncCronExpression',
      slice.call(arguments, 0)
    );
  },

  isGloballySubscribable: function isGloballySubscribable(key, chanLabel) {
    return clientWrapper(
      'channel.software.isGloballySubscribable',
      slice.call(arguments, 0)
    );
  },

  isUserManageable: function isUserManageable(key, chanLabel, login) {
    return clientWrapper(
      'channel.software.isUserManageable',
      slice.call(arguments, 0)
    );
  },

  isUserSubscribable: function isUserSubscribable(key, chanLabel, login) {
    return clientWrapper(
      'channel.software.isUserSubscribable',
      slice.call(arguments, 0)
    );
  },

  listAllPackages: function listAllPackages(key, chanLabel, startDate, endDate) {
    return clientWrapper(
      'channel.software.listAllPackages',
      slice.call(arguments, 0)
    );
  },

  listArches: function listArches(key) {
    return clientWrapper('channel.software.listArches', [key]);
  },

  listChannelRepos: function listChannelRepos(key, chanLabel) {
    return clientWrapper(
      'channel.software.listChannelRepos',
      slice.call(arguments, 0)
    );
  },

  listChildren: function listChildren(key, chanLabel) {
    return clientWrapper(
      'channel.software.listChildren',
      slice.call(arguments, 0)
    );
  },

  listErrata: function listErrata(key, chanLabel, startDate, endDate) {
    return clientWrapper(
      'channel.software.listErrata',
      slice.call(arguments, 0)
    );
  },

  listErrataByType: function listErrataByType(key, chanLabel, type) {
    return clientWrapper(
      'channel.software.listErrataByType',
      slice.call(arguments, 0)
    );
  },

  listErrataNeedingSync: function listErrataNeedingSync(key, chanLabel) {
    return clientWrapper(
      'channel.software.listErrataNeedingSync',
      slice.call(arguments, 0)
    );
  },

  listLatestPackages: function listLatestPackages(key, chanlabel) {
    return clientWrapper(
      'channel.software.listLatestPackages',
      slice.call(arguments, 0)
    );
  },

  listPackagesWithoutChannel: function listPackagesWithoutChannel(key) {
    return clientWrapper('channel.software.listPackagesWithoutChannel', [key]);
  },

  listRepoFilters: function listRepoFilters(key, repoLabel) {
    return clientWrapper(
      'channel.software.listRepoFilters',
      slice.call(arguments, 0)
    );
  },

  listSubscribedSystems: function listSubscribedSystems(key, chanLabel) {
    return clientWrapper(
      'channel.software.listSubscribedSystems',
      slice.call(arguments, 0)
    );
  },

  listSystemChannels: function listSystemChannels(key, serverIc) {
    return clientWrapper(
      'channel.software.listSystemChannels',
      slice.call(arguments, 0)
    );
  },

  listUserRepos: function listUserRepos(key) {
    return clientWrapper('channel.software.listUserRepos', [key]);
  },

  mergeErrata: function mergeErrata(key, fromLabel, toLabel, startDate, endDate) {
    return clientWrapper(
      'channel.software.mergeErrata',
      slice.call(arguments, 0)
    );
  },

  mergePackages: function mergePackages(key, fromLabel, toLabel) {
    return clientWrapper(
      'channel.software.mergePackages',
      slice.call(arguments, 0)
    );
  },

  regenerateNeededCache: function regenerateNeededCache(key, chanLabel) {
    return clientWrapper(
      'channel.software.regenerateNeededCache',
      slice.call(arguments, 0)
    );
  },

  regenerateYumCache: function regenerateYumCache(key, chanlabel) {
    return clientWrapper(
      'channel.software.regenerateYumCache',
      slice.call(arguments, 0)
    );
  },

  removeErrata: function removeErrata(key, chanLabel, names, remPackages) {
    return clientWrapper(
      'channel.software.removeErrata',
      slice.call(arguments, 0)
    );
  },

  removePackages: function removePackages(key, chanlabel, packageIds) {
    return clientWrapper(
      'channel.software.removePackages',
      slice.call(arguments, 0)
    );
  },

  removeRepo: function removeRepo(key, id) {
    return clientWrapper(
      'channel.software.removeRepo',
      slice.call(arguments, 0)
    );
  },

  removeRepoFilter: function removeRepoFilter(key, label, map) {
    return clientWrapper(
      'channel.software.removeRepoFilter',
      slice.call(arguments, 0)
    );
  },

  setContactDetails: function setContactDetails(key, chanLabel, name, email, phone, policy) {
    return clientWrapper(
      'channel.software.setContactDetails',
      slice.call(arguments, 0)
    );
  },

  setDetails: function setDetails(key, chanId, map) {
    return clientWrapper(
      'channel.software.setDetails',
      slice.call(arguments, 0)
    );
  },

  setGloballySubscribable: function setGloballySubscribable(key, chanLabel, subscribable) {
    return clientWrapper(
      'channel.software.setGloballySubscribable',
      slice.call(arguments, 0)
    );
  },

  setRepoFilters: function setRepoFilters(key, repoLabel, map) {
    return clientWrapper(
      'channel.software.setRepoFilters',
      slice.call(arguments, 0)
    );
  },

  setUserManageable: function setUserManageable(key, chanlabel, login, value) {
    return clientWrapper(
      'channel.software.setUserManageable',
      slice.call(arguments, 0)
    );
  },

  setUserSubscribable: function setUserSubscribable(key, chanlabel, login, value) {
    return clientWrapper(
      'channel.software.setUserSubscribable',
      slice.call(arguments, 0)
    );
  },

  syncErrata: function syncErrata(key, chanLabel) {
    return clientWrapper(
      'channel.software.syncErrata',
      slice.call(arguments, 0)
    );
  },

  syncRepo: function syncRepo(key, chanLabl) {
    return clientWrapper(
      'channel.software.syncRepo',
      slice.call(arguments, 0)
    );
  },

  updateRepo: function updateRepo(key, repoId, label, url) {
    return clientWrapper(
      'channel.software.updateRepo',
      slice.call(arguments, 0)
    );
  },

  updateRepoLabel: function updateRepoLabel(key, repoId, label) {
    return clientWrapper(
      'channel.software.updateRepoLabel',
      slice.call(arguments, 0)
    );
  },

  updateRepoUrl: function updateRepoUrl(key, repoId, url) {
    return clientWrapper(
      'channel.software.updateRepoUrl',
      slice.call(arguments, 0)
    );
  }
};