'use strict';

const slice = Array.prototype.slice;
const clientWrapper = require('laic').laic
  .getNamespace('sat5-xmlrpc').get('clientWrapper');

module.exports = {
  addAssignedSystemGroup: function addAssignedSystemGroup(key, login, groupName, setDefault) {
    return clientWrapper('user.addAssignedSystemGroup',
      slice.call(arguments, 0)
    );
  },

  addAssignedSystemGroups: function addAssignedSystemGroups(key, login, groupNames, setDefault) {
    return clientWrapper(
      'user.addAssignedSystemGroups',
      slice.call(arguments, 0)
    );
  },

  addDefaultSystemGroup: function addDefaultSystemGroup(key, login, groupName) {
    return clientWrapper(
      'user.addDefaultSystemGroup',
      slice.call(arguments, 0)
    );
  },

  addDefaultSystemGroups: function addDefaultSystemGroups(key, login, groupNames) {
    return clientWrapper(
      'user.addDefaultSystemGroups',
      slice.call(arguments, 0)
    );
  },

  addRole: function addRole(key, login, role) {
    return clientWrapper('user.addRole', slice.call(arguments, 0));
  },

  create: function create(key, login, password, fName, lName, email) {
    return clientWrapper('user.create', slice.call(arguments, 0));
  },

  delete: function del(key, login) {
    return clientWrapper('user.delete', slice.call(arguments, 0));
  },

  disable: function disable(key, login) {
    return clientWrapper('user.disable', slice.call(arguments, 0));
  },

  enable: function enable(key, login) {
    return clientWrapper('user.enable', slice.call(arguments, 0));
  },

  getCreateDefaultSystemGroup: function getCreateDefaultSystemGroup(key) {
    return clientWrapper('user.getCreateDefaultSystemGroup', [key]);
  },

  getDetails: function getDetails(key, login) {
    return clientWrapper('user.getDetails', slice.call(arguments, 0));
  },

  getLoggedInTime: function getLoggedInTime(key, login) {
    return clientWrapper(
      'user.getLoggedInTime',
      slice.call(arguments, 0)
    );
  },

  listAssignableRoles: function listAssignableRoles(key) {
    return clientWrapper('user.listAssignableRoles', [key]);
  },

  listAssignedSystemGroups: function listAssignedSystemGroups(key, login) {
    return clientWrapper(
      'user.listAssignedSystemGroups',
      slice.call(arguments, 0)
    );
  },

  listDefaultSystemGroups: function listDefaultSystemGroups(key, login) {
    return clientWrapper(
      'user.listDefaultSystemGroups',
      slice.call(arguments, 0)
    );
  },

  listRoles: function listRoles(key, login) {
    return clientWrapper('user.listRoles', slice.call(arguments, 0));
  },

  listUsers: function listUsers(key) {
    return clientWrapper('user.listUsers', [key]);
  },

  removeAssignedSystemGroups: function removeAssignedSystemGroups(key, login, groupNames, setDefault) {
    return clientWrapper(
      'user.removeAssignedSystemGroups',
      slice.call(arguments, 0)
    );
  },

  removeDefaultSystemGroup: function removeDefaultSystemGroup(key, login, groupName) {
    return clientWrapper(
      'user.removeDefaultSystemGroup',
      slice.call(arguments, 0)
    );
  },

  removeDefaultSystemGroups: function removeDefaultSystemGroups(key, login, groupNames) {
    return clientWrapper(
      'user.removeDefaultSystemGroups',
      slice.call(arguments, 0)
    );
  },

  removeRole: function removeRole(key, login, role) {
    return clientWrapper('user.removeRole', slice.call(arguments, 0));
  },

  setCreateDefaultSystemGroup: function setCreateDefaultSystemGroup(key, createDefaultSystemGroup) {
    return clientWrapper(
      'user.setCreateDefaultSystemGroup',
      slice.call(arguments, 0)
    );
  },

  setDetails: function setDetails(key, login, details) {
    return clientWrapper('user.setDetails', slice.call(arguments, 0));
  },

  setErrataNotifications: function setErrataNotifications(key, login, value) {
    return clientWrapper(
      'user.setErrataNotifications',
      slice.call(arguments, 0)
    );
  },

  setReadOnly: function setReadOnly(key, login, readOnly) {
    return clientWrapper('user.setReadOnly', slice.call(arguments, 0));
  },

  usePamAuthentication: function usePamAuthentication(key, login, pamValue) {
    return clientWrapper(
      'user.usePamAuthentication',
      slice.call(arguments, 0)
    );
  }
};