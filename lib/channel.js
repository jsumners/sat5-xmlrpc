'use strict';

const slice = Array.prototype.slice;
const clientWrapper = require('laic').laic
  .getNamespace('sat5-xmlrpc').get('clientWrapper');

module.exports = {
  listAllChannels: function listAllChannels(key) {
    return clientWrapper('channel.listAllChannels', [key]);
  },

  listMyChannels: function listMyChannels(key) {
    return clientWrapper('channel.listMyChannels', [key]);
  },

  listPopularChannels: function listPopularChannels(key, popCount) {
    return clientWrapper(
      'channel.listPopularChannels',
      slice.call(arguments, 0)
    );
  },

  listRetiredChannels: function listRetiredChannels(key) {
    return clientWrapper('channel.listRetiredChannels', [key]);
  },

  listSharedChannels: function listSharedChannels(key) {
    return clientWrapper('channel.listSharedChannels', [key]);
  },

  listSoftwareChannels: function listSoftwareChannels(key) {
    return clientWrapper('channel.listSoftwareChannels', [key]);
  },

  listVendorChannels: function listVendorChannels(key) {
    return clientWrapper('channel.listVendorChannels', [key]);
  }
};