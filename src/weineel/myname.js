
module.exports = function (server) {
    server.route({
        method: 'GET',
        path:'/myname', 
        handler: function (request, reply) {
            return reply('weineel');
        }
    });

    server.route({
        method: 'POST',
        path:'/myname', 
        handler: function (request, reply) {
            return reply('post weineel');
        }
    });
}
