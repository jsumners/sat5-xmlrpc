'use strict';

const slice = Array.prototype.slice;
const clientWrapper = require('laic').laic
  .getNamespace('sat5-xmlrpc').get('clientWrapper');

module.exports = {
  addOrRemoveAdmins: function addRemAdmins(key, groupName, usernames, action) {
    return clientWrapper(
      'systemgroup.addOrRemoveAdmins',
      slice.call(arguments, 0)
    );
  },

  addOrRemoveSystems: function addRemSys(key, groupName, serverIds, action) {
    return clientWrapper(
      'systemgroup.addOrRemoveSystems',
      slice.call(arguments, 0)
    );
  },

  create: function create(key, name, description) {
    return clientWrapper('systemgroup.create', slice.call(arguments, 0));
  },

  delete: function del(key, name) {
    return clientWrapper('systemgroup.delete', slice.call(arguments, 0));
  },

  getDetails: function getDetails(key, id) {
    return clientWrapper('systemgroup.getDetails', slice.call(arguments, 0));
  },

  listActiveSystemsInGroup: function activeSystems(key, groupName) {
    return clientWrapper(
      'systemgroup.listActiveSystemsInGroup',
      slice.call(arguments, 0)
    );
  },

  listAdministrators: function listAdmins(key, groupName) {
    return clientWrapper(
      'systemgroup.listAdministrators',
      slice.call(arguments, 0)
    );
  },

  listAllGroups: function listAllGroups(key) {
    return clientWrapper('systemgroup.listAllGroups', [key]);
  },

  listGroupsWithNoAssociatedAdmins: function listNoAdmins(key) {
    return clientWrapper(
      'systemgroup.listGroupsWithNoAssociatedAdmins',
      [key]
    );
  },

  listInactiveSystemsInGroup: function listInactiveSys(key, groupName, days) {
    return clientWrapper(
      'systemgroup.listInactiveSystemsInGroup',
      slice.call(arguments, 0)
    );
  },

  listSystems: function listSystems(key, groupName) {
    return clientWrapper('systemgroup.listSystems', slice.call(arguments, 0));
  },

  listSystemsMinimal: function listSysMin(key, groupName) {
    return clientWrapper(
      'systemgroup.listSystemsMinimal',
      slice.call(arguments, 0)
    );
  },

  scheduleApplyErrataToActive: function schErrActve(key, groupName, ids, date) {
    return clientWrapper(
      'systemgroup.scheduleApplyErrataToActive',
      slice.call(arguments, 0)
    );
  },

  update: function update(key, groupName, description) {
    return clientWrapper('systemgroup.update', slice.call(arguments, 0));
  }
};