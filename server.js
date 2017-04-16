'use strict';

const Hapi = require('hapi');
const join = require('path').join;

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({ 
    host: 'localhost', 
    port: 8000 
});

// 注册插件
server.register([
    require('vision'),
    require('inert')
], (err) => {
    if (err) {
        console.log(red('error'), '注册出错', err.message);
        throw err;
    }

    // console.log('jade view path', join(__dirname, 'views'));
    // 初始化
    server.views({
        engines: {ejs: require('ejs')},
        path: join(__dirname, 'views')
    });

});

require('./src/june')(server);
var weineelFunc = require('./src/weineel');
weineelFunc(server);

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
