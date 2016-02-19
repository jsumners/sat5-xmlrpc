'use strict';

const slice = Array.prototype.slice;
const clientWrapper = require('laic').laic
  .getNamespace('sat5-xmlrpc').get('clientWrapper');

module.exports = {
  addEntitlements: function addEntitlements(key, serverId, labels) {
    return clientWrapper('system.addEntitlements', slice.call(arguments, 0));
  },

  addNote: function addNote(key, serverId, subject, body) {
    return clientWrapper('system.addNote', slice.call(arguments, 0));
  },

  comparePackageProfile: function comparePackageProfile(key, serverId, prof) {
    return clientWrapper(
      'system.comparePackageProfile',
      slice.call(arguments, 0)
    );
  },

  comparePackages: function comparePackages(key, server1, server2) {
    return clientWrapper('system.comparePackages', slice.call(arguments, 0));
  },

  convertToFlexEntitlement: function convertToFlexEntitlement(key, serverIds, familyLabel) {
    return clientWrapper(
      'system.convertToFlexEntitlement',
      slice.call(arguments, 0)
    );
  },

  createPackageProfile: function createPackageProfile(key, serverId, profLabel, desc) {
    return clientWrapper(
      'system.createPackageProfile',
      slice.call(arguments, 0)
    );
  },

  createSystemRecord: function createSystemRecord(key, serverId, ksLabel) {
    return clientWrapper(
      'system.createSystemRecord',
      slice.call(arguments, 0)
    );
  },

  deleteCustomValues: function deleteCustomValues(key, serverId, labels) {
    return clientWrapper(
      'system.deleteCustomValues',
      slice.call(arguments, 0)
    );
  },

  deleteGuestProfiles: function deleteGuestProfiles(key, hostId, names) {
    return clientWrapper(
      'system.deleteGuestProfiles',
      slice.call(arguments, 0)
    );
  },

  deleteNote: function deleteNote(key, serverId, noteId) {
    return clientWrapper('system.deleteNote', slice.call(arguments, 0));
  },

  deleteNotes: function deleteNotes(key, serverId) {
    return clientWrapper('system.deleteNotes', slice.call(arguments, 0));
  },

  deletePackageProfile: function deletePackageProfile(key, profileId) {
    return clientWrapper(
      'system.deletePackageProfile',
      slice.call(arguments, 0)
    );
  },

  deleteSystem: function deleteSystem(systemId) {
    return clientWrapper('system.deleteSystem', slice.call(arguments, 0));
  },

  deleteSystems: function deleteSystems(key, serverIds) {
    return clientWrapper('system.deleteSystems', slice.call(arguments, 0));
  },

  deleteTagFromSnapshot: function deleteTagFromSnapshot(key, serverId, tag) {
    return clientWrapper(
      'system.deleteTagFromSnapshot',
      slice.call(arguments, 0)
    );
  },

  downloadSystemId: function downloadSystemId(key, serverId) {
    return clientWrapper('system.downloadSystemId', slice.call(arguments, 0));
  },

  getConnectionPath: function getConnectionPath(key, serverId) {
    return clientWrapper(
      'system.getConnectionPath',
      slice.call(arguments, 0)
    );
  },

  getCpu: function getCpu(key, serverId) {
    return clientWrapper('system.getCpu', slice.call(arguments, 0));
  },

  getCustomValues: function getCustomValues(key, serverId) {
    return clientWrapper(
      'system.getCustomValues',
      slice.call(arguments, 0)
    );
  },

  getDetails: function getDetails(key, serverId) {
    return clientWrapper('system.getDetails', slice.call(arguments, 0));
  },

  getDevices: function getDevices(key, serverId) {
    return clientWrapper('system.getDevices', slice.call(arguments, 0));
  },

  getDmi: function getDmi(key, serverId) {
    return clientWrapper('system.getDmi', slice.call(arguments, 0));
  },

  getEntitlements: function getEntitlements(key, serverId) {
    return clientWrapper(
      'system.getEntitlements',
      slice.call(arguments, 0)
    );
  },

  getEventHistory: function getEventHistory(key, serverId) {
    return clientWrapper(
      'system.getEventHistory',
      slice.call(arguments, 0)
    );
  },

  getId: function getId(key, systemName) {
    return clientWrapper('system.getId', slice.call(arguments, 0));
  },

  getMemory: function getMemory(key, serverId) {
    return clientWrapper('system.getMemory', slice.call(arguments, 0));
  },

  getName: function getName(key, serverId) {
    return clientWrapper('system.getName', slice.call(arguments, 0));
  },

  getNetwork: function getNetwork(key, serverId) {
    return clientWrapper('system.getNetwork', slice.call(arguments, 0));
  },

  getNetworkDevices: function getNetworkDevices(key, serverId) {
    return clientWrapper(
      'system.getNetworkDevices',
      slice.call(arguments, 0)
    );
  },

  getRegistrationDate: function getRegistrationDate(key, serverId) {
    return clientWrapper(
      'system.getRegistrationDate',
      slice.call(arguments, 0)
    );
  },

  getRelevantErrata: function getRelevantErrata(key, serverId) {
    return clientWrapper(
      'system.getRelevantErrata',
      slice.call(arguments, 0)
    );
  },

  getRelevantErrataByType: function getRelevantErrataByType(key, serverId, type) {
    return clientWrapper(
      'system.getRelevantErrataByType',
      slice.call(arguments, 0)
    );
  },

  getRunningKernel: function getRunningKernel(key, serverId) {
    return clientWrapper('system.getRunningKernel', slice.call(arguments, 0));
  },

  getScriptActionDetails: function getScriptActionDetails(key, actionId) {
    return clientWrapper(
      'system.getScriptActionDetails',
      slice.call(arguments, 0)
    );
  },

  getScriptResults: function getScriptResults(key, actionId) {
    return clientWrapper('system.getScriptResults', slice.call(arguments, 0));
  },

  getSubscribedBaseChannel: function getSubscribedBaseChannel(key, serverId) {
    return clientWrapper(
      'system.getSubscribedBaseChannel',
      slice.call(arguments, 0)
    );
  },

  getSystemCurrencyMultipliers: function getSystemCurrencyMultipliers(key) {
    return clientWrapper('system.getSystemCurrencyMultipliers', [key]);
  },

  getSystemCurrencyScores: function getSystemCurrencyScores(key) {
    return clientWrapper('system.getSystemCurrencyScores', [key]);
  },

  getUnscheduledErrata: function getUnscheduledErrata(key, serverId) {
    return clientWrapper(
      'system.getUnscheduledErrata',
      slice.call(arguments, 0)
    );
  },

  getUuid: function getUuid(key, serverId) {
    return clientWrapper('system.getUuid', slice.call(arguments, 0));
  },

  getVariables: function getVariables(key, serverId) {
    return clientWrapper('system.getVariables', slice.call(arguments, 0));
  },

  isNvreInstalled: function isNvreInstalled(key, serverId, name, version, release) {
    return clientWrapper(
      'system.isNvreInstalled',
      slice.call(arguments, 0)
    );
  },

  listActivationKeys: function listActivationKeys(key, serverId) {
    return clientWrapper(
      'system.listActivationKeys',
      slice.call(arguments, 0)
    );
  },

  listActiveSystems: function listActiveSystems(key) {
    return clientWrapper('system.listActiveSystems', [key]);
  },

  listActiveSystemsDetails: function listActiveSystemsDetails(key, serverIds) {
    return clientWrapper(
      'system.listActiveSystemsDetails',
      slice.call(arguments, 0)
    );
  },

  listAdministrators: function listAdministrators(key, serverId) {
    return clientWrapper(
      'system.listAdministrators',
      slice.call(arguments, 0)
    );
  },

  listAllInstallablePackages: function listAllInstallablePackages(key, serverId) {
    return clientWrapper(
      'system.listAllInstallablePackages',
      slice.call(arguments, 0)
    );
  },

  listDuplicatesByHostname: function listDuplicatesByHostname(key) {
    return clientWrapper('system.listDuplicatesByHostname', [key]);
  },

  listDuplicatesByIp: function listDuplicatesByIp(key) {
    return clientWrapper('system.listDuplicatesByIp', [key]);
  },

  listDuplicatesByMac: function listDuplicatesByMac(key) {
    return clientWrapper('system.listDuplicatesByMac', [key]);
  },

  listEligibleFlexGuests: function listEligibleFlexGuests(key) {
    return clientWrapper('system.listEligibleFlexGuests', [key]);
  },

  listExtraPackages: function listExtraPackages(key, serverId) {
    return clientWrapper(
      'system.listExtraPackages',
      slice.call(arguments, 0)
    );
  },

  listFlexGuests: function listFlexGuests(key) {
    return clientWrapper('system.listFlexGuests', [key]);
  },

  listGroups: function listGroups(key, serverId) {
    return clientWrapper('system.listGroups', slice.call(arguments, 0));
  },

  listInactiveSystems: function listInactiveSystems(key) {
    return clientWrapper(
      'system.listInactiveSystems',
      slice.call(arguments, 0)
    );
  },

  listLatestAvailablePackage: function listLatestAvailablePackage(key, serverIds, packageName) {
    return clientWrapper(
      'system.listLatestAvailablePackage',
      slice.call(arguments, 0)
    );
  },

  listLatestInstallablePackages: function listLatestInstallablePackages(key, serverId) {
    return clientWrapper(
      'system.listLatestInstallablePackages',
      slice.call(arguments, 0)
    );
  },

  listLatestUpgradablePackages: function listLatestUpgradablePackages(key, serverId) {
    return clientWrapper(
      'system.listLatestUpgradablePackages',
      slice.call(arguments, 0)
    );
  },

  listNewerInstalledPackages: function listNewerInstalledPackages(key, serverId, name, version, release, epoch) {
    return clientWrapper(
      'system.listNewerInstalledPackages',
      slice.call(arguments, 0)
    );
  },

  listNotes: function listNotes(key, serverId) {
    return clientWrapper('system.listNotes', slice.call(arguments, 0));
  },

  listOlderInstalledPackages: function listOlderInstalledPackages(key, serverId, name, version, release, epoch) {
    return clientWrapper(
      'system.listOlderInstalledPackages',
      slice.call(arguments, 0)
    );
  },

  listOutOfDateSystems: function listOutOfDateSystems(key) {
    return clientWrapper('system.listOutOfDateSystems', [key]);
  },

  listPackageProfiles: function listPackageProfiles(key) {
    return clientWrapper('system.listPackageProfiles', [key]);
  },

  listPackages: function listPackages(key, serverId) {
    return clientWrapper('system.listPackages', slice.call(arguments, 0));
  },

  listPackagesFromChannel: function listPackagesFromChannel(key, serverId, chanLabel) {
    return clientWrapper(
      'system.listPackagesFromChannel',
      slice.call(arguments, 0)
    );
  },

  listPhysicalSystems: function listPhysicalSystems(key) {
    return clientWrapper('system.listPhysicalSystems', [key]);
  },

  listSubscribableBaseChannels: function listSubscribableBaseChannels(key, serverId) {
    return clientWrapper(
      'system.listSubscribableBaseChannels',
      slice.call(arguments, 0)
    );
  },

  listSubscribableChildChannels: function listSubscribableChildChannels(key, serverId) {
    return clientWrapper(
      'system.listSubscribableChildChannels',
      slice.call(arguments, 0)
    );
  },

  listSubscribedChildChannels: function listSubscribedChildChannels(key, serverId) {
    return clientWrapper(
      'system.listSubscribedChildChannels',
      slice.call(arguments, 0)
    );
  },

  listSystemEvents: function listSystemEvents(key, serverId, type) {
    return clientWrapper(
      'system.listSystemEvents',
      slice.call(arguments, 0)
    );
  },

  listSystems: function listSystems(key) {
    return clientWrapper('system.listSystems', [key]);
  },

  listSystemsWithExtraPackages: function listSystemsWithExtraPackages(key) {
    return clientWrapper('system.listSystemsWithExtraPackages', [key]);
  },

  listSystemsWithPackage: function listSystemsWithPackage(key, packageId) {
    return clientWrapper(
      'system.listSystemsWithPackage',
      slice.call(arguments, 0)
    );
  },

  listUngroupedSystems: function listUngroupedSystems(key) {
    return clientWrapper('system.listUngroupedSystems', [key]);
  },

  listUserSystems: function listUserSystems(key) {
    return clientWrapper('system.listUserSystems', slice.call(arguments, 0));
  },

  listVirtualGuests: function listVirtualGuests(key, hostId) {
    return clientWrapper('system.listVirtualGuests', slice.call(arguments, 0));
  },

  listVirtualHosts: function listVirtualHosts(key) {
    return clientWrapper('system.listVirtualHosts', [key]);
  },

  obtainReactivationKey: function obtainReactivationKey(key, serverId) {
    return clientWrapper(
      'system.obtainReactivationKey',
      slice.call(arguments, 0)
    );
  },

  provisionSystem: function provisionSystem(key, serverId, profile) {
    return clientWrapper('system.provisionSystem', slice.call(arguments, 0));
  },

  provisionVirtualGuest: function provisionVirtualGuest(key, serverId, guestName, profileName) {
    return clientWrapper(
      'system.provisionVirtualGuest',
      slice.call(arguments, 0)
    );
  },

  removeEntitlements: function removeEntitlements(key, serverId, labels) {
    return clientWrapper(
      'system.removeEntitlements',
      slice.call(arguments, 0)
    );
  },

  scheduleApplyErrata: function scheduleApplyErrata(key, serverIds, errataIds) {
    return clientWrapper(
      'system.scheduleApplyErrata',
      slice.call(arguments, 0)
    );
  },

  scheduleCertificateUpdate: function scheduleCertificateUpdate(key, serverId) {
    return clientWrapper(
      'system.scheduleCertificateUpdate',
      slice.call(arguments, 0)
    );
  },

  scheduleGuestAction: function scheduleGuestAction(key, guestId, state, date) {
    return clientWrapper(
      'system.scheduleGuestAction',
      slice.call(arguments, 0)
    );
  },

  scheduleHardwareRefresh: function scheduleHardwareRefresh(key, serverId, date) {
    return clientWrapper(
      'system.scheduleHardwareRefresh',
      slice.call(arguments, 0)
    );
  },

  schedulePackageInstall: function schedulePackageInstall(key, serverIds, packageIds, date) {
    return clientWrapper(
      'system.schedulePackageInstall',
      slice.call(arguments, 0)
    );
  },

  schedulePackageRefresh: function schedulePackageRefresh(key, serverId, date) {
    return clientWrapper(
      'system.schedulePackageRefresh',
      slice.call(arguments, 0)
    );
  },

  schedulePackageRemove: function schedulePackageRemove(key, serverId, packageIds, date) {
    return clientWrapper(
      'system.schedulePackageRemove',
      slice.call(arguments, 0)
    );
  },

  scheduleReboot: function scheduleReboot(key, serverId, date) {
    return clientWrapper('system.scheduleReboot', slice.call(arguments, 0));
  },

  scheduleScriptRun: function scheduleScriptRun(key, systemIds, username, groupname, timeout, script, date) {
    return clientWrapper(
      'system.scheduleScriptRun',
      slice.call(arguments, 0)
    );
  },

  scheduleSyncPackagesWithSystem: function scheduleSyncPackagesWithSystem(key, targetId, sourceId, packageIds, date) {
    return clientWrapper(
      'system.scheduleSyncPackagesWithSystem',
      slice.call(arguments, 0)
    );
  },

  searchByName: function searchByName(key, regexpString) {
    return clientWrapper('system.searchByName', slice.call(arguments, 0));
  },

  setBaseChannel: function setBaseChannel(key, serverId, chanLabel) {
    return clientWrapper('system.setBaseChannel', slice.call(arguments, 0));
  },

  setChildChannels: function setChildChannels(key, serverId, labels) {
    return clientWrapper('system.setChildChannels', slice.call(arguments, 0));
  },

  setCustomValues: function setCustomValues(key, serverId, values) {
    return clientWrapper('system.setCustomValues', slice.call(arguments, 0));
  },

  setDetails: function setDetails(key, serverId, details) {
    return clientWrapper('system.setDetails', slice.call(arguments, 0));
  },

  setGroupMembership: function setGroupMembership(key, serverId, groupId, member) {
    return clientWrapper(
      'system.setGroupMembership',
      slice.call(arguments, 0)
    );
  },

  setGuestCpus: function setGuestCpus(key, sid, numOfCpus) {
    return clientWrapper('system.setGuestCpus', slice.call(arguments, 0));
  },

  setGuestMemory: function setGuestMemory(key, sid, memory) {
    return clientWrapper('system.setGuestMemory', slice.call(arguments, 0));
  },

  setLockStatus: function setLockStatus(key, serverId, lockStatus) {
    return clientWrapper('system.setLockStatus', slice.call(arguments, 0));
  },

  setPrimaryInterface: function setPrimaryInterface(key, serverId, iface) {
    return clientWrapper(
      'system.setPrimaryInterface',
      slice.call(arguments, 0)
    );
  },

  setProfileName: function setProfileName(key, serverId, name) {
    return clientWrapper('system.setProfileName', slice.call(arguments, 0));
  },

  setVariables: function setVariables(key, serverId, netboot, variables) {
    return clientWrapper('system.setVariables', slice.call(arguments, 0));
  },

  tagLatestSnapshot: function tagLatestSnapshot(key, serverId, tagName) {
    return clientWrapper(
      'system.tagLatestSnapshot',
      slice.call(arguments, 0)
    );
  },

  unentitle: function unentitle(systemId) {
    return clientWrapper('system.unentitle', [systemId]);
  },

  upgradeEntitlement: function upgradeEntitlement(key, serverId, entitlement) {
    return clientWrapper('system.upgradeEntitlement', slice.call(arguments, 0));
  },

  whoRegistered: function whoRegistered(key, sid) {
    return clientWrapper('system.whoRegistered', slice.call(arguments, 0));
  }
};