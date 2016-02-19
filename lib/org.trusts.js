'use strict';

const slice = Array.prototype.slice;
const clientWrapper = require('laic').laic
  .getNamespace('sat5-xmlrpc').get('clientWrapper');

module.exports = {
  addTrust: function addTrust(key, orgId, trustOrgId) {
    return clientWrapper('org.trusts.addTrust', slice.call(arguments, 0));
  },

  getDetails: function getDetails(key, trustOrgId) {
    return clientWrapper('org.trusts.getDetails', slice.call(arguments, 0));
  },

  listChannelsConsumed: function listChannelsConsumed(key, trustOrgId) {
    return clientWrapper(
      'org.trusts.listChannelsConsumed',
      slice.call(arguments, 0)
    );
  },

  listChannelsProvided: function listChannelsProvided(key, trustOrgId) {
    return clientWrapper(
      'org.trusts.listChannelsProvided',
      slice.call(arguments, 0)
    );
  },

  listOrgs: function listOrgs(key) {
    return clientWrapper('org.trusts.listOrgs', [key]);
  },

  listSystemsAffected: function listSystemsAffected(key, orgId, trustOrgId) {
    return clientWrapper(
      'org.trusts.listSystemsAffected',
      slice.call(arguments, 0)
    );
  },

  listTrusts: function listTrusts(key, orgId) {
    return clientWrapper('org.trusts.listTrusts', slice.call(arguments, 0));
  },

  removeTrust: function removeTrust(key, orgId, trustOrgId) {
    return clientWrapper('org.trusts.removeTrust', slice.call(arguments, 0));
  }
};