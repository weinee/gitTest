module.exports=function(server){
	server.route({
    method: 'GET',
    path:'/myname', 
    handler: function (request, reply) {

        return reply('june');
    }
});
	server.route({
    method: 'POST',
    path:'/myname', 
    handler: function (request, reply) {

        return reply('post june');
    }
});
}