'use strict';

const slice = Array.prototype.slice;
const clientWrapper = require('laic').laic
  .getNamespace('sat5-xmlrpc').get('clientWrapper');

module.exports = {
  login: function authLogin(username, password, legth) {
    return clientWrapper('auth.login', slice.call(arguments, 0));
  },

  logout: function authLogout(key) {
    return clientWrapper('auth.logout', slice.call(arguments, 0));
  }
};