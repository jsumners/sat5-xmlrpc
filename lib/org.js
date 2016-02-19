'use strict';

const slice = Array.prototype.slice;
const clientWrapper = require('laic').laic
  .getNamespace('sat5-xmlrpc').get('clientWrapper');

module.exports = {
  create: function create(key, name, adminLogin, adminPass, prefix, fName,lName, email, usePam) {
    return clientWrapper('org.create', slice.call(arguments, 0));
  },

  delete: function del(key, orgId) {
    return clientWrapper('org.delete', slice.call(arguments, 0));
  },

  getCrashFileSizeLimit: function getCrashFileSizeLimit(key, orgId) {
    return clientWrapper('org.getCrashFileSizeLimit', slice.call(arguments, 0));
  },

  getDetails: function getDetails(key, orgId) {
    return clientWrapper('org.getDetails', slice.call(arguments, 0));
  },

  getPolicyForScapFileUpload: function getPolicyForScapFileUpload(key, orgId) {
    return clientWrapper(
      'org.getPolicyForScapFileUpload',
      slice.call(arguments, 0)
    );
  },

  getPolicyForScapResultDeletion: function getPolicyForScapResultDeletion(key, orgId) {
    return clientWrapper(
      'org.getPolicyForScapResultDeletion',
      slice.call(arguments, 0)
    );
  },

  isCrashReportingEnabled: function isCrashReportingEnabled(key, orgId) {
    return clientWrapper(
      'org.isCrashReportingEnabled',
      slice.call(arguments, 0)
    );
  },

  isCrashFileUploadEnabled: function isCrashFileUploadEnabled(key, orgId) {
    return clientWrapper(
      'org.isCrashFileUploadEnabled',
      slice.call(arguments, 0)
    );
  },

  listOrgs: function listOrgs(key) {
    return clientWrapper('org.listOrgs', [key]);
  },

  listSoftwareEntitlements: function listSoftwareEntitlements(key) {
    return clientWrapper(
      'org.listSoftwareEntitlements',
      slice.call(arguments, 0)
    );
  },

  listSoftwareEntitlementsForOrg: function listSoftwareEntitlementsForOrg(key, orgId) {
    return clientWrapper(
      'org.listSoftwareEntitlementsForOrg',
      slice.call(arguments, 0)
    );
  },

  listSystemEntitlements: function listSystemEntitlements(key) {
    return clientWrapper(
      'org.listSystemEntitlements',
      slice.call(arguments, 0)
    );
  },

  listSystemEntitlementsForOrg: function listSystemEntitlementsForOrg(key, orgId) {
    return clientWrapper(
      'org.listSystemEntitlementsForOrg',
      slice.call(arguments, 0)
    );
  },

  listUsers: function listUsers(key, orgId) {
    return clientWrapper('org.listUsers', slice.call(arguments, 0));
  },

  migrateSystems: function migrateSystems(key, destOrgId, sysIds) {
    return clientWrapper(
      'org.migrateSystems',
      slice.call(arguments, 0)
    );
  },

  setCrashFileSizeLimit: function setCrashFileSizeLimit(key, orgId, limit) {
    return clientWrapper(
      'org.setCrashFileSizeLimit',
      slice.call(arguments, 0)
    );
  },

  setCrashReporting: function setCrashReporting(key, orgId, enable) {
    return clientWrapper(
      'org.setCrashReporting',
      slice.call(arguments, 0)
    );
  },

  setCrashFileUploading: function setCrashFileUploading(key, orgId, enable) {
    return clientWrapper(
      'org.setCrashFileUploading',
      slice.call(arguments, 0)
    );
  },

  setPolicyForScapFileUpload: function setPolicyForScapFileUpload(key, orgId, info) {
    return clientWrapper(
      'org.setPolicyForScapFileUpload',
      slice.call(arguments, 0)
    );
  },

  setPolicyForScapResultDeletion: function setPolicyForScapResultDeletion(key, orgId, info) {
    return clientWrapper(
      'org.setPolicyForScapResultDeletion',
      slice.call(arguments, 0)
    );
  },

  setSoftwareEntitlements: function setSoftwareEntitlements(key, orgId, label, alloc) {
    return clientWrapper(
      'org.setSoftwareEntitlements',
      slice.call(arguments, 0)
    );
  },

  setSoftwareFlexEntitlements: function setSoftwareFlexEntitlements(key, orgId, label, alloc) {
    return clientWrapper(
      'org.setSoftwareFlexEntitlements',
      slice.call(arguments, 0)
    );
  },

  setSystemEntitlements: function setSystemEntitlements(key, orgId, label, alloc) {
    return clientWrapper(
      'org.setSystemEntitlements',
      slice.call(arguments, 0)
    );
  },

  updateName: function updateName(key, orgId, name) {
    return clientWrapper(
      'org.updateName',
      slice.call(arguments, 0)
    );
  }
};