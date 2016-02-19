'use strict';

const slice = Array.prototype.slice;
const clientWrapper = require('laic').laic
  .getNamespace('sat5-xmlrpc').get('clientWrapper');

module.exports = {
  archiveActions: function archiveActions(key, actionIds) {
    return clientWrapper('schedule.archiveActions', slice.call(arguments, 0));
  },

  cancelActions: function cancelActions(key, actionIds) {
    return clientWrapper('schedule.cancelActions', slice.call(arguments, 0));
  },

  deleteActions: function deleteActions(key, actionIds) {
    return clientWrapper('schedule.deleteActions', slice.call(arguments, 0));
  },

  listAllActions: function listAllActions(key) {
    return clientWrapper('schedule.listAllActions', [key]);
  },

  listArchivedActions: function listArchivedActions(key) {
    return clientWrapper('schedule.listArchivedActions', [key]);
  },

  listCompletedActions: function listCompletedActions(key) {
    return clientWrapper('schedule.listCompletedActions', key);
  },

  listCompletedSystems: function listCompletedSystems(key, actionId) {
    return clientWrapper(
      'schedule.listCompletedSystems',
      slice.call(arguments, 0)
    );
  },

  listFailedActions: function listFailedActions(key) {
    return clientWrapper('schedule.listFailedActions', [key]);
  },

  listFailedSystems: function listFailedSystems(key, actionId) {
    return clientWrapper(
      'schedule.listFailedSystems',
      slice.call(arguments, 0)
    );
  },

  listInProgressActions: function listInProgressActions(key) {
    return clientWrapper('schedule.listInProgressActions', [key]);
  },

  listInProgressSystems: function listInProgressSystems(key, actionId) {
    return clientWrapper(
      'schedule.listInProgressSystems',
      slice.call(arguments, 0)
    );
  },

  rescheduleActions: function rescheduleActions(key, actionIds, onlyFailed) {
    return clientWrapper(
      'schedule.rescheduleActions',
      slice.call(arguments, 0)
    );
  }
};