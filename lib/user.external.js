'use strict';

const slice = Array.prototype.slice;
const clientWrapper = require('laic').laic
  .getNamespace('sat5-xmlrpc').get('clientWrapper');

module.exports = {
  createExternalGroupToRoleMap: function createExternalGroupToRoleMap(key, name, roles) {
    return clientWrapper(
      'user.external.createExternalGroupToRoleMap',
      slice.call(arguments, 0)
    );
  },

  createExternalGroupToSystemGroupMap: function createExternalGroupToSystemGroupMap(key, name, groupNames) {
    return clientWrapper(
      'user.external.createExternalGroupToSystemGroupMap',
      slice.call(arguments, 0)
    );
  },

  deleteExternalGroupToRoleMap: function deleteExternalGroupToRoleMap(key, name) {
    return clientWrapper(
      'user.external.deleteExternalGroupToRoleMap',
      slice.call(arguments, 0)
    );
  },

  deleteExternalGroupToSystemGroupMap: function deleteExternalGroupToSystemGroupMap(key, name) {
    return clientWrapper(
      'user.external.deleteExternalGroupToSystemGroupMap',
      slice.call(arguments, 0)
    );
  },

  getDefaultOrg: function getDefaultOrg(key) {
    return clientWrapper('user.external.getDefaultOrg',[key]);
  },

  getExternalGroupToRoleMap: function getExternalGroupToRoleMap(key, name) {
    return clientWrapper(
      'user.external.getExternalGroupToRoleMap',
      slice.call(arguments, 0)
    );
  },

  getExternalGroupToSystemGroupMap: function getExternalGroupToSystemGroupMap(key, name) {
    return clientWrapper(
      'user.external.getExternalGroupToSystemGroupMap',
      slice.call(arguments, 0)
    );
  },

  getKeepTemporaryRoles: function getKeepTemporaryRoles(key) {
    return clientWrapper('user.external.getKeepTemporaryRoles', [key]);
  },

  getUseOrgUnit: function getUseOrgUnit(key) {
    return clientWrapper('user.external.getUseOrgUnit', [key]);
  },

  listExternalGroupToRoleMaps: function listExternalGroupToRoleMaps(key) {
    return clientWrapper('user.external.listExternalGroupToRoleMaps', [key]);
  },

  listExternalGroupToSystemGroupMaps: function listExternalGroupToSystemGroupMaps(key) {
    return clientWrapper(
      'user.external.listExternalGroupToSystemGroupMaps',
      [key]
    );
  },

  setDefaultOrg: function setDefaultOrg(key, orgId) {
    return clientWrapper(
      'user.external.setDefaultOrg',
      slice.call(arguments, 0)
    );
  },

  setExternalGroupRoles: function setExternalGroupRoles(key, name, roles) {
    return clientWrapper(
      'user.external.setExternalGroupRoles',
      slice.call(arguments, 0)
    );
  },

  setExternalGroupSystemGroups: function setExternalGroupSystemGroups(key, name, groupNames) {
    return clientWrapper(
      'user.external.setExternalGroupSystemGroups',
      slice.call(arguments, 0)
    );
  },

  setKeepTemporaryRoles: function setKeepTemporaryRoles(key, keepRoles) {
    return clientWrapper(
      'user.external.setKeepTemporaryRoles',
      slice.call(arguments, 0)
    );
  },

  setUseOrgUnit: function setUseOrgUnit(key, useOrgUnit) {
    return clientWrapper(
      'user.external.setUseOrgUnit',
      slice.call(arguments, 0)
    );
  }
};