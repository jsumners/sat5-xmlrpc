'use strict';

const slice = Array.prototype.slice;
const clientWrapper = require('laic').laic
  .getNamespace('sat5-xmlrpc').get('clientWrapper');

module.exports = {
  create: function create(key, name, files) {
    return clientWrapper(
      'kickstart.filepreservation.create',
      slice.call(arguments, 0)
    );
  },

  delete: function del(key, name) {
    return clientWrapper(
      'kickstart.filepreservation.delete',
      slice.call(arguments, 0)
    );
  },

  getDetails: function getDetails(key, name) {
    return clientWrapper(
      'kickstart.filepreservation.getDetails',
      slice.call(arguments, 0)
    );
  },

  listAllFilePreservations: function listAllFilePreservations(key) {
    return clientWrapper(
      'kickstart.filepreservation.listAllFilePreservations',
      [key]
    );
  }
};