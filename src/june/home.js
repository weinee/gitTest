
module.exports = function (server) {
    server.route({
        method: 'GET',
        path:'/june/home', 
        handler: function (request, reply) {
            return reply.view('june/home');
        }
    });

    // server.route({
    //     method: 'POST',
    //     path:'/myname', 
    //     handler: function (request, reply) {
    //         return reply('post weineel');
    //     }
    // });
}
