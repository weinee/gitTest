
module.exports = function (server) {
    server.route({
        method: 'GET',
        path:'/weineel/myname', 
        handler: function (request, reply) {
            return reply('weineel');
        }
    });

    server.route({
        method: 'POST',
        path:'/weineel/myname', 
        handler: function (request, reply) {
            return reply('post weineel');
        }
    });
}
