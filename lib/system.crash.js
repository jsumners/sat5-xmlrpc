'use strict';

const slice = Array.prototype.slice;
const clientWrapper = require('laic').laic
  .getNamespace('sat5-xmlrpc').get('clientWrapper');

module.exports = {
  createCrashNote: function createCrashNote(key, crashId, subject, details) {
    return clientWrapper(
      'system.crash.createCrashNote',
      slice.call(arguments, 0)
    );
  },

  deleteCrash: function deleteCrash(key, crashId) {
    return clientWrapper(
      'system.crash.deleteCrash',
      slice.call(arguments, 0)
    );
  },

  deleteCrashNote: function deleteCrashNote(key, crashNoteId) {
    return clientWrapper(
      'system.crash.deleteCrashNote',
      slice.call(arguments, 0)
    );
  },

  getCrashCountInfo: function getCrashCountInfo(key, serverId) {
    return clientWrapper(
      'system.crash.getCrashCountInfo',
      slice.call(arguments, 0)
    );
  },

  getCrashFile: function getCrashFile(key, crashFileId) {
    return clientWrapper(
      'system.crash.getCrashFile',
      slice.call(arguments, 0)
    );
  },

  getCrashFileUrl: function getCrashFileUrl(key, crashFileId) {
    return clientWrapper(
      'system.crash.getCrashFileUrl',
      slice.call(arguments, 0)
    );
  },

  getCrashNotesForCrash: function getCrashNotesForCrash(key, crashId) {
    return clientWrapper(
      'system.crash.getCrashNotesForCrash',
      slice.call(arguments, 0)
    );
  },

  getCrashOverview: function getCrashOverview(key) {
    return clientWrapper('system.crash.getCrashOverview', [key]);
  },

  getCrashesByUuid: function getCrashesByUuid(key, uuid) {
    return clientWrapper(
      'system.crash.getCrashesByUuid',
      slice.call(arguments, 0)
    );
  },

  listSystemCrashFiles: function listSystemCrashFiles(key, crashId) {
    return clientWrapper(
      'system.crash.listSystemCrashFiles',
      slice.call(arguments, 0)
    );
  },

  listSystemCrashes: function listSystemCrashes(key, serverId) {
    return clientWrapper(
      'system.crash.listSystemCrashes',
      slice.call(arguments, 0)
    );
  }
};