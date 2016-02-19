'use strict';

// Laic is used so that individual namespace files can be unit tested.
// (If anyone ever gets around to writing any tests.)

const fs = require('fs');
const path = require('path');
const laic = require('laic').laic;
let xmlRpcClient;
let satClient;

const ns = laic.addNamespace('sat5-xmlrpc');

function req(mod) {
  return require(path.join(__dirname, 'lib', mod));
}

function sortPaths(a, b) {
  // we need to prioritize the non-segmented paths so that the
  // object gets built in the right order.
  const aidx = a.indexOf('.');
  const bidx = b.indexOf('.');
  const anum = a.match(/\.+/g);
  const bnum = b.match(/\.+/g);

  if ((anum && bnum) && (anum.length > bnum.length)) {
    // foo.bar > foo.bar.baz
    return 1;
  }

  if (aidx !== -1 && bidx === -1) {
    // foo.bar < foo
    return 1;
  }

  if (aidx === -1 && bidx !== -1 ) {
    // foo > foo.bar
    return -1;
  }

  if (aidx !== -1 && bidx !== -1) {
    // foo.bar == foo.baz
    return 0
  }

  return 0;
}

/**
 * @property {string} host FQDN of the RHN server
 * @property {int} [port] Port to connect to. Default: `80`
 * @property {string} [path] Path to the API endpoint. Default `/rpc/api`
 * @property {boolean} [secure] Whether or not to use HTTPS. Default: `false`
 * @typedef {object} SatClientOptions
 */

/**
 * An interface for the Red Hat Satellite 5 XML-RPC API. Methods are implemented
 * in a chain fashion, and they return promises.
 *
 * **Note:** this client is implemented as a singleton. Successive calls to
 * the constructor will return the same instance as the first call.
 *
 * @example <caption>Logging in and out</caption>
 * satClient.auth.login('auser', 'apass').then((key) => {
 *   console.log('session key: %s', key);
 *   satClient.auth.logout(key);
 * })
 * .catch(console.error);
 *
 * @param {SatClientOptions} options
 * @constructor
 */
function SatClient(options) {
  if (satClient) {
    return satClient;
  }

  if (!options) {
    throw new Error('SatClient options object is required.');
  }

  const _options = Object.assign({path: '/rpc/api'}, options);
  _options.isSecure = (options.secure) ? options.secure : false;
  xmlRpcClient = req('xmlRpcClient')(_options);
  ns.register('clientWrapper', xmlRpcClient.wrapper, false);

  satClient = this;

  // we have to sort twice so that foo.bar comes before foo.bar.baz
  const files = fs.readdirSync(path.join(__dirname, 'lib'))
    .map(f => path.basename(f, '.js')).sort(sortPaths).sort(sortPaths);
  files.forEach(basename => {
    if (basename === 'xmlRpcClient' || basename === '_tmpl') {
      return;
    }

    if (basename.indexOf('.') === -1) {
      // non-segmented path
      Object.defineProperty(this, basename, {
        value: req(basename)
      });
    } else {
      // segmented path
      // we need to split it up, define the missing properties,
      // and then define the innermost property
      const parts = basename.split('.');
      const len = parts.length - 1;
      const lastPart = parts[len];
      parts.forEach((part, num) => {
        if (num !== len && !this.hasOwnProperty(part)) {
          Object.defineProperty(this, part, {value: {}});
        } else {
          const _parts = parts.slice(0, len);
          let obj = this;
          _parts.forEach(_p => {
            if (!obj.hasOwnProperty(_p)) {
              // for namespaces that are for legibility only, e.g
              // system.provisioning
              Object.defineProperty(obj, _p, {value:{}});
            }
            obj = obj[_p]
          });
          Object.defineProperty(obj, lastPart, {
            value: req(basename)
          });
        }
      })
    }
  });
}

module.exports = SatClient;