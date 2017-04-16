'use strict';

const Hapi = require('hapi');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({ 
    host: 'localhost', 
    port: 8000 
});
<<<<<<< HEAD
require('./src/june')(server);
=======

var weineelFunc = require('./src/weineel');
weineelFunc(server);

>>>>>>> fbcffa83588583d2a15472111868f09cc499b737
// Add the route
server.route({
    method: 'GET',
    path:'/hello', 
    handler: function (request, reply) {
        return reply('hello world  22');
    }
});

// Start the server
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});
