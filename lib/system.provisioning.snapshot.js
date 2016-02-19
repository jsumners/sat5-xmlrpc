'use strict';

const slice = Array.prototype.slice;
const clientWrapper = require('laic').laic
  .getNamespace('sat5-xmlrpc').get('clientWrapper');

module.exports = {
  addTagToSnapshot: function addTagToSnapshot(key, snapId, tag) {
    return clientWrapper(
      'system.provisioning.snapshot.addTagToSnapshot',
      slice.call(arguments, 0)
    );
  },

  deleteSnapshot: function deleteSnapshot(key, snapId) {
    return clientWrapper(
      'system.provisioning.snapshot.deleteSnapshot',
      slice.call(arguments, 0)
    );
  },

  deleteSnapshots: function deleteSnapshots(key, dateDetails) {
    return clientWrapper(
      'system.provisioning.snapshot.deleteSnapshots',
      slice.call(arguments, 0)
    );
  },

  listSnapshotConfigFiles: function listSnapshotConfigFiles(key, snapId) {
    return clientWrapper(
      'system.provisioning.snapshot.listSnapshotConfigFiles',
      slice.call(arguments, 0)
    );
  },

  listSnapshotPackages: function listSnapshotPackages(key, snapId) {
    return clientWrapper(
      'system.provisioning.snapshot.listSnapshotPackages',
      slice.call(arguments, 0)
    );
  },

  listSnapshots: function listSnapshots(key, serverId, dateDetails) {
    return clientWrapper(
      'system.provisioning.snapshot.listSnapshots',
      slice.call(arguments, 0)
    );
  },

  rollbackToSnapshot: function rollbackToSnapshot(key, serverId, snapId) {
    return clientWrapper(
      'system.provisioning.snapshot.rollbackToSnapshot',
      slice.call(arguments, 0)
    );
  },

  rollbackToTag: function rollbackToTag(key, tagName) {
    return clientWrapper(
      'system.provisioning.snapshot.rollbackToTag',
      slice.call(arguments, 0)
    );
  }
};