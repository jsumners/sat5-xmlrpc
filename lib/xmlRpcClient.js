'use strict';

let rpcClient;
const xmlrpc = require('xmlrpc');

module.exports = function xmlRpcClient(options) {
  if (rpcClient) {
    return rpcClient;
  }

  rpcClient = xmlrpc.createClient(options);
  rpcClient.wrapper = module.exports.wrapper;
  return rpcClient;
};

module.exports.wrapper = function wrapper(method, params) {
  function promise(resolve, reject) {
    rpcClient.methodCall(method, params, (err, res) => {
      if (err) {
        return reject(err);
      }

      return resolve(res);
    });
  }

  return new Promise(promise);
};