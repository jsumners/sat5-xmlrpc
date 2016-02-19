'use strict';

const slice = Array.prototype.slice;
const clientWrapper = require('laic').laic
  .getNamespace('sat5-xmlrpc').get('clientWrapper');

module.exports = {
  listLocales: function listLocales() {
    return clientWrapper(
      'preferences.locale.listLocales',
      slice.call(arguments, 0)
    );
  },

  listTimeZones: function listTimeZones() {
    return clientWrapper(
      'preferences.locale.listTimeZones',
      slice.call(arguments, 0)
    );
  },

  setLocale: function setLocale(key, login, locale) {
    return clientWrapper(
      'preferences.locale.setLocale',
      slice.call(arguments, 0)
    );
  },

  setTimeZone: function setTimeZone(key, login, tzid) {
    return clientWrapper(
      'preferences.locale.setTimeZone',
      slice.call(arguments, 0)
    );
  }
};