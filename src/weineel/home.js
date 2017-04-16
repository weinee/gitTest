
module.exports = function (server) {
    server.route({
        method: 'GET',
        path:'/weineel/home', 
        handler: function (request, reply) {
            return reply.view('weineel/home');
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
