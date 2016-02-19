'use strict';

const slice = Array.prototype.slice;
const clientWrapper = require('laic').laic
  .getNamespace('sat5-xmlrpc').get('clientWrapper');

module.exports = {
  addPackages: function addPackages(key, name, ids) {
    return clientWrapper('errata.addPackages', slice.call(arguments, 0));
  },

  applicableToChannels: function applicableToChannels(key, name) {
    return clientWrapper(
      'errata.applicableToChannels',
      slice.call(arguments, 0)
    );
  },

  bugzillaFixes: function bugzillaFixes(key, name) {
    return clientWrapper('errata.bugzillaFixes', slice.call(arguments, 0));
  },

  clone: function clone(key, channelLabel, advisories) {
    return clientWrapper('errata.clone', slice.call(arguments, 0));
  },

  cloneAsOriginal: function cloneAsOriginal(key, channelLabel, advisories) {
    return clientWrapper('errata.cloneAsOriginal', slice.call(arguments, 0));
  },

  cloneAsOriginalAsync: function cloneOrigAsync(key, channelLabel, advisories) {
    return clientWrapper(
      'errata.cloneAsOriginalAsync',
      slice.call(arguments, 0)
    );
  },

  cloneAsync: function cloneAsync(key, channelLabel, advisories) {
    return clientWrapper('errata.cloneAsync', slice.call(arguments, 0));
  },

  create: function create(key, info, bugs, keywords, ids, publish, channels) {
    return clientWrapper('errata.create', slice.call(arguments, 0));
  },

  delete: function del(key, name) {
    return clientWrapper('errata.delete', slice.call(arguments, 0));
  },

  findByCve: function findByCve(key, cveName) {
    return clientWrapper('errata.findByCve', slice.call(arguments, 0));
  },

  getDetails: function getDetails(key, name) {
    return clientWrapper('errata.getDetails', slice.call(arguments, 0));
  },

  listAffectedSystems: function listAffectedSystems(key, name) {
    return clientWrapper(
      'errata.listAffectedSystems',
      slice.call(arguments, 0)
    );
  },

  listCves: function listCves(key, advisoryName) {
    return clientWrapper('errata.listCves', slice.call(arguments, 0));
  },

  listKeywords: function listKeywords(key, advisoryName) {
    return clientWrapper('errata.listKeywords', slice.call(arguments, 0));
  },

  listPackages: function listPackages(key, advisortyName) {
    return clientWrapper('errata.listPackages', slice.call(arguments, 0));
  },

  listUnpublishedErrata: function listUnpublishedErrata(key) {
    return clientWrapper('errata.listUnpublishedErrata', [key]);
  },

  publish: function publish(key, advisoryName, channels) {
    return clientWrapper('errata.publish', slice.call(arguments, 0));
  },

  publishAsOriginal: function publishAsOriginal(key, advisoryName, channels) {
    return clientWrapper('errata.publishAsOriginal', slice.call(arguments, 0));
  },

  removePackages: function removePackages(key, advisoryName, packageIds) {
    return clientWrapper('errata.removePackages', slice.call(arguments, 0));
  },

  setDetails: function setDetails(key, advisoryName, details) {
    return clientWrapper('errata.setDetails', slice.call(arguments, 0));
  }
};