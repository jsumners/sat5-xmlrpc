'use strict';

const slice = Array.prototype.slice;
const clientWrapper = require('laic').laic
  .getNamespace('sat5-xmlrpc').get('clientWrapper');

module.exports = {
  addFilePreservations: function addFilePres(key, label, preservations) {
    return clientWrapper(
      'kickstart.profile.system.addFilePreservations',
      slice.call(arguments, 0)
    );
  },

  addKeys: function addKeys(key, label, keys) {
    return clientWrapper(
      'kickstart.profile.system.addKeys',
      slice.call(arguments, 0)
    );
  },

  checkConfigManagement: function checkConfigManagement(key, label) {
    return clientWrapper(
      'kickstart.profile.system.checkConfigManagement',
      slice.call(arguments, 0)
    );
  },

  checkRemoteCommands: function checkRemoteCommands(key, label) {
    return clientWrapper(
      'kickstart.profile.system.checkRemoteCommands',
      slice.call(arguments, 0)
    );
  },

  disableConfigManagement: function disableConfigManagement(key, label) {
    return clientWrapper(
      'kickstart.profile.system.disableConfigManagement',
      slice.call(arguments, 0)
    );
  },

  disableRemoteCommands: function disableRemoteCommands(key, label) {
    return clientWrapper(
      'kickstart.profile.system.disableRemoteCommands',
      slice.call(arguments, 0)
    );
  },

  enableConfigManagement: function enableConfigManagement(key, label) {
    return clientWrapper(
      'kickstart.profile.system.enableConfigManagement',
      slice.call(arguments, 0)
    );
  },

  enableRemoteCommands: function enableRemoteCommands(key, label) {
    return clientWrapper(
      'kickstart.profile.system.enableRemoteCommands',
      slice.call(arguments, 0)
    );
  },

  getLocale: function getLocale(key, label) {
    return clientWrapper(
      'kickstart.profile.system.getLocale',
      slice.call(arguments, 0)
    );
  },

  getPartitioningScheme: function getPartitioningScheme(key, label) {
    return clientWrapper(
      'kickstart.profile.system.getPartitioningScheme',
      slice.call(arguments, 0)
    );
  },

  getRegistrationType: function getRegistrationType(key, label) {
    return clientWrapper(
      'kickstart.profile.system.getRegistrationType',
      slice.call(arguments, 0)
    );
  },

  getSELinux: function getSELinux(key, label) {
    return clientWrapper(
      'kickstart.profile.system.getSELinux',
      slice.call(arguments, 0)
    );
  },

  listFilePreservations: function listFilePreservations(key, label) {
    return clientWrapper(
      'kickstart.profile.system.listFilePreservations',
      slice.call(arguments, 0)
    );
  },

  listKeys: function listKeys(key, label) {
    return clientWrapper(
      'kickstart.profile.system.listKeys',
      slice.call(arguments, 0)
    );
  },

  removeFilePreservations: function removeFilePreservations(key, label, pres) {
    return clientWrapper(
      'kickstart.profile.system.removeFilePreservations',
      slice.call(arguments, 0)
    );
  },

  removeKeys: function removeKeys(key, label, descriptions) {
    return clientWrapper(
      'kickstart.profile.system.removeKeys',
      slice.call(arguments, 0)
    );
  },

  setLocale: function setLocale(key, label, locale, useUtc) {
    return clientWrapper(
      'kickstart.profile.system.setLocale',
      slice.call(arguments, 0)
    );
  },

  setPartitioningScheme: function setPartitioningScheme(key, label, scheme) {
    return clientWrapper(
      'kickstart.profile.system.setPartitioningScheme',
      slice.call(arguments, 0)
    );
  },

  setRegistrationType: function setRegistrationType(key, label, type) {
    return clientWrapper(
      'kickstart.profile.system.setRegistrationType',
      slice.call(arguments, 0)
    );
  }
};