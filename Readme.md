# sat5-xmlrpc

This is a library that provides a client interface to the XML-RPC API exposed
by Red Hat's [Satellite 5][sat5]. The methods of the client match those of
the [API namespaces][apins]. For example, the login method would be:
`client.auth.login(username, password)`.

Any API method that has multiple signatures, e.g. one with a date parameter
and one without a date parameter, are defined only *once* within the
*sat5-xmlrpc* client. The signature with the fewest parameters is defined. The
single method will handle all variations of the method. Simply pass the
parameters in the order defined in the [documentation][apins].

Installing is simple:

```bash
$ npm install --save sat5-xmlrpc
```

[sat5]: https://access.redhat.com/documentation/en/red-hat-network-satellite/
[apins]: https://access.redhat.com/documentation/en-US/Red_Hat_Network_Satellite/5.5/html/API_Overview/files/html/index.html

## Example

```javascript
'use strict';

const ty = require('then-yield');
const SatClient = require('sat5-xmlrpc');
const client = new SatClient({
  host: 'rhn.example.com'
});

function* doit() {
  let message = '';

  try {
    // Login and get a session key
    const key = yield client.auth.login('your_user', 'supersecret');

    // Get the details for an errata release
    const details = yield client.errata.getDetails(key, 'RHSA-2016:0175');
    message += details.synopsis + '\n\n';

    // Determine which systems are affected by the errata
    const affectedSystems =
      yield client.errata.listAffectedSystems(key, 'RHSA-2016:0175');
    const affectedSysIds = affectedSystems.map(sys => sys.id);

    // Get the systems in a system group named "PROD"
    const prodSystems = yield client.systemgroup.listSystemsMinimal(key, 'PROD');

    // List the "PROD" systems that are affected by the errata
    message += 'Affected systems:\n\n';
    prodSystems.forEach((sys) => {
      if (affectedSysIds.indexOf(sys.id) !== -1) {
        message += `    * ${sys.name}\n`;
      }
    });

    message += `\n${details.description}`;
    console.log(message);


    // End the API session
    client.auth.logout(key);
  } catch (e) {
    console.error(e);
  }
}

ty.spawn(doit);
```

## Options

The `SatClient` constructor requires an options parameter to be supplied. That
parameter has the following form:

```javascript
{
  host: 'fqdn.to.satellite.server',
  port: 80, // optional
  path: '/rpc/api', // optional
  secure: false // optional
}
```

## License

[MIT License](http://jsumners.mit-license.org/)